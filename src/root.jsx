import PickList from "./pickList";
import Speechslot from "./speechSlot";
import {
    getTime,
    getNameFromRichTextRecord,
    getRichTextRecordContent,
} from 'utils/utils';
import './root.css';
import {RolesRecord} from 'model/records';
import Roles from 'components/roles';

const SPREADSHEET_ID = '1tsv0pJv6i6W8IG809Kod12x58e_7s_IfF785u4UUdpg';

// Names of speaker roes
const SPEAKER_NAMES = [
    'Speaker 1',
    'Speaker 2',
    'Backup Speaker',
];

// Names of speaker records.
const SPEAKER_RECORDS = [
    'speaker1',
    'speaker2',
    'backupSpeaker',
];

// Names of speech title records.
const SPEECH_TITLE_RECORDS = [
    'speechTitle1',
    'speechTitle2',
    'backupSpeechTitle',
];


class SpeechSelect extends quip.apps.RichTextRecord {
    static getProperties = () => ({details: 'string'});

    static getDefaultProperties = () => ({details: ''});
}

quip.apps.registerClass(SpeechSelect, 'draggable-card');

const NAME_PROMPT = 'Add a name using @Person';

class RootRecord extends quip.apps.RootRecord {
    static getProperties = () => ({
        date: quip.apps.RichTextRecord,
        roles: RolesRecord,

        // Old data model.
        toastmaster: quip.apps.RichTextRecord,
        jokemaster: quip.apps.RichTextRecord,
        topicsmaster: quip.apps.RichTextRecord,
        generalEvaluator: quip.apps.RichTextRecord,
        speaker1: quip.apps.RichTextRecord,
        speechTitle1: quip.apps.RichTextRecord,
        speaker2: quip.apps.RichTextRecord,
        speechTitle2: quip.apps.RichTextRecord,
        backupSpeaker: quip.apps.RichTextRecord,
        backupSpeechTitle: quip.apps.RichTextRecord,
        evaluator1: quip.apps.RichTextRecord,
        evaluator2: quip.apps.RichTextRecord,
        grammarian: quip.apps.RichTextRecord,
        timer: quip.apps.RichTextRecord,
        ahCounter: quip.apps.RichTextRecord,
        speakerSlot: quip.apps.RecordList.Type(SpeechSelect),
    });

    static getDefaultProperties = () => ({
        date: {
            RichText_placeholderText: "When is the meeting? Start with @Date",
        },
        roles: {},

        // Old data model.
        toastmaster: { RichText_placeholderText: NAME_PROMPT },
        jokemaster: { RichText_placeholderText: NAME_PROMPT },
        topicsmaster: { RichText_placeholderText: NAME_PROMPT },
        generalEvaluator: { RichText_placeholderText: NAME_PROMPT },
        speaker1: { RichText_placeholderText: NAME_PROMPT },
        speechTitle1: { RichText_placeholderText: "Add a speech title" },
        speaker2: { RichText_placeholderText: NAME_PROMPT },
        speechTitle2: { RichText_placeholderText: "Add a speech title" },
        backupSpeaker: { RichText_placeholderText: NAME_PROMPT },
        backupSpeechTitle: { RichText_placeholderText: "Add a speech title" },
        evaluator1: { RichText_placeholderText: NAME_PROMPT },
        evaluator2: { RichText_placeholderText: NAME_PROMPT },
        grammarian: { RichText_placeholderText: NAME_PROMPT },
        timer: { RichText_placeholderText: NAME_PROMPT },
        ahCounter: { RichText_placeholderText: NAME_PROMPT },
        // Initialize three speaker slots.
        speakerSlot: [{}, {}, {}],
    });

    static DATA_VERSION = 1;
}

quip.apps.registerClass(RootRecord, 'root');

const PlainRichTextBox = props => (
    <quip.apps.ui.RichTextBox
        {...props}
        allowedStyles={[quip.apps.RichTextRecord.Style.TEXT_PLAIN]}
        allowedInlineStyles={[]}
        disableInlineMenus={true}
    />
);

class Root extends React.Component {
    postToPath(_arr, tryRefresh = true) {
        const authObject = quip.apps.auth("gdrive");
        const jwtKey = authObject.getTokenResponseParam("access_token");
        const requestParams = {
            method: 'POST',
            data: { "values": [_arr] },
            headers: { 'authorization': 'Bearer ' + jwtKey },
            url: (
                `https://sheets.googleapis.com/v4/spreadsheets/` +
                `${SPREADSHEET_ID}/values/Sheet1:append?` +
                `valueInputOption=USER_ENTERED&alt=json`
            ),
        };
        return authObject.request(requestParams).then(response => {
            if (response.status == 401 && tryRefresh) {
                return this.refreshToken().then(response =>
                    this.postToPath(_arr, false)
                );
            } else if (response.ok) {
                return response.json();
            } else {
                return Promise.reject();
            }
        });
    }

    refreshToken() {
        return quip.apps.auth("gdrive").refreshToken().then(response => {
            if (response && response.ok) {
                return response;
            } else {
                return Promise.reject(response);
            }
        });
    }

    setSpeech(speechIndex, value) {
        quip.apps.getRootRecord()
            .get('speakerSlot')
            .get(speechIndex)
            .set('details', value);

        // Force a render without state change to show speech details.
        this.forceUpdate();
    }

    // JSON format: refer to agenda.json for details
    openTab = () => {
        // Ordered list of keys expected when archiving agenda data.
        const archiveDataKeys = [
            'date',
            'toastmaster',
            'grammarian',
            'ahCounter',
            'timer',
            'topicsmaster',
            'speechTitle1',
            'project1',
            'speaker1',
            'duration1',
            'speechTitle2',
            'project2',
            'speaker2',
            'duration2',
            'backupSpeechTitle',
            'backupProject',
            'backupSpeaker',
            'backupDuration',
            'generalEvaluator',
            'evaluator1',
            'evaluator2',
        ];
        const rootRecord = quip.apps.getRootRecord();
        const speeches = rootRecord
            .get('speakerSlot')
            .getRecords()
            // Exclude backup speaker from printed agenda by slicing array.
            .slice(0, 2)
            .map((card, i) => {
                const project = card.get('details');
                const duration = getTime(card.get('details'));
                const speaker = getNameFromRichTextRecord(
                    rootRecord.get(SPEAKER_RECORDS[i]),
                );
                const title = getRichTextRecordContent(
                    rootRecord.get(SPEECH_TITLE_RECORDS[i]),
                );
                return {project, duration, speaker, title};
            })
            // Leave only speech objects with at least one non-blank value.
            .filter(speech => Object.values(speech).some(x => x));

        const archiveData = {
            date: getRichTextRecordContent(rootRecord.get('date')),
            ...Object.assign({},
                ...speeches.map(({project, duration, speaker, title}, i) => ({
                    [`project${i+1}`]: project,
                    [`duration${i+1}`]: duration,
                    [`speaker${i+1}`]: speaker,
                    [`speechTitle${i+1}`]: title,
                })),
            ),
        };

        const printAgendaData = {
            version: '1.0',
            data: {
                officers: {
                    president: 'KC Lakshminarasimham',
                    vpm: 'Anny He',
                    vpe: 'Srinath Krishna Ananthakrishnan',
                    vppr: 'Max Kukartsev',
                    secretary: 'Rosaura Arevalo',
                    soa: 'Jack Faraday',
                    treasurer: 'Ron Sison',
                },
                date: archiveData.date,
                items: {speeches},
            },
        };

        Object.entries(rootRecord.getData()).forEach(([key, record]) => {
            if (
                key === 'date' ||
                key === 'speakerSlot' ||
                key.startsWith('speaker') ||
                key.startsWith('speechTitle')
            ) {
                return;
            }
            // Assign remaining entries to both data targets.
            archiveData[key] = printAgendaData.data.items[key] =
                getNameFromRichTextRecord(record);
        });

        // Construct ordered array of archive agenda data ans POST to save to
        // Google Sheet.
        this.postToPath(archiveDataKeys.map(key => archiveData[key]));

        // Open print agenda page in new tab.
        quip.apps.openLink(
            'https://toastmasters-dev.github.io/print-agenda/?data=' +
            encodeURIComponent(JSON.stringify(printAgendaData)),
        );
    }

    getSpeakerSlotRow(speakers, speechTitles, card, i) {
        // Make callback specific to this speech number.
        const setSpeech = this.setSpeech.bind(this, i);

        return (
            <tr key={i}>
                <td>{SPEAKER_NAMES[i]}</td>
                <td>
                    <PlainRichTextBox record={speakers[i]} />
                    <div className="speechTitle">
                        <span>Title:</span>
                        <PlainRichTextBox record={speechTitles[i]} />
                    </div>
                    {
                        card.get('details') ? (
                            <Speechslot
                                card={card}
                                removeValue={() => setSpeech('')}
                            />
                        ) : (
                            <PickList
                                card={card}
                                setSpeech={setSpeech}
                            />
                        )
                    }
                </td>
            </tr>
        );
    };

    render() {
        const record = quip.apps.getRootRecord();
        const date = record.get("date");
        const toastmaster = record.get("toastmaster");
        const jokemaster = record.get("jokemaster");
        const topicsmaster = record.get('topicsmaster');
        const generalEvaluator = record.get('generalEvaluator');
        const evaluator1 = record.get('evaluator1');
        const evaluator2 = record.get('evaluator2');
        const grammarian = record.get('grammarian');
        const timer = record.get('timer');
        const ahCounter = record.get('ahCounter');

        // Get speaker record data.
        const speakers = SPEAKER_RECORDS.map(name => record.get(name));
        // Get speech title record data.
        const speechTitles = SPEECH_TITLE_RECORDS.map(name => record.get(name));

        const speakerSlots = record
            .get('speakerSlot')
            .getRecords()
            .map(this.getSpeakerSlotRow.bind(this, speakers, speechTitles));

        return (
            <table className="root">
                <tr>
                    <td>Meeting Date</td>
                    <td><PlainRichTextBox record={date} /></td>
                </tr>
                <tr>
                    <td>Toastmaster</td>
                    <td><PlainRichTextBox record={toastmaster} /></td>
                </tr>
                <tr>
                    <td>Grammarian</td>
                    <td><PlainRichTextBox record={grammarian} /></td>
                </tr>
                <tr>
                    <td>Timer</td>
                    <td><PlainRichTextBox record={timer} /></td>
                </tr>
                <tr>
                    <td>Ah Counter</td>
                    <td><PlainRichTextBox record={ahCounter} /></td>
                </tr>
                <tr>
                    <td>Jokemaster</td>
                    <td><PlainRichTextBox record={jokemaster} /></td>
                </tr>
                <tr>
                    <td>Topicsmaster</td>
                    <td><PlainRichTextBox record={topicsmaster} /></td>
                </tr>
                {speakerSlots}
                <tr>
                    <td>General Evaluator</td>
                    <td><PlainRichTextBox record={generalEvaluator} /></td>
                </tr>
                <tr>
                    <td>Evaluator 1</td>
                    <td><PlainRichTextBox record={evaluator1} /></td>
                </tr>
                <tr>
                    <td>Evaluator 2</td>
                    <td><PlainRichTextBox record={evaluator2} /></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <quip.apps.ui.Button
                            onClick={this.openTab}
                            primary={true}
                            text='Save and Print'
                        />
                    </td>
                </tr>
            </table>
        );
    }
}

quip.apps.initialize({
    initializationCallback: (root, params) => {
        const rootRecord = quip.apps.getRootRecord();

        if (params.isCreation) {
            // RootRecord does not initialize its data version property upon
            // creation, so set it manually. See
            // https://salesforce.stackexchange.com/q/248755.
            rootRecord.setDataVersion(RootRecord.DATA_VERSION);
        }

        let newDataVersion =
            rootRecord.getDataVersion() === RootRecord.DATA_VERSION;

        if (!newDataVersion) {
            migrateData();
            rootRecord.setDataVersion(RootRecord.DATA_VERSION);
            newDataVersion = true;
            console.log(
                `Successfully migrated Toastmasters Agenda with root ` +
                `record ID ${rootRecord.getUniqueId()} and meeting date ` +
                `${getRichTextRecordContent(rootRecord.get('date'))} to new ` +
                `data version.`,
            );
        }

        ReactDOM.render(
            // Based on detected data version, render new or old React
            // component.
            newDataVersion ? <Roles /> : <Root />,
            root,
        );
    },
});

function migrateData() {
    const rootRecord = quip.apps.getRootRecord();

    rootRecord.set('roles', {
        // Explicitly set to empty array to prevent record initialization
        // logic from creating default entries.
        roleRecordIds: [],
    });

    const roles = rootRecord.get('roles');
    const roleRecordIds = roles.get('roleRecordIds');
    const plainRoles = roles.get('plainRoles');
    const speechRoles = roles.get('speechRoles');

    [
        ['toastmaster', 'Toastmaster'],
        ['ahCounter', 'Ah Counter'],
        ['grammarian', 'Grammarian'],
        ['timer', 'Timer'],
        ['jokemaster', 'Jokemaster'],
    ].forEach(migratePlainRoleRecord);

    const speeches = rootRecord
        .get('speakerSlot')
        .getRecords()
        .forEach((oldRecord, i) => {
            const newRecord = speechRoles.add({
                roleName: SPEAKER_NAMES[i],
                speechProject: oldRecord.get('details'),
            });
            newRecord.clear('person');
            newRecord.clear('speechTitle');
            const person = rootRecord.clear(SPEAKER_RECORDS[i], true);
            newRecord.set('person', person);
            const speechTitle =
                rootRecord.clear(SPEECH_TITLE_RECORDS[i], true);
            newRecord.set('speechTitle', speechTitle);
            roleRecordIds.add({roleRecordId: newRecord.getId()});
        });

    rootRecord.clear('speakerSlot');
    rootRecord.clear('backupSpeaker');
    rootRecord.clear('backupSpeechTitle');

    [
        ['topicsmaster', 'Topicsmaster'],
        ['generalEvaluator', 'General Evaluator'],
        ['evaluator1', 'Evaluator 1'],
        ['evaluator2', 'Evaluator 2'],
    ].forEach(migratePlainRoleRecord);

    function migratePlainRoleRecord([oldRecordName, roleName]) {
        const newRecord = plainRoles.add({roleName});
        newRecord.clear('person');
        const person = rootRecord.clear(oldRecordName, true);
        newRecord.set('person', person);
        roleRecordIds.add({roleRecordId: newRecord.getId()});
    }
}

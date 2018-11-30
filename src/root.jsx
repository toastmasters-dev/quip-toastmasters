import PickList from "./pickList";
import Speechslot from "./speechSlot";
import { getTime } from './utils';
import './root.css';

const SPREADSHEET_ID = '1tsv0pJv6i6W8IG809Kod12x58e_7s_IfF785u4UUdpg';
const ROLES = new Set([
    'toastmaster',
    'date',
    'toastmaster',
    'jokemaster',
    'topicsmaster',
    'generalEvaluator',
    'speaker1',
    'speaker2',
    'evaluator1',
    'evaluator2',
    'grammarian',
    'timer',
    'ahCounter',
]);

class SpeechSelect extends quip.apps.RichTextRecord {
    static getProperties = () => ({details: 'string'});

    static getDefaultProperties = () => ({details: ''});
}

quip.apps.registerClass(SpeechSelect, 'draggable-card');

const NAME_PROMPT = 'Add a name using @Person';

class RootRecord extends quip.apps.RootRecord {
    static getProperties = () => ({
        date: quip.apps.RichTextRecord,
        toastmaster: quip.apps.RichTextRecord,
        jokemaster: quip.apps.RichTextRecord,
        topicsmaster: quip.apps.RichTextRecord,
        generalEvaluator: quip.apps.RichTextRecord,
        speaker1: quip.apps.RichTextRecord,
        speechTitle1: quip.apps.RichTextRecord,
        speaker2: quip.apps.RichTextRecord,
        speechTitle2: quip.apps.RichTextRecord,
        evaluator1: quip.apps.RichTextRecord,
        evaluator2: quip.apps.RichTextRecord,
        grammarian: quip.apps.RichTextRecord,
        timer: quip.apps.RichTextRecord,
        ahCounter: quip.apps.RichTextRecord,
        speakerSlot: quip.apps.RecordList.Type(SpeechSelect),
    })

    static getDefaultProperties = () => ({
        date: {
            RichText_placeholderText: "When is the meeting? Start with @Date",
        },
        toastmaster: { RichText_placeholderText: NAME_PROMPT },
        jokemaster: { RichText_placeholderText: NAME_PROMPT },
        topicsmaster: { RichText_placeholderText: NAME_PROMPT },
        generalEvaluator: { RichText_placeholderText: NAME_PROMPT },
        speaker1: { RichText_placeholderText: NAME_PROMPT },
        speechTitle1: { RichText_placeholderText: "Add a speech title" },
        speaker2: { RichText_placeholderText: NAME_PROMPT },
        speechTitle2: { RichText_placeholderText: "Add a speech title" },
        evaluator1: { RichText_placeholderText: NAME_PROMPT },
        evaluator2: { RichText_placeholderText: NAME_PROMPT },
        grammarian: { RichText_placeholderText: NAME_PROMPT },
        timer: { RichText_placeholderText: NAME_PROMPT },
        ahCounter: { RichText_placeholderText: NAME_PROMPT },
        speakerSlot: [],
    })
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

    setSpeech(speechInt, value) {
        quip.apps.getRootRecord()
            .get('speakerSlot')
            // Get speech record by index - 1 less than the speech number.
            .get(speechInt - 1)
            .set('details', value);

        // Force a render without state change to show speech details.
        this.forceUpdate();
    }

    // JSON format: refer to agenda.json for details
    openTab = () => {
        const orderedPayloadKeys = [
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
            'generalEvaluator',
            'evaluator1',
            'evaluator2',
        ];
        const record = quip.apps.getRootRecord();
        const speakerSlot = record.get("speakerSlot").getRecords();
        const payloadObject = {};
        const _speakerSlot = speakerSlot.map((card, i) => {
            // The speech number is 1 greater than the speech index.
            const _number = i + 1;
            const details = card.get('details');
            const duration = getTime(card.get('details'));
            payloadObject['project' + _number] = details;
            payloadObject['duration' + _number] = duration;

            return {
                project: details,
                duration,
            };
        });


        // TODO: get version form manifest.json or another config file
        const obj = {
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
                items: {speeches: _speakerSlot},
            },
        };

        Object.keys(record.getData()).forEach((_key) => {
            if (_key === 'speakerSlot') {
                return;
            }

            const _keyRecord = record.get(_key);
            // If this key corresponds to one of the roles, extract the name
            // of the @-mentioned person from the raw rich text content.
            const _value = ROLES.has(_key)
                ? getNameFromRichTextContent(_keyRecord)
                : _keyRecord.getTextContent().trim();
            payloadObject[_key] = _value;

            if (_key === 'date') {
                obj.data.date = _value;
            } else if (_key.startsWith('speaker')) {
                // get the last character
                const _index = parseInt(_key.slice(-1));
                obj.data.items.speeches[_index - 1].speaker = _value;
            } else if(_key.startsWith('speechTitle')) {
                // get the last character
                const _index = parseInt(_key.slice(-1));
                obj.data.items.speeches[_index - 1].title = _value;
            } else {
                obj.data.items[_key] = _value;
            }
        });

        orderedPayloadKeys.forEach((str, index) => {
            orderedPayloadKeys[index] = payloadObject[str];
        });

        // Save agenda data to Google Sheet.
        this.postToPath(orderedPayloadKeys);

        // Open print agenda page in new tab.
        quip.apps.openLink(
            'https://toastmasters-dev.github.io/print-agenda/?data=' +
            encodeURIComponent(JSON.stringify(obj)),
        );
    }

    getSpeakerSlotRow(speakerObj, speechTitleObj, card, i) {
        // The speech number is 1 greater than the speech index.
        const number = i + 1;
        // Make callback specific to this speech number.
        const setSpeech = this.setSpeech.bind(this, number);

        return (
            <tr key={i}>
                <td>Speaker {number}</td>
                <td>
                    <PlainRichTextBox record={speakerObj[number]} />
                    <div className="speechTitle">
                        <span>Title:</span>
                        <PlainRichTextBox record={speechTitleObj[number]} />
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
        const speakerObj = {
            1: record.get('speaker1'),
            2: record.get('speaker2'),
        };
        const speechTitleObj = {
            1: record.get('speechTitle1'),
            2: record.get('speechTitle2'),
        };
        const evaluator1 = record.get('evaluator1');
        const evaluator2 = record.get('evaluator2');
        const grammarian = record.get('grammarian');
        const timer = record.get('timer');
        const ahCounter = record.get('ahCounter');

        const speakerSlots = record
            .get('speakerSlot')
            .getRecords()
            .map(this.getSpeakerSlotRow.bind(this, speakerObj, speechTitleObj));

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
        const cardList = rootRecord.get("speakerSlot");
        if (params.isCreation) {
            cardList.add({});
            cardList.add({});
        }
        ReactDOM.render(<Root />, root);
    },
});

function getNameFromRichTextContent(richTextRecord) {
    if (richTextRecord.empty()) {
        return '';
    }
    const value = richTextRecord.getTextContent().trim()
    const match = value.match(/\[(.+?)\]\(https:\/\/[^\/]+\/\w+\)/);
    if (match) {
        return match[1];
    }
    return value;
}

import manifestJson from '../../app/manifest.json';
import {getRichTextRecordContent} from 'utils/utils';

const MIGRATION_FUNCTIONS = [
    migrateFromVersion0,
];

/**
 * Runs data migrations for old versions of the app.
 *
 * Since it is not possible to know when all apps have migrated over, the
 * recommendation is to not drop old migration functions.
 */
export default function runMigrations() {
    const rootRecord = quip.apps.getRootRecord();
    const dataVersion = rootRecord.getDataVersion();
    const latestVersion = rootRecord.constructor.DATA_VERSION;

    if (latestVersion !== MIGRATION_FUNCTIONS.length) {
        throw new Error(
            `Mismatch between latest data version (${latestVersion}) and ` +
            `number of migration functions (${MIGRATION_FUNCTIONS.length}).`,
        );
    }

    if (dataVersion === latestVersion) {
        // Currently at latest data version. Nothing to do.

    } else if (dataVersion >= 0 && dataVersion < MIGRATION_FUNCTIONS.length) {
        // Currently at old data version. Migrate data.
        try {
            // Run all migration functions from the current data version until
            // the latest data version.
            MIGRATION_FUNCTIONS.slice(dataVersion).forEach(f => f());

        } catch (e) {
            // In case of an error, re-throw it. That way, Quip does not save
            // any record changes.
            console.warn(
                `Caught error while migrating ${getAppLogText()}. Rethrowing.`,
            );
            throw e;
        }

        // After all migrations ran successfully, update data version once to
        // reflect this.
        rootRecord.setDataVersion(rootRecord.constructor.DATA_VERSION);

        console.log(
            `Successfully migrated data for ${getAppLogText()} from old ` +
            `data version (${dataVersion}) to latest data version ` +
            `(${rootRecord.getDataVersion()}).`,
        );

    } else {
        console.warn(
            `Unexpected data version "${dataVersion}" for ${getAppLogText()}.`,
        );
    }
}

/**
 * Migrate rigid data model with fixed roles to flexible data model where roles
 * can be added or removed.
 */
function migrateFromVersion0() {
    const SPEAKER_NAMES = [
        'Speaker 1',
        'Speaker 2',
        'Backup Speaker',
    ];
    const SPEAKER_RECORDS = [
        'speaker1',
        'speaker2',
        'backupSpeaker',
    ];
    const SPEECH_TITLE_RECORDS = [
        'speechTitle1',
        'speechTitle2',
        'backupSpeechTitle',
    ];
    const rootRecord = quip.apps.getRootRecord();
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
        const person = rootRecord.clear(oldRecordName, true);
        const newRecord = plainRoles.add({roleName});
        newRecord.set('person', person);
        roleRecordIds.add({roleRecordId: newRecord.getId()});
    }
}

function getAppLogText() {
    const rootRecord = quip.apps.getRootRecord();

    return `app "${manifestJson.name}" with root record ID ` +
        `"${rootRecord.getUniqueId()}" and meeting date ` +
        `"${getMeetingDateText()}"`;
}

function getMeetingDateText() {
    const rootRecord = quip.apps.getRootRecord();

    try {
        let dateRecord = null;

        switch (rootRecord.getDataVersion()) {
            case 0:
            case 1:
                dateRecord = rootRecord.get('date');
                break;
            case 2:
                dateRecord = rootRecord.get('date').get('value');
                break;
            default:
                throw new Error();
        }

        return getRichTextRecordContent(dateRecord);

    } catch(e) {
        return '<error getting date>';
    }
}

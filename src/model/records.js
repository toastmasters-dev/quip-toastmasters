const NAME_PLACEHOLDER = 'Add a name using @Person';

class CommentableRecord extends quip.apps.Record {
    node = null;

    getDom() {
        return this.node;
    }

    setDom(node) {
        this.node = node;
    }

    supportsComments() {
        return true;
    }
}

export class DateRecord extends CommentableRecord {
    static getProperties = () => ({
        value: quip.apps.RichTextRecord,
    });

    static getDefaultProperties = () => ({
        value: {
            RichText_placeholderText: 'When is the meeting? Start with @Date',
        },
    });
}

quip.apps.registerClass(DateRecord, 'date-record');

export class RolesRecord extends quip.apps.Record {
    static getProperties = () => ({
        // List of record IDs, each of which points to a record in one of the
        // sibling record lists.
        roleRecordIds: quip.apps.RecordList.Type(RolePointerRecord),
        // All roles which are not for prepared speeches.
        plainRoles: quip.apps.RecordList.Type(PlainRoleRecord),
        // All roles for prepared speeches.
        speechRoles: quip.apps.RecordList.Type(SpeechRoleRecord),
    });

    static getDefaultProperties = () => ({
        roleRecordIds: [],
        plainRoles: [],
        speechRoles: [],
    });

    /**
     * Called during app creation to initialize with default agenda data.
     */
    seed() {
        const roleRecordIds = this.get('roleRecordIds');
        const plainRoles = this.get('plainRoles');
        const speechRoles = this.get('speechRoles');

        // Add pre-speaker roles.
        [
            'Toastmaster',
            'Ah Counter',
            'Grammarian',
            'Timer',
            'Jokemaster',
        ].forEach(name => addRecord(plainRoles, name));

        // Add speaker roles.
        ['Speaker 1', 'Speaker 2', 'Backup Speaker'].forEach(name =>
            addRecord(speechRoles, name),
        );

        // Add post-speaker roles.
        [
            'Topicsmaster',
            'General Evaluator',
            'Evaluator 1',
            'Evaluator 2',
        ].forEach(name => addRecord(plainRoles, name));

        function addRecord(recordList, roleName) {
            const record = recordList.add({roleName});
            roleRecordIds.add({roleRecordId: record.getId()});
        }
    }
}

quip.apps.registerClass(RolesRecord, 'roles-record');

/**
 * This record merely stores a string ID to another record---a role record.
 *
 * It exists for the sole purpose of using a `RecordList` over a plain array 
 * for data consistency benefits.
 */
export class RolePointerRecord extends quip.apps.Record {
    static getProperties = () => ({
        roleRecordId: 'string',
    });

    getRoleRecord() {
        return quip.apps.getRecordById(this.get('roleRecordId'));
    }
}

quip.apps.registerClass(RolePointerRecord, 'role-pointer-record');

/**
 * Abstract base class for different types of role records.
 *
 * Because this class will not be instantiated directly, it is not registered
 * with `quip.apps.registerClass`.
 */
export class RoleRecord extends CommentableRecord {}

export class PlainRoleRecord extends RoleRecord {
    static getProperties = () => ({
        roleName: 'string',
        person: quip.apps.RichTextRecord,
    });

    static getDefaultProperties = () => ({
        person: {RichText_placeholderText: NAME_PLACEHOLDER},
    });
}

quip.apps.registerClass(PlainRoleRecord, 'plain-role-record');

export class SpeechRoleRecord extends RoleRecord {
    static getProperties = () => ({
        roleName: 'string',
        person: quip.apps.RichTextRecord,
        speechTitle: quip.apps.RichTextRecord,
        speechProject: 'string',
    });

    static getDefaultProperties = () => ({
        person: {RichText_placeholderText: NAME_PLACEHOLDER},
        speechTitle: {RichText_placeholderText: 'Add a speech title'},
        speechProject: '',
    });
}

quip.apps.registerClass(SpeechRoleRecord, 'speech-role-record');

import {PlainRoleRecord, SpeechRoleRecord} from 'model/records';
import {
    getTime,
    getNameFromRichTextRecord,
    getRichTextRecordContent,
} from './utils';

export function printAndSave() {
    // Open print agenda page in new tab.
    quip.apps.openLink(
        'https://toastmasters-dev.github.io/print-agenda/?data=' +
        encodeURIComponent(JSON.stringify(getPrintAgendaData())),
    );

    // TODO(#7, #8): Port and fix archive-to-Google-Sheets functionality.
}

function getPrintAgendaData() {
    const rootRecord = quip.apps.getRootRecord();

    const items = rootRecord
        .get('roles')
        .get('roleRecordIds')
        .getRecords()
        .map(rolePointer => rolePointer.getRoleRecord())
        .reduce(
            (items, roleRecord) => {
                if (roleRecord instanceof PlainRoleRecord) {
                    // Derive camel-cased "roleName" for print agenda entry
                    // from uppercased "Role Name" with spaces.
                    let roleName = roleRecord
                        .get('roleName')
                        .replace(/ /g, '');
                    roleName = roleName.charAt(0).toLowerCase() +
                        roleName.slice(1);

                    return {
                        ...items,
                        [roleName]: getNameFromRichTextRecord(
                            roleRecord.get('person'),
                        ),
                    };
                }

                if (
                    roleRecord instanceof SpeechRoleRecord &&
                    // Exclude backup speaker from printed agenda.
                    roleRecord.get('roleName') !== 'Backup Speaker'
                ) {
                    const speechProject = roleRecord.get('speechProject');
                    const speech = {
                        speaker: getNameFromRichTextRecord(
                            roleRecord.get('person'),
                        ),
                        project: speechProject,
                        title: getRichTextRecordContent(
                            roleRecord.get('speechTitle'),
                        ),
                        // TODO(#24): Validate data during "Save and Print".
                        duration: getTime(speechProject) || '',
                    };

                    // Only include speeches which are signed up for by looking
                    // for at least one non-empty field.
                    if (Object.values(speech).some(v => v)) {
                        return {
                            ...items,
                            speeches: [
                                ...items.speeches,
                                speech,
                            ],
                        };
                    }
                }

                console.warn(
                    `Encountered unexpected record type with record ID: ` +
                    `${roleRecord && roleRecord.getUniqueId()}`,
                );

                return items;
            },
            {speeches: []},
        );

    return {
        version: '1.0',
        data: {
            date:
                getRichTextRecordContent(rootRecord.get('date').get('value')),
            officers: quip.apps.getSitePreferences().getForKey('officers'),
            items,
        },
    };
}


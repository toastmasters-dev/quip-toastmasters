import {printAndSave} from 'utils/print-and-save';
import CommentsBubble from './comments-bubble';
import PlainRichTextBox from './plain-rich-text-box';
import Role from './role';
import styles from 'css/roles.less';

export default function Roles() {
    const rootRecord = quip.apps.getRootRecord();
    const date = rootRecord.get('date');
    const {ref, dateValue, commentsBubble} = getDateData(date);

    return (
        <table className={styles.roles}>
            <tr ref={ref}>
                <td>Meeting Date</td>
                <td>{commentsBubble}</td>
                <td>
                    <PlainRichTextBox
                        record={dateValue}
                        interceptClicks={false}
                    />
                </td>
            </tr>
            {
                rootRecord
                    .get('roles')
                    .get('roleRecordIds')
                    .getRecords()
                    .map(rolePointer =>
                        <Role roleRecord={rolePointer.getRoleRecord()} />
                    )
            }
            <tr>
                <td colSpan="2">
                    <quip.apps.ui.Button
                        onClick={printAndSave}
                        primary={true}
                        text="Save and Print"
                    />
                </td>
            </tr>
        </table>
    );
}

// TODO(#26): Drop conditional logic after data migration to `DateRecord` is
//     complete.
const getDateData = dateRecord => dateRecord.setDom
    ? {
        ref: node => dateRecord.setDom(node),
        dateValue: dateRecord.get('value'),
        commentsBubble: <CommentsBubble record={dateRecord} />,
    }
    : {
        ref: () => {},
        dateValue: dateRecord,
        commentsBubble: null,
    };

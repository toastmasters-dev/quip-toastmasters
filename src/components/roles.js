import {printAndSave} from 'utils/print-and-save';
import CommentsBubble from './comments-bubble';
import PlainRichTextBox from './plain-rich-text-box';
import Role from './role';
import styles from 'css/roles.less';

export default function Roles() {
    const rootRecord = quip.apps.getRootRecord();
    const date = rootRecord.get('date');

    return (
        <table className={styles.roles}>
            <tr ref={node => date.setDom(node)}>
                <td>Meeting Date</td>
                <td>
                    <CommentsBubble record={date} />
                </td>
                <td>
                    <PlainRichTextBox
                        record={date.get('value')}
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

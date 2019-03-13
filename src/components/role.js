import {RoleRecord, PlainRoleRecord, SpeechRoleRecord} from 'model/records';
import PlainRichTextBox from './plain-rich-text-box';
import SpeechProject from './speech-project';
import SpeechProjectSelector from './speech-project-selector';
import styles from 'css/role.less';

const {PropTypes} = React;

export default class Role extends React.Component {
    static propTypes = {
        roleRecord: PropTypes.instanceOf(RoleRecord).isRequired,
    };

    componentDidMount() {
        this.props.roleRecord.listen(this.onRecordChange);
    }

    componentWillUnmount() {
        this.props.roleRecord.unlisten(this.onRecordChange);
    }

    /**
     * Re-render component when there is a change in the record.
     *
     * Most importantly, this tracks changes in the `speechProject` property.
     */
    onRecordChange = () => this.forceUpdate();

    render() {
        const roleName = this.props.roleRecord.get('roleName');

        return (
            <tr key={roleName}>
                <td>{roleName}</td>
                {this.renderContent()}
            </tr>
        );
    }

    renderContent() {
        const {roleRecord} = this.props;
        const person = roleRecord.get('person');

        if (roleRecord instanceof PlainRoleRecord) {
            return (
                <td>
                    <PlainRichTextBox record={person} />
                </td>
            );
        }

        if (roleRecord instanceof SpeechRoleRecord) {
            return (
                <td>
                    <PlainRichTextBox record={person} />
                    <div className={styles.speechTitle}>
                    <span>Title:</span>
                    <PlainRichTextBox record={roleRecord.get('speechTitle')} />
                    </div>
                    {this.renderSpeechProject(roleRecord)}
                </td>
            );
        }

        console.warn(
            `Encountered unexpected record type with record ID: ` +
            `${roleRecord && roleRecord.getUniqueId()}`,
        );

        return 'Unknown record type';
    }

    renderSpeechProject() {
        const {roleRecord} = this.props;

        return (
            roleRecord.get('speechProject')
                ? <SpeechProject speechRoleRecord={roleRecord} />
                : <SpeechProjectSelector speechRoleRecord={roleRecord} />
        );
    }
}

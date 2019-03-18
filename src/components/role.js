import {RoleRecord, PlainRoleRecord, SpeechRoleRecord} from 'model/records';
import CommentsBubble from './comments-bubble';
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
        // Re-render component when there is a change on the underlying record.
        this.props.roleRecord.listen(this.triggerForceUpdate);
    }

    componentWillUnmount() {
        this.props.roleRecord.unlisten(this.triggerForceUpdate);
    }

    render() {
        const roleName = this.props.roleRecord.get('roleName');

        return (
            <tr
                key={roleName}
                ref={node => this.props.roleRecord.setDom(node)}
            >
                <td>
                    <span className={styles.roleName}>{roleName}</span>
                </td>
                <td>
                    <CommentsBubble record={this.props.roleRecord} />
                </td>
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
                        <PlainRichTextBox
                            record={roleRecord.get('speechTitle')}
                        />
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

    triggerForceUpdate = () => this.forceUpdate();
}

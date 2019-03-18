import cx from 'classnames';
import styles from 'css/roles.less';

const {PropTypes} = React;

export default class Role extends React.Component {
    static propTypes = {
        record: PropTypes.instanceOf(quip.apps.Record).isRequired,
    };

    componentDidMount() {
        this.props.record.listenToComments(this.triggerForceUpdate);
    }

    componentWillUnmount() {
        this.props.record.unlistenToComments(this.triggerForceUpdate);
    }

    render() {
        const className = cx({
            [styles.commentsBubble]: true,
            [styles.emptyCommentsBubble]:
                this.props.record.getCommentCount() === 0,
        });

        return (
            <quip.apps.ui.CommentsTrigger
                className={className}
                record={this.props.record}
                showEmpty={true}
            />
        );
    }

    /**
     * Re-render component when there is a change in the record.
     */
    triggerForceUpdate = () => this.forceUpdate();
}

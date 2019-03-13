import {findMatches} from 'utils/speeches';
import SpeechRoleRecord from 'model/records';
import styles from 'css/speech-project-selector.less';

const {PropTypes} = React;

export default class SpeechProjectSelector extends React.Component {
    static propTypes = {
        speechRoleRecord: PropTypes.instanceOf(SpeechRoleRecord).isRequired,
    };

    state = {
        suggestions: [],
    };

    render() {
        return (
            <div className={styles.speechProjectSelector}>
                <input
                    class="search"
                    type="text"
                    onChange={this.updateMatches}
                    placeholder="Choose speech"
                />
                {this.renderSuggestions()}
            </div>
        );
    }

    setSpeech = event => this.props.speechRoleRecord.set(
        'speechProject',
        event.target.textContent.trim(),
    );

    updateMatches = event => this.setState({
        suggestions: findMatches(event.target.value),
    });

    renderSuggestions() {
        if (!this.state.suggestions.length) {
            return null;
        }

        const items = this.state.suggestions.map(value => {
            const text = `${value.manual} ${value.project}`;

            return (
                <li key={text}>
                    <span onClick={this.setSpeech}>
                        {text}
                    </span>
                </li>
            );
        });

        return <ul class="suggestions">{items}</ul>;
    }
}

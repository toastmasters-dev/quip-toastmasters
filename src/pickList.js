import speeches from './speeches.json';
import './pickList.css';

// import fs from 'fs'; // not working with webpack

// Build index of speech objects for normalized searching.
const index = speeches.map(({manual, project}, i) => ({
    haystack: normalize(manual + ' ' + project),
    // Embed original index of the speech item for filtering convenience.
    i,
}));

function normalize(string) {
    // Extract all alphanumeric tokens and join them with spaces.
    return string.match(/[\w\d]+/g).join(' ');
}

function findMatches(matchText) {
    // Return nothing for blank search text to prevent matching everything.
    if (!matchText) {
        return [];
    }
    // It is okay to construct a regex in this way, since normalized match
    // text will not contain any special characters.
    const regex = new RegExp('\\b' + normalize(matchText), 'i');
    return index
        // Include only matching index items.
        .filter(({haystack, i}) => regex.test(haystack))
        // Get speech object for each matching index item.
        .map(({i}) => speeches[i])
        // Limit maximum number of results returned.
        .slice(0, 8);
}

export default class PickList extends React.Component {
    static propTypes = {
        setSelectedSpeech: React.PropTypes.function,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
        };
    }

    componentDidMount() {
        this.setState({value : this.props.card.get('details')});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value : nextProps.card.get('details')});
    }

    setSpeech = event => {
        const _value = event.target.textContent.trim();
        this.props.setSpeech(_value);
        // hide suggestions
        this.setState({ suggestions: [] });
    };

    displayMatches = event => {
        this.setState({
            suggestions: findMatches(event.target.value),
            value: event.target.value,
        });
    };

    render() {
        const { card } = this.props;
        const _html = this.state.suggestions.map(_value =>
            <li>
                <span onClick={this.setSpeech}>
                    {_value.manual} {_value.project}
                </span>
            </li>
        );
        const display = _html.length ? 'block' : 'none';

        return (
            <div className="pickList">
                <input
                    type="text"
                    onChange={this.displayMatches}
                    class="search"
                    value={this.state.value}
                    placeholder="Choose speech"
                />
                <ul class="suggestions" style={{display}}>
                    {_html}
                </ul>
            </div>
        );
    }
}

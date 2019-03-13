import {findMatches} from 'utils/speeches';
import './pickList.css';

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

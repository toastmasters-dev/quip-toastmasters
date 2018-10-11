/*
getTime tests
var test1 = "1) The Effective Salesperson (3-4 min speech; 3-5 min role play; 2-3 min discussion)"
expect: 4 + 5 + 3 = 12
var test2 = "(L4 elective) Public Relations Strategies (5-7 min)"
expect: 7
var test3 = "4) The Press Conference (3-5 min; 2-3 min for Q&amp;A)"
expect: 8
*/

import { getTime } from './utils';
import './speechSlot.css';

export default class SpeechSlot extends React.Component {
    removeValue = () => {
        const speechNum = this.props.card.get('number');
        this.props.removeValue('', speechNum);
    }

    render() {
        const speechString = this.props.card.get('details');
        return (
            <div className="speechSlot">
                <span>{ speechString }</span>
                <br />
                <button name={ speechString } onClick={ this.removeValue }>
                    Cancel
                </button>
            </div>
        );
    }
}

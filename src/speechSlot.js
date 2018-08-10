/*
getTime tests
var test1 = "1) The Effective Salesperson (3-4 min speech; 3-5 min role play; 2-3 min discussion)"
expect: 4 + 5 + 3 = 12
var test2 = "(L4 elective) Public Relations Strategies (5-7 min)"
expect: 7
var test3 = "4) The Press Conference (3-5 min; 2-3 min for Q&amp;A)"
expect: 8
*/

/**
 * @param {String} _projectString Can be of form 
 * "5) The Crisis Management Speech (4-6 min; 3-5 min Q&amp;A)"
 * @returns {Integer} Number of minutes 
 */
function getTime(_projectString) {
    const arr = _projectString.toLowerCase().split(' ');

    // find all indexes which end with min or min)
    const minuteIndexes = [];
    arr.forEach((seg, index) => {
        if (seg === 'min' || seg === 'min;' || seg === 'min)') {
            minuteIndexes.push(index);
        }
    });

    let totalMinutes = 0;
    minuteIndexes.forEach((_index) => {
        let slot = arr[_index - 1]; // ie. '(5-7'
        let minutes = parseInt(slot.slice(slot.indexOf('-') + 1, slot.length));    
        totalMinutes += minutes;
    });

    return totalMinutes;
}

export default class SpeechSlot extends React.Component {
  removeValue = () => {
    const speechNum = this.props.card.get('number');
    this.props.removeValue('', speechNum);
  }

  render() {
    const speechString = this.props.card.get('details');
    return <div>
      <p>{ speechString }</p>
      <p>time: { getTime(speechString) } minutes</p>
      <button 
          name={ speechString }
          onClick={ this.removeValue }>Cancel</button>
  </div> 
  }
}
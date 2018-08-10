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

    return totalMinutes + ' minutes';
}

module.exports = {
    getTime,
};


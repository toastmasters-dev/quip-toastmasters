/**
 * @param {String} projectString The speech project. For example, it could be:
 *     "5) The Crisis Management Speech (4-6 min; 3-5 min Q&A)"
 * @returns {number} Number of minutes, or undefined if none found in input
 */
export function getTime(projectString) {
    const results = projectString.match(/(\d+-)?\d+(?= min)/g);

    if (!results) {
        return undefined;
    }

    return results
        .map(x => parseInt(x.match(/\d+$/)[0]))
        .reduce((a, b) => a + b)
        + ' minutes';
}

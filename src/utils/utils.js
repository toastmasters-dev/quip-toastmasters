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

/**
 * Extract @-mentioned name from `RichTextRecord`.
 *
 * Since @-mentions are represented in Quip with Markdown link syntax, this
 * function extracts the link text (the name being mentioned).
 */
export function getNameFromRichTextRecord(richTextRecord) {
    const value = getRichTextRecordContent(richTextRecord);
    const match = value.match(/\[(.+?)\]\(https:\/\/[^\/]+\/\w+\)/);

    // Fall back to plain text value if no match found.
    return match ? match[1] : value;
}

/**
 * Return the content of the record, or empty string if the record is empty.
 * Also, trim the returned string of any extra spaces.
 *
 * If a `RichTextRecord` with placeholder text is empty, `getTextContent()`
 * returns the placeholder string instead of an empty one. This is problematic,
 * because it is indistinguishable from actual user input.
 */
export function getRichTextRecordContent(richTextRecord) {
    if (!richTextRecord instanceof quip.apps.RichTextRecord) {
        throw new Error('Non-RichTextRecord encountered.');
    }

    return richTextRecord.empty()
        ? ''
        : richTextRecord.getTextContent().trim();
}

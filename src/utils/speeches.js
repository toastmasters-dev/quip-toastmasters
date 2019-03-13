import speechProjects from './speech-projects.json';

// TODO(#23): Organize speeches.json to group speeches from the same track.

// Build index of speech objects for normalized searching.
const index = speechProjects.map(({manual, project}, i) => ({
    haystack: normalize(manual + ' ' + project),
    // Embed original index of the speech item for filtering convenience.
    i,
}));

function normalize(string) {
    // Extract all alphanumeric tokens and join them with spaces.
    return string.match(/[\w\d]+/g).join(' ');
}

export function findMatches(matchText) {
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
        .map(({i}) => speechProjects[i])
        // Limit maximum number of results returned.
        .slice(0, 8);
}


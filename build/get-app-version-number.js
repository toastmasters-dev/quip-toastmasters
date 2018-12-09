/**
 * Takes a look at manifest.json and outputs the key `version_number`.
 */

const fs = require('fs');

fs.readFile('app/manifest.json', 'utf8', (err, manifest) =>
    console.log(JSON.parse(manifest).version_number),
);

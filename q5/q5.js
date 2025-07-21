const unzipper = require('unzipper');
const fs = require('fs');

async function extractZipfile(zipPath, extractPath) {
    try {
        const directory = await unzipper.Open.file(zipPath);
        await directory.extract({ path: extractPath });
        console.log(`Extracted to ${extractPath}`);
    } catch (err) {
        console.error('Error extracting zip:', err);
    }
}

extractZipfile('output.zip', './unzip');
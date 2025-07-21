const fs = require('fs');
const util = require('util');

const unlink = util.promisify(fs.unlink);

async function deleteFile(filePath) {
    try {
        await unlink(filePath);
        console.log(`File ${filePath} is deleted successfully`);
    } catch (err) {
        console.error('Error in deleting this file:', err);
    }
}

deleteFile('nodejstest.txt');
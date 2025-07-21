const archiver = require('archiver');
const fs = require('fs');

function createZipfile(folderPath, zipPath) {
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`Zip created: ${archive.pointer()} total bytes`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
}

createZipfile('./public', 'output.zip');
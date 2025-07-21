const fs = require('fs');

function fs_util() {
    fs.writeFileSync('q9_example.txt', 'Hello, fs module node js question_9!');

    const content = fs.readFileSync('q9_example.txt', 'utf8');
    console.log('File content:', content);

    if (fs.existsSync('q9_example.txt')) {
        console.log('File exists Here ');
    }

    fs.mkdirSync('test_dir', { recursive: true });
    console.log('Directory created SuccessFullyy');

    const stats = fs.statSync('q9_example.txt');
    console.log('File stats:', stats);
}

fs_util();
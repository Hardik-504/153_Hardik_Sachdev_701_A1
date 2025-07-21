const Chatbot = require('./q3-back');
const readline = require('readline');

const read= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chatbot = new Chatbot('tech');

console.log('Tech Chatbot: Type your question (or "exit" to quit)');

read.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        read.close();
        return;
    }
    console.log('Bot:', chatbot.getResponse(input));
    read.prompt();
});

read.on('close', () => {
    console.log('Chatbot terminated.');
    process.exit(0);
});

read.prompt();
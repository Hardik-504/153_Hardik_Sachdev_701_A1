console.log('Current directory Is:', __dirname);
console.log('Current file Is :', __filename);

global.myVar = ' Hello I am a global variable';
console.log('Global variable:', global.myVar);

setTimeout(() => {
    console.log('This runs after 1 second using global setTimeout');
}, 1000);

console.log('Process ID:', process.pid);
console.log('Node version:', process.version);
// Core Module
// File System

const fileSystem = require('fs');
// console.log(fs)

// Write file syncrhonous
try{

    fileSystem.writeFileSync("data.txt", "Write Text Synchronously")
    fileSystem.writeFileSync("./file/data.txt", "Write Text Synchronously, we can't write directory")
}catch(e)
{
    console.log(e);
}
// Write file asynchronous (not blocking)
fileSystem.writeFile('./file/asynctxt.txt', 'write Text asynch', (e) => console.log(e));
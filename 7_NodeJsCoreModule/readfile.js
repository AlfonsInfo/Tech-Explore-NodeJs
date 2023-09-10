const fileSystem = require('fs');

function readDataSynch()
{
    const dataFromFileData = fileSystem.readFileSync('./file/data.txt');
    console.log(dataFromFileData.toString())
}


function readDataAsynch()
{
    fileSystem.readFile('./file/data.txt',
    (errors,data)=>{
        if(errors) throw errors;
        console.log(data.toString())
    })
}



// readDataSynch();
readDataAsynch();
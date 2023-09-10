
const readline = require('readline');
const fileSystem = require('fs');
const filePath = "./file/contact.json";
const dirPath = "./file";

const readLineInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


const askingQuestion = (question) =>{
    return new Promise((resolve,rejects) => {
        readLineInterface.question(question, (value) => {
        resolve(value)
        });
    });
}


const saveContact = (contactData) => {
    const file = fileSystem.readFileSync(filePath,'utf-8');
    const contacts = JSON.parse(file); // we can use push on JSON Object
    contacts.push(contactData);
    fileSystem.writeFile(filePath,JSON.stringify(contacts), (e) => console.log(e) )
    readLineInterface.close()
}




function createFileIfDoesntExist()
{
    if(!fileSystem.existsSync(filePath)){
        fileSystem.writeFileSync(filePath,"[]", 'utf-8' )
    }
}
    
function createFolderIfDoesntExist(){
        if(!fileSystem.existsSync(dirPath)){
            fileSystem.mkdirSync(dirPath);
        }
    }


module.exports = {
    askingQuestion,createFileIfDoesntExist,createFolderIfDoesntExist,saveContact
}



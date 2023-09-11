
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

class NumberEmail {
    constructor(number, email){
        this.number = number;
        this.email = email;
    }
}

const saveContact = (contactData) => {
    const file = fileSystem.readFileSync(filePath,'utf-8');
    let contacts;
    try{
        contacts = JSON.parse(file); // we can use push on JSON Object
    }catch(e)
    {
        contacts = JSON.parse("[]");
    }
    
    if(checkNameAlreadyExist(contactData.nama, contacts)){
        const tempContactIndex = contacts.findIndex((contact) => contact.nama = contactData.nama)
        const tempContact = contacts.find((contact) => contact.nama === contactData.nama);
        contacts.splice(tempContactIndex) ;

        let listContact = [];
        if(tempContact.hasOwnProperty('number') && tempContact.number !== null && tempContact.number !== undefined){
            let oldNumberEmail = new NumberEmail( tempContact.email , tempContact.contact);
            let newNumberEmail = new NumberEmail( contactData.email , contactData.contact);
            listContact.push(oldNumberEmail);
            listContact.push(newNumberEmail);
        } else {
            listContact = tempContact.listContact;
            let newNumberEmail = new NumberEmail( contactData.email , contactData.contact);
            listContact.push(newNumberEmail);
        }

        contactData = {
            nama  : tempContact.nama,
            listContact
        }
        contacts.push(contactData)

    }else{
        contacts.push(contactData);
    }
    fileSystem.writeFile(filePath,JSON.stringify(contacts), (e) => console.log(e) )
    readLineInterface.close()
}


const checkNameAlreadyExist = (nama, contacts) => {
    console.log("Check Name Already Exist");
    const contactFind = contacts.find((contact) => {
        return contact.nama === nama
    });
    
    return !(!contactFind); // Mengembalikan true jika contactFind bukan null atau undefined
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



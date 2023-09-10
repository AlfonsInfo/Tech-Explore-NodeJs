const readline = require('readline');
const fileSystem = require('fs');

const readLineInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function askingYourName()
{
    readLineInterface.question('Masuka Nama Anda : ', (nama) => {
        console.log(nama)
        readLineInterface.close()
    })
}


function askingYourNameAndAge(){
    readLineInterface.question('Masuka Nama Anda : ', (nama) => {
        readLineInterface.question('Masuka Umur Anda : ', (umur) => {
            console.log(`nama : ${nama} dan umur anda ${umur}`)
            readLineInterface.close()
        })
    })
}


function askingYourNameAndContact(){
    readLineInterface.question('Masuka Nama Anda : ', (nama) => {
        readLineInterface.question('Masuka NoTelp Anda : ', (telp) => {
            console.log(`nama : ${nama} dan No Telp anda ${telp}`)
            const filePath = "./file/contact.json";
            const contactData = {
                nama : nama,
                telp : telp
            }
            const contactDataJson =  JSON.stringify(contactData);

            if(fileSystem.existsSync(filePath)){
                fileSystem.readFile(filePath,(err,data)=>{
                    currentData = data.toString();
                    currentDataSplit = currentData.split("]")
                    currentData = currentDataSplit[0];
                    console.log(currentData)
                    currentData = currentData.concat(", " + contactDataJson + "]")
                    fileSystem.writeFile(filePath, currentData , (e) => console.log(e) )
                })
            }else{
                fileSystem.appendFile(filePath,"[" + contactDataJson + "]" , (e) => console.log(e))
            }
            readLineInterface.close()
        })
    })
}



function askingYourNameAndContactJSONType(){
    const filePath = "./file/contact.json";
    function createFileIfDoesntExist(){
        if(!fileSystem.existsSync()){
            console.log('hello')
            fileSystem.writeFileSync(filePath,"[ ]",(e) => console.log(e))
        }
    }

    
    readLineInterface.question('Masuka Nama Anda : ', (nama) => {
        readLineInterface.question('Masuka NoTelp Anda : ', (telp) => {
            console.log(`nama : ${nama} dan No Telp anda ${telp}`)
            const contactData = {
                nama : nama,
                telp : telp
            }
            createFileIfDoesntExist();
            const file = fileSystem.readFileSync('./file/contact.json','utf-8');
            const contacts = JSON.parse(file); // we can use push on JSON Object
            contacts.push(contactData);
            fileSystem.writeFile(filePath,JSON.stringify(contacts), (e) => console.log(e) )
            readLineInterface.close()
        })
    })
}

// askingYourNameAndContact();
askingYourNameAndContactJSONType();

// askingYourNameAndAge()



const yargs = require('yargs');
const {askingQuestion,saveContact, createFileIfDoesntExist,createFolderIfDoesntExist} =  require('./contact')




    const mainGetAnswerFromReply = async () => {
        
        createFolderIfDoesntExist();
        createFileIfDoesntExist();

        const nama = await askingQuestion("Masukan nama Anda : ");
        const email = await askingQuestion("Masukan email Anda : ");
        const contact = await askingQuestion("Masukan nomor telepon Anda : ");

        const contactData = {nama,email,contact} //* value has same value with name
        saveContact(contactData)
    }


    const mainGetAnswerFromArgs = () => {
        
        createFolderIfDoesntExist();
        createFileIfDoesntExist();

        yargs.command({
            command : "add",
            describe : "Add New Contact",
            builder : {
                nama : {
                    describe : "Nama Lengkap",
                    demandOption : true,
                    type : 'string'
                },
                email: {
                    describe : "Email",
                    demandOption : false,
                    type : 'string'
                },
                contact: {
                    describe : "Nomor Telepon",
                    demandOption : true,
                    type : 'string'
                },
            },
            handler(argv){
                const contact = {
                    nama : argv.nama,
                    email : argv.email,
                    contact : argv.contact
                };
                saveContact(contact)
            }
        });

        yargs.parse();
    }

    // mainGetAnswerFromReply();
    mainGetAnswerFromArgs();






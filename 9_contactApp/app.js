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
        // console.log(process)
        console.log(process.argv)
    }

    mainGetAnswerFromArgs();






const getUser = (id, callback) => {
    const timeOut = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? "Alfons" : "Setiawan";
        callback({id, nama});
    }, timeOut);
}

//* Not blocking next line code
const userSatu = getUser(1,(hasil)=>{
    console.log(hasil)
})

//* Show First
const userDua = getUser(2,(hasil)=>{
    console.log(hasil)
})
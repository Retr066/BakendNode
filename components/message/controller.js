const store = require('./store');

const addMessage = (chat,user,message) => {
    return new Promise ((resolve,reject) =>{
        console.error('[messageController] No hay usuarios o mnesajes')
        if (!chat || !user || !message) {
             reject('los datos son incorrectos')
             return false;
             }
 
 
        const fullMessage = {
            chat:chat,
            user:user,
            message:message,
            date: new Date(),
        }
      store.add(fullMessage);
        resolve (fullMessage);     
 
    })
 
}

const getMessage = (filerUser) => {
    return new Promise ((resolve,reject) =>{
        resolve (store.list (filerUser));
    })
}

const updateMessage =  (id,message) =>{
 return new Promise (async (resolve,reject) => {
     if(!id || !message){
         reject ('Data Invalida')
         return false
     }
    const resultado = await store.updateText(id,message)
    resolve (resultado)
 })
}

const deleteMessage = (id) =>{
    return new Promise ((resolve,reject) => {
        if (!id) {
            reject('id invalido')
            return false
        }
        store.deleteMessage(id)
        .then(()=>{
            resolve();
        })
        .catch(e => {reject(e)})
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
};
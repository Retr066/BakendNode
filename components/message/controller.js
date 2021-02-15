const store = require('./store');

const addMessage = (user,message) => {
    return new Promise ((resolve,reject) =>{
  if (!user || !message) {
            console.error('[messageController] No hay usuarios o mnesajes')
             reject('los datos son incorrectos')
             return false;
             }
 
 
        const fullMessage = {
            user:user,
            message:message,
            date: new Date(),
        }
      store.add(fullMessage);
        resolve (fullMessage);     
 
    })
 
}

const getMessage = () => {
    return new Promise ((resolve,reject) =>{
        resolve (store.list ());
    })
}

module.exports = {
    addMessage,
    getMessage,
};
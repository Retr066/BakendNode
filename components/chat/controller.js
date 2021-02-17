const store = require('./store');

const addChat = (users) =>{
 return new Promise ((resolve,reject) => {
     if (!users || !Array.isArray(users)) {
         reject('los datos son incorrectos')
         return false;
     }

const fullChat = {
    users:users,
}
store.addChat(fullChat)
resolve (fullChat);

 })
}

const getChat = (userId) =>{
return new Promise ((resolve,reject) =>{
    resolve(store.getChat(userId));
})
}

module.exports = {
    addChat,
    getChat,
};
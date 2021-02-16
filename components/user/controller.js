const store = require ('./store');

const addUser = (name) =>{
if (!name) {
    return Promise.reject('invalido nombre');
}
const user = {
    name,
};
return store.add(user);
}

const getUser = () =>{
    return new Promise ((resolve,reject) => {
        resolve (store.getUser());
    })
}

module.exports = {
    addUser,
    getUser,
}
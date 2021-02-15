const db = require('mongoose');


db.Promise = global.Promise;
db.connect('mongodb+srv://Retr0:<holacomo12>@cluster0.c2ysj.mongodb.net/<pruba_db>?retryWrites=true&w=majority',{useNewUrlParser:true,
})
console.log('[db] Conectadacon exito');
const addMessage = (message)=>{
    list.push(message);
}
const getMessage = ()=>{
    return list;
}

module.exports = {
    add :addMessage,
    list :getMessage,
}
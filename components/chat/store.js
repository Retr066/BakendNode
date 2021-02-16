const model = require('./model');

const addChat = (Chat) =>{
const myChat = new model(Chat);
myChat.save();
}

const getChat = async (userId) =>{
    return new Promise((resolve,reject)=>{
        let filtro = {}
        if(userId !== null){
            filtro= {
                users:userId,
            };
        }
        model.find(filtro)
        .populate('users')
        .exec((error,populated)=>{
            if (error) {
                reject(error)
                return false
            }
            resolve(populated)
        })
    })
}

module.exports = {
    addChat: addChat,
    getChat:getChat,
}
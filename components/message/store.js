const model = require('./model');

const addMessage = (message)=>{
    const myMessage =  new model(message);
    myMessage.save();
}
const getMessage = async (filerUser)=>{
    return new Promise((resolve,reject) => {
        let filter = {}
        if(filerUser !== null){
         filter = { user:filerUser};
        }
         model.find(filter)
        .populate('user')
        .exec((error,populated)=>{
            if (error) {
                reject(error)
                return false;
            }
            resolve(populated)
        })
         
    })      
}

const updateText = async(id,message) =>{
   const foundMessage = await model.findOne({
       '_id': id
   });
   foundMessage.message = message;

   const newMessage = await foundMessage.save();
   return newMessage;
   
}
const deleteMessage = (id)=>{
 return model.deleteOne({
    '_id':id
});
}

module.exports = {
    add :addMessage,
    list :getMessage,
    updateText: updateText,
    deleteMessage:deleteMessage,
}
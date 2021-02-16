const model = require('./model')

const addUser = (user) => {
    const myUser = new model(user);
    return myUser.save();
}
const getUser = async () =>{
    const users = await model.find();
    return users
} 


module.exports = {
    add: addUser,
    getUser:getUser,
}
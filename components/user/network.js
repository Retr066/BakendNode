const express = require('express');
const router = express.Router();
const response = require('../../networks/response');
const controller = require('../user/controller');


router.get('/',(req,res) => {
    controller.getUser()
    .then((userList)=>{
    response.success(req,res,userList,200)
    })
    .catch (e => {response.error(req,res,'Error inesperado',e)})
});


router.post('/',(req,res)=>{
    controller.addUser(req.body.name)
    .then(data=>{
        response.success(req,res,data,201)
    })
    .catch(e=>{response.error(req,res,"Error Interno",500,e)})
});

module.exports = router;
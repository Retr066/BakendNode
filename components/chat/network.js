const express = require('express')
const router = express.Router();
const response = require('../../networks/response');
const controller = require('../chat/controller')


router.get('/:userId',(req,res)=>{
    controller.getChat(req.params.userId)
    .then((chatList)=>{
        response.success(req,res,chatList,200);
    })
    .catch(e=>{response.error(req,res,'error inesperado',500,e)})
})

router.post('/',(req,res)=>{
    controller.addChat(req.body.users)
    .then((addChat)=>{
        response.success(req,res,addChat,201);
    })
    .catch(e=>{response.error(req,res,'Informacion Invalida',400,'Error en el controlador',e)})
})


module.exports = router;
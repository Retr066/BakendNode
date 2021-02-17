const express = require('express')
const router = express.Router();
const response = require('../../networks/response');
const controller = require('../chat/controller')


router.get('/:userId',(req,res)=>{
    controller.getChat(req.params.userId)
    .then((users)=>{
        response.success(req,res,users,200);
    })
    .catch(e=>{response.error(req,res,'error inesperado',500,e)})
})

router.post('/',(req,res)=>{
    controller.addChat(req.body.users)
    .then((data)=>{
        response.success(req,res,data,201);
    })
    .catch(e=>{response.error(req,res,'Informacion Invalida',500,e)})
})


module.exports = router;
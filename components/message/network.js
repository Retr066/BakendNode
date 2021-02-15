const express = require('express')
const router = express.Router();
const response = require('../../networks/response');
const controller = require('./controller')

router.get('/',(req,res)=>{
 controller.getMessage()
 .then((messageList) =>{
    response.success(req,res,messageList,200);
 })
   .catch (e=>{response.error(req,res,'unxpect error',500,e)})
})


router.post('/',(req,res)=>{
controller.addMessage(req.body.user,req.body.message)
.then((fullMessage)=>{
    response.success(req,res,fullMessage,201);
})
.catch(e=>{response.error(req,res,"Informacion Invalida",400,"Error en el controlador")})
  })

  module.exports = router;
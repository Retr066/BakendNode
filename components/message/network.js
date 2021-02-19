const express = require("express");
const multer = require('multer');
const router = express.Router();
const response = require("../../networks/response");
const controller = require("./controller");

const upload = multer({
   dest:'public/files/',
});

router.get("/", (req, res) => {
  const filterMessage = req.query.user || null;
  controller
    .getMessage(filterMessage)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "error inesperado", 500, e);
    });
});

router.post("/",upload.single('file'), (req, res) => {

  controller
    .addMessage(req.body.chat, req.body.user, req.body.message,req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Informacion Invalida",
        400,
        "Error en el controlador",
        e
      );
    });
});

router.patch("/:id", (req, res) => {
  //console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error Interno", 500, e);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuarios ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, "error interno", 500, e);
    });
});

module.exports = router;

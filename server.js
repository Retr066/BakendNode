const express = require('express')
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./networks/routes')
db('mongodb+srv://Retr0:holacomo12@cluster0.xolvq.mongodb.net/server_DB?retryWrites=true&w=majority')

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
router(app);


app.use('/app',express.static('public'))
app.listen(3000);
console.log('esta en puerto 3000')
const express = require('express')
const  app = express();
const server = require('http').Server(app);
const socket = require('./socket');
const cors = require('cors');


const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./networks/routes')
db('mongodb+srv://Retr0:holacomo12@cluster0.xolvq.mongodb.net/server_DB?retryWrites=true&w=majority')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
socket.connect(server);

router(app);


app.use('/app',express.static('public'))
server.listen(3000,()=>{
    console.log('esta en puerto 3000')
});

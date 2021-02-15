const express = require('express')
const bodyParser = require('body-parser');


//const router = require('./components/message/network');
const router = require('./networks/routes')


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
router(app);


app.use('/app',express.static('public'))
app.listen(3000);
console.log('esta en puerto 3000')
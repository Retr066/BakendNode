const db = require('mongoose');
db.Promise = global.Promise;
const Conexion = async(url) => {
    await db.connect(url,{useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    
    console.log('[db] Conectadacon exito');
}
module.exports = Conexion;
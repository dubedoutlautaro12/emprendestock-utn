var pool = require('./bd');
var md5 = require('md5')

async function getArticulos(){
    var query= 'select * from articulos';
    var rows = await pool.query(query);
    return rows;
}

async function insertArticulos(obj){
    try{
        var query = 'insert into articulos set ? ';
        var rows = await pool.query(query, [obj])
        return rows    
    } catch(error){
        console.log(error)
        throw error;
    }
}
module.exports = {getArticulos, insertArticulos}
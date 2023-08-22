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

async function deleteArticulos(id){
    var query = 'delete from articulos where id = ?';
    var rows = await pool.query (query, [id]);
    return rows;

}

async function getArticulo(id){
    var query = 'select * from articulos where id = ?'
    var rows= await pool.query (query, [id])
    return rows[0]
}

async function modificacionArticulo(obj, id){
    try{
        var query= 'update articulos set ? where id = ?'
        var rows= await pool.query(query, [obj, id]);
        return rows;
    } catch(error){
        throw error;
    }                                                           
}


/////KJSDFKLJASDKFLJASDKFJLAÑKDJFASÑDKFSDFJLKDSFJKADSJFKLDSAJF
/////KJSDFKLJASDKFLJASDKFJLAÑKDJFASÑDKFSDFJLKDSFJKADSJFKLDSAJF

/////KJSDFKLJASDKFLJASDKFJLAÑKDJFASÑDKFSDFJLKDSFJKADSJFKLDSAJF

/////KJSDFKLJASDKFLJASDKFJLAÑKDJFASÑDKFSDFJLKDSFJKADSJFKLDSAJF

/////KJSDFKLJASDKFLJASDKFJLAÑKDJFASÑDKFSDFJLKDSFJKADSJFKLDSAJF



module.exports = {getArticulos, insertArticulos, deleteArticulos, getArticulo, modificacionArticulo}
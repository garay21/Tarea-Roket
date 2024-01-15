const Conect = require("../config/configBD.js")
const conn = new Conect() 

// Clase modelo para los arboles, recuperacion de datos.
class Tree {
    //funcion asincrona que devuelve los datos de los arboles.
    async getTrees(){
        //consulta sql 
        const sql = "SELECT arbol_id,nombre_arbol FROM roket.arboles;"
        try {
            // resultado de la peticion a la base de datos
            const result = await conn.getConn().query(sql)
            // termino de cenxion 
            conn.getConn().end()
            //retornamos los datos 
            return result.rows
        } catch (error) {
            // retornamos el error 
            return {msgError : error}
        }
    }
}

module.exports = Tree
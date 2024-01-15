const Conect = require("../config/configBD.js")
const conn = new Conect() 

// Clase modelo para los arboles, recuperacion de datos.
class Tree {
    //funcion asincrona que devuelve los datos de los arboles.
    async getTrees(){
        //consulta sql 
        const sql = "SELECT arbol_id,nombre_arbol FROM roket.arboles;"
        try {
            const result = await conn.getConn().query(sql)
            console.log(result);
            return result.rows
        } catch (error) {
            console.error(error);
            return {msgError : error}
        }
    }
}

module.exports = Tree
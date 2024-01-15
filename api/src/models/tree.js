const Conect = require("../config/configBD.js")
const conn = new Conect() 

// Clase modelo para los arboles, recuperacion de datos.
class Tree {
    //funcion asincrona que devuelve los datos de los arboles.
    async getTrees(){
        //consulta sql 
        const sql = "SELECT arbol_id,nombre_arbol FROM roket.arboles;"
        try {
            const client = await conn.getConn().connect();
            // resultado de la peticion a la base de datos
            const result = await client.query(sql)
            // termino de cenxion 
            client.release()
            //retornamos los datos 
            return result.rows
        } catch (error) {
            // retornamos el error 
            return {msgError : error}
        }
    }
    async getTree(id){
        //consulta sql utilizando inner join fata unir tablas ubicaciones, fotos y comentarios
        const sql = 'SELECT u.latitud, u.longitud, f.url_foto FROM roket.arboles a inner join roket.ubicaciones u on u.ubicacion_id = a.ubicacion_id inner join roket.fotos f on f.arbol_id = a.arbol_id where a.arbol_id = $1;'
        try {
            const client = await conn.getConn().connect();
            // resultado de la peticion a la base de datos
            const result = await client.query(sql,[id])
            // termino de cenxion 
            client.release()
            //retornamos los datos 
            return result.rows
        } catch (error) {
            console.error(error);
            // retornamos el error 
            return {msgError : "Error en la conexion a la base de datos!!"}
        }
    }
}

module.exports = Tree
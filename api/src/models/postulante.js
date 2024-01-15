const Conect = require("../config/configBD.js")
const conn = new Conect() 

// Clase modelo para los postulantes.
class Postulante {
    //funcion asincrona que ingresa al postulante.
    async addPostulante(){
        //consulta sql con los datos para la postulacion estos se envian solo una ves. 
        const sql = "insert into roket.postulantes (postulante_id, nombre, apellido, ciudad, linkedin, guthub_tarea, telefono, otras_referencias) values ('19041505-8','Francisco Javier','Garay Molina','Coquimbo','https://www.linkedin.com/in/francisco-garay-3b417715b/','https://github.com/garay21/Tarea-Roket','+56 9 30392238','https://franciscogaray.itch.io/subwarrior');"
        try {
            const client = await conn.getConn().connect();
            // resultado de la peticion a la base de datos
            const result = await client.query(sql)
            // termino de conexion 
            client.release()
            //retornamos los datos 
            return result.rows
        } catch (error) {
            // retornamos el error 
            console.log(error);
            return {msgError : error}
        }
    }

    async getPostulantes(){
        //consulta sql 
        const sql = "select * from roket.postulantes;"
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
            console.log(error);
            return {msgError : error}
        }
    }
}

module.exports = Postulante
const {config} = require('dotenv')

const {Pool} = require('pg')

config()

//clase para la conexion a la base de datos
class Conect {

    constructor() {
        // variable privada de la clase para la conexion
        this.conn = new Pool(
            {
                user : process.env.USERDB,
                host:  process.env.ENDPOINT || '',
                database: process.env.DATABASE || '',
                port: process.env.PORT || '',
                password: process.env.PASSWORD || '',
            }
        )
    }

    //funcion para obtener la conexion pool postgresql
    getConn() {
        // retornamos la conexion cando se pida
        return this.conn
    }
}

module.exports = Conect

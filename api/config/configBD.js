const {config} = require('dotenv')

const {Pool} = require('pg')

config()

//clase para la conexion a la base de datos
class Conect {

    constructor() {
        console.log('enter');
        this.conn = new Pool(
            {
                user : 'roketuser',
                host:  process.env.ENDPOINT || '',
                database: process.env.DATABASE || '',
                port: 5432 || '',
                password: process.env.PASSWORD || '',
            }
        )
    }

    //funcion para obtener la conexion pool postgresql
    getConn() {
        //console.log('obteniedo conexion :' , this.conn);
        return this.conn
    }
}

module.exports = Conect

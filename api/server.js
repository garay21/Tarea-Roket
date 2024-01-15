//import app from "./api/main.js";
const app = require('./src/main.js')

// funcion para levantar la api al servidor 
const main = () => {
    app.listen(3001, ()=>{
        console.log('servidor corriendo en el puerto 3000')
    })
}

main()
//import app from "./api/main.js";
const app = require('./src/main.js')

const main = () => {
    app.listen(3000, ()=>{
        console.log('servidor corriendo en el puerto 3000')
    })
}

main()
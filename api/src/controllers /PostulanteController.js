const Postulante = require('./../models/postulante.js')
const postModel = new Postulante() 

class PosulanteController {
    static async getPostulantes({req,res}){
        try {
            const postl = postModel.getPostulantes()
            res.json(postl)
        } catch (error) {
            console.log('error al obtener datos !!');
            res.status(500).json({msg : 'error en el servidor !!'})    
        }
    }
    static async addPostulante({res},props){
        try {
            const {req} = props
            console.log(req.body);
            const postl = await postModel.addPostulante()
            res.json([{message: 'Agregado con exito'}])
        } catch (error) {
            console.log('error al obtener datos !!', error);
            res.status(500).json({msg : 'error en el servidor !!', error})    
        }
    }
}
module.exports = PosulanteController

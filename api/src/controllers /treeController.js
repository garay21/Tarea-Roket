const Tree = require("../models/tree.js")
const treeModel = new Tree() 

class TreeController {
    static async getT({res,req}){
        try {
            const trees = await treeModel.getTrees()
            res.json(trees)
        } catch (error) {
            console.log('error al obtener datos !!');
            res.status(500).json({msg : 'error en el servidor !!'})    
        }
    }
}
module.exports = TreeController

const Tree = require("../models/tree.js")
const treeModel = new Tree() 

class TreeController {
    static async getTrees({req,res}){
        try {
            const trees = await treeModel.getTrees()
            res.json(trees)
        } catch (error) {
            console.log('error al obtener datos !!');
            res.status(500).json({msg : 'error en el servidor !!'})    
        }
    }
    static async getTree({res},props){
        try {
            const treeID = props.req.params.id;
            const tree = await treeModel.getTree(treeID)
            res.json(tree)
        } catch (error) {
            console.log('error al obtener datos !!', error);
            res.status(500).json({msg : 'error en el servidor !!', error})    
        }
    }
}
module.exports = TreeController

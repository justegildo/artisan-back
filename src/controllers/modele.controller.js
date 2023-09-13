const db = require("../config/dbConfig");
const modeleQueries = require('../queries/modele.queries');

//afficher tous les modeles
module.exports.getAllModeles = async (req, res) => {

    const results = await db.query(modeleQueries.getAllModeles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un modele
module.exports.getModeleByNum = async(req, res) =>{
    const num_mod = parseInt(req.params.num_mod);

    const result = await db.query(modeleQueries.getModeleByNum, [num_mod])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Ce modèle n'existe pas")
    }
} 

//env
module.exports.addModele =  async (req, res) => {
    const { nom_mod } = req.body;

    //ajouter un modele
    const result = await db.query(modeleQueries.addModele, [nom_mod])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Modèle créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un modele
module.exports.updateModele = async (req, res) => {
    const num_mod = parseInt(req.params.num_mod);
    const { nom_mod } = req.body;

    const result = await db.query(modeleQueries.getModeleByNum, [num_mod])
    const noModeleFound = !result.rows.length;

    if (noModeleFound) {
        res.status(400).send("Impossible de modifier ce modele car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(modeleQueries.updateModele, [nom_mod, num_mod])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Modèle modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un modele
module.exports.deleteModele = async(req, res) => {

    const num_mod = parseInt(req.params.num_mod);

    const results = await db.query(modeleQueries.getModeleByNum, [num_mod])
    //console.log(results);

    const noModeleFound = !results.rows.length;
    if (noModeleFound) {
        res.send("Impossible de supprimer ce modèle car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(modeleQueries.deleteModele, [num_mod])
        //console.log(result);
        if (result) {
            res.status(200).send("Modèle supprimé avec succès");
        } else {

        }
    }
} 

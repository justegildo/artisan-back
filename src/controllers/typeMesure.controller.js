const db = require("../config/dbConfig");
const typeMesureQueries = require('../queries/typeMesure.queries');

//afficher tous les typeMesures
module.exports.getAllTypeMesures = async (req, res) => {

    const results = await db.query(typeMesureQueries.getAllTypeMesures)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un typeMesure
module.exports.getTypeMesureByNum = async(req, res) =>{
    const num_type = parseInt(req.params.num_type);

    const result = await db.query(typeMesureQueries.getTypeMesureByNum, [num_type])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Ce type mesure n'existe pas")
    }
} 

//env
module.exports.addTypeMesure =  async (req, res) => {
    const { nom_type } = req.body;

    //ajouter un typeMesure
    const result = await db.query(typeMesureQueries.addTypeMesure, [nom_type])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Type mesure créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un typeMesure
module.exports.updateTypeMesure = async (req, res) => {
    const num_type = parseInt(req.params.num_type);
    const { nom_type } = req.body;

    const result = await db.query(typeMesureQueries.getTypeMesureByNum, [num_type])
    const noTypeMesureFound = !result.rows.length;

    if (noTypeMesureFound) {
        res.status(400).send("Impossible de modifier ce type mesure car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(typeMesureQueries.updateTypeMesure, [nom_type, num_type])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Type mesure modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un type mesure
module.exports.deleteTypeMesure = async(req, res) => {

    const num_type = parseInt(req.params.num_type);

    const results = await db.query(typeMesureQueries.getTypeMesureByNum, [num_type])
    //console.log(results);

    const noTypeMesureFound = !results.rows.length;
    if (noTypeMesureFound) {
        res.send("Impossible de supprimer ce type mesure car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(typeMesureQueries.deleteTypeMesure, [num_type])
        //console.log(result);
        if (result) {
            res.status(200).send("Type mesure supprimé avec succès");
        } else {

        }
    }
} 

const db = require("../config/dbConfig");
const mesureQueries = require('../queries/mesure.queries');

//afficher tous les mesures
module.exports.getAllMesures = async (req, res) => {

    const results = await db.query(mesureQueries.getAllMesures)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un mesure
module.exports.getMesureById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(mesureQueries.getMesureById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Ce mesure n'existe pas")
    }
} 

//env
module.exports.addMesure =  async (req, res) => {
    const { client_id, couturier_id } = req.body;

    //ajouter un mesure
    const result = await db.query(mesureQueries.addMesure, [client_id, couturier_id])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Mesure créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un mesure
module.exports.updateMesure = async (req, res) => {
    const id = parseInt(req.params.id);
    const { client_id, couturier_id } = req.body;

    const result = await db.query(mesureQueries.getMesureById, [id])
    const noMesureFound = !result.rows.length;

    if (noMesureFound) {
        res.status(400).send("Impossible de modifier ce mesure car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(mesureQueries.updateMesure, [client_id, couturier_id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Mesure modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un mesure
module.exports.deleteMesure = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(mesureQueries.getMesureById, [id])
    //console.log(results);

    const noMesureFound = !results.rows.length;
    if (noMesureFound) {
        res.send("Impossible de supprimer ce mesure car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(mesureQueries.deleteMesure, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Mesure supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

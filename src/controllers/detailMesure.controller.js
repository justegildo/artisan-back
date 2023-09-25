const db = require("../config/dbConfig");
const detailMesureQueries = require('../queries/detailMesure.queries');

//afficher tous les detailMesures
module.exports.getAllDetailMesures = async (req, res) => {

    const results = await db.query(detailMesureQueries.getAllDetailMesures)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un detailMesure
module.exports.getDetailMesByMesuIdNumType = async(req, res) =>{
    const mesure_id = parseInt(req.params.mesure_id);
    const num_type = parseInt(req.params.num_type)

    const result = await db.query(detailMesureQueries.getDetailMesByMesuIdNumType, [mesure_id, num_type])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Ce detaiD n'existe pas")
    }
} 

//env
module.exports.addDetailMesure =  async (req, res) => {
    const {mesure_id, num_type, valeur } = req.body;

    //ajouter un detailMesure
    const result = await db.query(detailMesureQueries.addDetailMesure, [mesure_id, num_type,valeur])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Détail mesure créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un detailMesure
module.exports.updateDetailMesure = async (req, res) => {
    const mesure_id = parseInt(req.params.mesure_id);
    const num_type = parseInt(req.params.num_type)
    const { valeur } = req.body;

    const result = await db.query(detailMesureQueries.getDetailMesByMesuIdNumType, [mesure_id, num_type])
    const noDetailMesureFound = !result.rows.length;

    if (noDetailMesureFound) {
        res.status(400).send("Impossible de modifier ce detailMesure car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(detailMesureQueries.updateDetailMesure, [valeur, mesure_id, num_type])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Détail mesure modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un detailMesure
module.exports.deleteDetailMesure = async(req, res) => {

    const mesure_id = parseInt(req.params.mesure_id);
    const num_type = parseInt(req.params.num_type)

    const results = await db.query(detailMesureQueries.getDetailMesByMesuIdNumType, [mesure_id, num_type])
    //console.log(results);

    const noDetailMesureFound = !results.rows.length;
    if (noDetailMesureFound) {
        res.send("Impossible de supprimer ce détail car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(detailMesureQueries.deleteDetailMesure, [mesure_id, num_type])
        //console.log(result);
        if (result) {
            res.status(200).send("Détail mesure supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

const db = require("../config/dbConfig");
const reponseQueries = require('../queries/reponse.queries');

//afficher tous les reponses
module.exports.getAllReponses = async (req, res) => {

    const results = await db.query(reponseQueries.getAllReponses)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un reponse
module.exports.getReponseByNum = async(req, res) =>{
    const num_rep = parseInt(req.params.num_rep);

    const result = await db.query(reponseQueries.getReponseByNum, [num_rep])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette reponse n'existe pas")
    }
} 

//env
module.exports.addReponse =  async (req, res) => {
    const { contenu_rep, utilisateur, post} = req.body;

    //ajouter un reponse
    const result = await db.query(reponseQueries.addReponse, 
        [ contenu_rep, utilisateur, post])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Réponse créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un reponse
module.exports.updateReponse = async (req, res) => {
    const num_rep = parseInt(req.params.num_rep);
    const { contenu_rep, utilisateur, post } = req.body;

    const result = await db.query(reponseQueries.getReponseByNum, [num_rep])
    const noReponseFound = !result.rows.length;

    if (noReponseFound) {
        res.status(400).send("Impossible de modifier cette reponse car elle n'existe pas dans la base de données.");
    } else {
       const results = await db.query(reponseQueries.updateReponse, 
            [ contenu_rep, utilisateur, post, num_rep ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Réponse modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un reponse
module.exports.deleteReponse = async(req, res) => {

    const num_rep = parseInt(req.params.num_rep);

    const results = await db.query(reponseQueries.getReponseByNum, [num_rep])
    //console.log(results);

    const noReponseFound = !results.rows.length;
    if (noReponseFound) {
        res.send("Impossible de supprimer cette reponse car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(reponseQueries.deleteReponse, [num_rep])
        //console.log(result);
        if (result) {
            res.status(200).send("Réponse supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

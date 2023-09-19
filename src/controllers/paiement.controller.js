const db = require("../config/dbConfig");
const paiementQueries = require('../queries/paiement.queries');

//afficher tous les paiements
module.exports.getAllPaiements = async (req, res) => {

    const results = await db.query(paiementQueries.getAllPaiements)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un paiement
module.exports.getPaiementByNum = async(req, res) =>{
    const num_paie = parseInt(req.params.num_paie);

    const result = await db.query(paiementQueries.getPaiementByNum, [num_paie])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette paiement n'existe pas")
    }
} 

//env
module.exports.addPaiement =  async (req, res) => {
    const { date_paie, montant_reg, commande} = req.body;

    //ajouter un paiement
    const result = await db.query(paiementQueries.addPaiement, 
        [ date_paie, montant_reg, commande])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Paiement créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un paiement
module.exports.updatePaiement = async (req, res) => {
    const num_paie = parseInt(req.params.num_paie);
    const { date_paie, montant_reg, commande } = req.body;

    const result = await db.query(paiementQueries.getPaiementByNum, [num_paie])
    const noPaiementFound = !result.rows.length;

    if (noPaiementFound) {
        res.status(400).send("Impossible de modifier cette paiement car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(paiementQueries.updatePaiement, 
            [ date_paie, montant_reg, commande, num_paie ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Paiement modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un paiement
module.exports.deletePaiement = async(req, res) => {

    const num_paie = parseInt(req.params.num_paie);

    const results = await db.query(paiementQueries.getPaiementByNum, [num_paie])
    //console.log(results);

    const noPaiementFound = !results.rows.length;
    if (noPaiementFound) {
        res.send("Impossible de supprimer ce paiement car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(paiementQueries.deletePaiement, [num_paie])
        //console.log(result);
        if (result) {
            res.status(200).send("Paiement supprimé avec succès");
        } else {

        }
    }
} 

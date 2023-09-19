const db = require("../config/dbConfig");
const rendezVousQueries = require('../queries/rendezVous.queries');

//afficher tous les rendezVouss
module.exports.getAllRendezVous = async (req, res) => {

    const results = await db.query(rendezVousQueries.getAllRendezVous)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un rendezVous
module.exports.getRendezVousByNum = async(req, res) =>{
    const num_rdv = parseInt(req.params.num_rdv);

    const result = await db.query(rendezVousQueries.getRendezVousByNum, [num_rdv])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Ce modèle n'existe pas")
    }
} 

//env
module.exports.addRendezVous =  async (req, res) => {
    const { date_rdv, heure_rdv, client, commande, couturier } = req.body;

    //ajouter un rendezVous
    const result = await db.query(rendezVousQueries.addRendezVous, 
        [date_rdv, heure_rdv, client, commande, couturier])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Rendez-vous créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un rendezVous
module.exports.updateRendezVous = async (req, res) => {
    const num_rdv = parseInt(req.params.num_rdv);
    const { date_rdv, heure_rdv, client, commande, couturier } = req.body;

    const result = await db.query(rendezVousQueries.getRendezVousByNum, [num_rdv])
    const norendezVousFound = !result.rows.length;

    if (norendezVousFound) {
        res.status(400).send("Impossible de modifier ce rendez-vous car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(rendezVousQueries.updateRendezVous, 
            [date_rdv, heure_rdv, client, commande, couturier, num_rdv])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Rendez-vous modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un rendezVous
module.exports.deleteRendezVous = async(req, res) => {

    const num_rdv = parseInt(req.params.num_rdv);

    const results = await db.query(rendezVousQueries.getRendezVousByNum, [num_rdv])
    //console.log(results);

    const noRendezVousFound = !results.rows.length;
    if (noRendezVousFound) {
        res.send("Impossible de supprimer ce rendez-vous car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(rendezVousQueries.deleteRendezVous, [num_rdv])
        //console.log(result);
        if (result) {
            res.status(200).send("Rendez-vous supprimé avec succès");
        } else {

        }
    }
} 

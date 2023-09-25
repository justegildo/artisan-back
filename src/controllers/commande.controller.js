const db = require("../config/dbConfig");
const commandeQueries = require('../queries/commande.queries');

//afficher tous les Commandes
module.exports.getAllCommandes = async (req, res) => {

    const results = await db.query(commandeQueries.getAllCommandes)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un Commande
module.exports.getCommandeByNum = async(req, res) =>{
    const num_cmde = parseInt(req.params.num_cmde);

    const result = await db.query(commandeQueries.getCommandeByNum, [num_cmde])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette commande n'existe pas")
    }
} 

//env
module.exports.addCommande =  async (req, res) => {
    const { montant, date_livraison, avance, client, couturier} = req.body;

    //ajouter un Commande
    const result = await db.query(commandeQueries.addCommande, 
        [ montant, date_livraison, avance, client, couturier])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Commande créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un Commande
module.exports.updateCommande = async (req, res) => {
    const num_cmde = parseInt(req.params.num_cmde);
    const { montant, date_livraison, avance, client, couturier } = req.body;

    const result = await db.query(commandeQueries.getCommandeByNum, [num_cmde])
    const noCommandeFound = !result.rows.length;

    if (noCommandeFound) {
        res.status(400).send("Impossible de modifier cette commande car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(commandeQueries.updateCommande, 
            [ montant, date_livraison, avance, client, couturier, num_cmde ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Commande modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un Commande
module.exports.deleteCommande = async(req, res) => {

    const num_cmde = parseInt(req.params.num_cmde);

    const results = await db.query(commandeQueries.getCommandeByNum, [num_cmde])
    //console.log(results);

    const noCommandeFound = !results.rows.length;
    if (noCommandeFound) {
        res.send("Impossible de supprimer cette commande car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(commandeQueries.deleteCommande, [num_cmde])
        //console.log(result);
        if (result) {
            res.status(200).send("Commande supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

const db = require("../config/dbConfig");
const tenueQueries = require('../queries/tenue.queries');

//afficher tous les tenues
module.exports.getAllTenues = async (req, res) => {

    const results = await db.query(tenueQueries.getAllTenues)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un tenue
module.exports.getTenueByNum = async(req, res) =>{
    const num_ordre = parseInt(req.params.num_ordre);

    const result = await db.query(tenueQueries.getTenueByNum, [num_ordre])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette tenue n'existe pas")
    }
} 

//env
module.exports.addTenue =  async (req, res) => {
    const { photo_pagne, montant, nb_metre, modele, commande} = req.body;

    //ajouter un tenue
    const result = await db.query(tenueQueries.addTenue, 
        [ photo_pagne, montant, nb_metre, modele, commande])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Tenue créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un tenue
module.exports.updateTenue = async (req, res) => {
    const num_ordre = parseInt(req.params.num_ordre);
    const { photo_pagne, montant, nb_metre, modele, commande } = req.body;

    const result = await db.query(tenueQueries.getTenueByNum, [num_ordre])
    const noTenueFound = !result.rows.length;

    if (noTenueFound) {
        res.status(400).send("Impossible de modifier cette tenue car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(tenueQueries.updateTenue, 
            [ photo_pagne, montant, nb_metre, modele, commande, num_ordre ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Tenue modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un tenue
module.exports.deleteTenue = async(req, res) => {

    const num_ordre = parseInt(req.params.num_ordre);

    const results = await db.query(tenueQueries.getTenueByNum, [num_ordre])
    //console.log(results);

    const noTenueFound = !results.rows.length;
    if (noTenueFound) {
        res.send("Impossible de supprimer cette tenue car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(tenueQueries.deleteTenue, [num_ordre])
        //console.log(result);
        if (result) {
            res.status(200).send("Tenue supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

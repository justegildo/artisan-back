const db = require("../config/dbConfig");
const publicationQueries = require('../queries/publication.queries');

//afficher tous les publicationes
module.exports.getAllPublications = async (req, res) => {

    const results = await db.query(publicationQueries.getAllPublications)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un publicatione
module.exports.getPublicationById = async(req, res) =>{
    const id_publication = parseInt(req.params.id_publication);

    const result = await db.query(publicationQueries.getPublicationById, [id_publication])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette pub n'existe pas")
    }
} 

//env
module.exports.addPublication =  async (req, res) => {
    const { couturier_id, num_mod } = req.body;

    //ajouter un publicatione
    const result = await db.query(publicationQueries.addPublication, [couturier_id, num_mod])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Pub créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un publicatione
module.exports.updatePublication = async (req, res) => {
    const id_publication = parseInt(req.params.id_publication);
    const { couturier_id, num_mod } = req.body;

    const result = await db.query(publicationQueries.getPublicationById, [id_publication])
    const noPublicationFound = !result.rows.length;

    if (noPublicationFound) {
        res.status(400).send("Impossible de modifier cette publicatione car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(publicationQueries.updatePublication, [couturier_id, num_mod, id_publication])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Pub modifié avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un publicatione
module.exports.deletePublication = async(req, res) => {

    const id_publication = parseInt(req.params.id_publication);

    const results = await db.query(publicationQueries.getPublicationById, [id_publication])
    //console.log(results);

    const noPublicationFound = !results.rows.length;
    if (noPublicationFound) {
        res.send("Impossible de supprimer cette pub car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(publicationQueries.deletePublication, [id_publication])
        //console.log(result);
        if (result) {
            res.status(200).send("Pub supprimé avec succès");
        } else {

        }
    }
} 

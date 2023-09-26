const db = require("../config/dbConfig");
const postQueries = require('../queries/post.queries');

//afficher tous les posts
module.exports.getAllPosts = async (req, res) => {

    const results = await db.query(postQueries.getAllPosts)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

// récupérer un post
module.exports.getPostByNum = async(req, res) =>{
    const num_post = parseInt(req.params.num_post);

    const result = await db.query(postQueries.getPostByNum, [num_post])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Cette post n'existe pas")
    }
} 

//env
module.exports.addPost =  async (req, res) => {
    const { contenu, date_post, heure_post, emetteur, recepteur} = req.body;

    //ajouter un post
    const result = await db.query(postQueries.addPost, 
        [ contenu, date_post, heure_post, emetteur, recepteur])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Post créee avec succès !");
    } else {
        res.status(400).json("Impossible d'ajouter")
    }
} 
 

//modifier un post
module.exports.updatePost = async (req, res) => {
    const num_post = parseInt(req.params.num_post);
    const { contenu, date_post, heure_post, emetteur, recepteur } = req.body;

    const result = await db.query(postQueries.getPostByNum, [num_post])
    const noPostFound = !result.rows.length;

    if (noPostFound) {
        res.status(400).send("Impossible de modifier cette post car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(postQueries.updatePost, 
            [ contenu, date_post, heure_post, emetteur, recepteur, num_post ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Post modifiée avec succès !");
       } else {
        res.status(400).send("Erreur")
       }
       
    }
} 


//supprimer un post
module.exports.deletePost = async(req, res) => {

    const num_post = parseInt(req.params.num_post);

    const results = await db.query(postQueries.getPostByNum, [num_post])
    //console.log(results);

    const noPostFound = !results.rows.length;
    if (noPostFound) {
        res.send("Impossible de supprimer cette post car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(postQueries.deletePost, [num_post])
        //console.log(result);
        if (result) {
            res.status(200).send("Post supprimé avec succès");
        } else {
            res.status(400).send("Erreur")
        }
    }
} 

const getAllReponses = "SELECT rep.num_rep, rep.contenu_rep, jsonb_build_object('id', u.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe ) AS utilisateur, jsonb_build_object('num_post', p.num_post, 'contenu', p.contenu, 'date_post', p.date_post, 'heure_post', p.heure_post, 'emetteur_id', p.emetteur_id, 'recepteur_id', p.recepteur_id) AS post FROM reponse AS rep JOIN utilisateur AS u ON rep.utilisateur_id = u.id JOIN post AS p ON rep.num_post = p.num_post"; 

const getReponseByNum = "SELECT rep.num_rep, rep.contenu_rep, jsonb_build_object('id', u.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe ) AS utilisateur, jsonb_build_object('num_post', p.num_post, 'contenu', p.contenu, 'date_post', p.date_post, 'heure_post', p.heure_post, 'emetteur_id', p.emetteur_id, 'recepteur_id', p.recepteur_id) AS post FROM reponse AS rep JOIN utilisateur AS u ON rep.utilisateur_id = u.id JOIN post AS p ON rep.num_post = p.num_post WHERE rep.num_rep = $1 ";

const addReponse = "INSERT INTO reponse ( contenu_rep, utilisateur_id, num_post ) VALUES ($1, $2, $3)";

const deleteReponse = "DELETE FROM reponse WHERE num_rep = $1";

const updateReponse = "UPDATE reponse SET contenu_rep = $1, utilisateur_id = $2, num_post = $3 WHERE num_rep = $4";



module.exports = {
    getAllReponses,
    getReponseByNum,
    addReponse,
    deleteReponse,
    updateReponse
}
const getAllPosts = "SELECT po.num_post, po.contenu, po.date_post, po.heure_post, jsonb_build_object('id', em.id, 'nom',  em.nom, 'prenoms', em.prenoms, 'email', em.email, 'telephone', em.telephone, 'sexe', em.sexe ) AS emetteur, jsonb_build_object('id', re.id, 'nom',  re.nom, 'prenoms', re.prenoms, 'email', re.email, 'telephone', re.telephone, 'sexe', re.sexe) AS recepteur FROM post AS po JOIN utilisateur AS em ON po.emetteur_id = em.id JOIN utilisateur AS re ON po.recepteur_id = re.id"; 

const getPostByNum = "SELECT po.num_post, po.contenu, po.date_post, po.heure_post, jsonb_build_object('id', em.id, 'nom',  em.nom, 'prenoms', em.prenoms, 'email', em.email, 'telephone', em.telephone, 'sexe', em.sexe ) AS emetteur, jsonb_build_object('id', re.id, 'nom',  re.nom, 'prenoms', re.prenoms, 'email', re.email, 'telephone', re.telephone, 'sexe', re.sexe) AS recepteur FROM post AS po JOIN utilisateur AS em ON po.emetteur_id = em.id JOIN utilisateur AS re ON po.recepteur_id = re.id WHERE po.num_post = $1 ";

const addPost = "INSERT INTO post ( contenu, date_post, heure_post, emetteur_id, recepteur_id) VALUES ($1, $2, $3, $4, $5)";

const deletePost = "DELETE FROM post WHERE num_post = $1";

const updatePost = "UPDATE post SET contenu = $1, date_post = $2, heure_post = $3, emetteur_id = $4, recepteur_id = $5 WHERE num_post = $6";



module.exports = {
    getAllPosts,
    getPostByNum,
    addPost,
    deletePost,
    updatePost
}
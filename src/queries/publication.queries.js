const getAllPublications = "SELECT p.id_publication, p.date_publication, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('num_mod', m.num_mod, 'nom_mod', m.nom_mod ) AS modele FROM publication AS p JOIN couturier AS c ON p.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id LEFT JOIN modele AS m ON p.num_mod = m.num_mod"; 

const getPublicationById = "SELECT p.id_publication, p.date_publication, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('num_mod', m.num_mod, 'nom_mod', m.nom_mod ) AS modele FROM publication AS p JOIN couturier AS c ON p.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id LEFT JOIN modele AS m ON p.num_mod = m.num_mod WHERE id_publication = $1 ";

const addPublication = "INSERT INTO publication (couturier_id, num_mod) VALUES ($1, $2)";

const deletePublication = "DELETE FROM publication WHERE id_publication = $1";

const updatePublication = "UPDATE publication SET couturier_id = $1, num_mod = $2 WHERE id_publication = $3";



module.exports = {
    getAllPublications,
    getPublicationById,
    addPublication,
    deletePublication,
    updatePublication
}
const getAllMesures = "SELECT m.id, m.date_mesure, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client, jsonb_build_object('valeur', dtm.valeur ) AS detail_mesure, jsonb_build_object('num_type', tm.num_type, 'nom_type', tm.nom_type) AS type_mesure FROM mesure AS m LEFT JOIN detail_mesure AS dtm ON m.id = dtm.mesure_id LEFT JOIN type_mesure AS tm ON dtm.num_type = tm.num_type JOIN couturier AS c ON m.couturier_id = c.id  JOIN utilisateur AS u ON c.utilisateur_id = u.id JOIN client AS cli ON m.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id"; 

const getMesureById = "SELECT m.id, m.date_mesure, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client, jsonb_build_object('valeur', dtm.valeur ) AS detail_mesure, jsonb_build_object('num_type', tm.num_type, 'nom_type', tm.nom_type) AS type_mesure FROM mesure AS m LEFT JOIN detail_mesure AS dtm ON m.id = dtm.mesure_id LEFT JOIN type_mesure AS tm ON dtm.num_type = tm.num_type JOIN couturier AS c ON m.couturier_id = c.id  JOIN utilisateur AS u ON c.utilisateur_id = u.id JOIN client AS cli ON m.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id WHERE m.id = $1 ";

const addMesure = "INSERT INTO mesure (client_id, couturier_id) VALUES ($1, $2)";

const deleteMesure = "DELETE FROM mesure WHERE id = $1";

const updateMesure = "UPDATE mesure SET client_id = $1, couturier_id = $2 WHERE id = $3";



module.exports = {
    getAllMesures,
    getMesureById,
    addMesure,
    deleteMesure,
    updateMesure
}
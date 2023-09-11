const getAllUtilisateurs = "SELECT u.id, u.nom, u.prenoms, u.email, u.telephone, u.sexe, jsonb_build_object('id', t.id, 'label', t.label ) AS type_utilisateur, jsonb_build_object('id', c.id, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite, 'utilisateur', c.utilisateur_id ) AS couturier, jsonb_build_object('id', cli.id, 'utilisateur', cli.utilisateur_id ) AS client FROM utilisateur AS u JOIN type_utilisateur AS t ON u.type_utilisateur_id = t.id LEFT JOIN couturier AS c ON u.id = c.utilisateur_id LEFT JOIN client AS cli ON u.id = cli.utilisateur_id"; 

const getUser = "SELECT CONCAT(nom, ' ', prenoms) AS name, email, telephone, password, is_active, delete FROM utilisateur WHERE email = $1 OR telephone = $2";

const getUtilisateurById = "SELECT u.id, u.nom, u.prenoms, u.email, u.telephone, u.sexe, jsonb_build_object('id', t.id, 'label', t.label ) AS type_utilisateur, jsonb_build_object('id', c.id, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite, 'utilisateur', c.utilisateur_id ) AS couturier, jsonb_build_object('id', cli.id, 'utilisateur', cli.utilisateur_id ) AS client FROM utilisateur AS u JOIN type_utilisateur AS t ON u.type_utilisateur_id = t.id LEFT JOIN couturier AS c ON u.id = c.utilisateur_id LEFT JOIN client AS cli ON u.id = cli.utilisateur_id WHERE u.id = $1 ";

const checkEmailExists = "SELECT * FROM utilisateur WHERE email = $1 OR telephone = $2 AND delete = false ";

const addUtilisateur = "INSERT INTO utilisateur (nom, prenoms, sexe, email, telephone, password, type_utilisateur_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteUtilisateur = "UPDATE utilisateur SET delete = true, is_active = false WHERE id = $1";

const updateUtilisateur = "UPDATE utilisateur SET nom = $1, prenoms = $2, sexe = $3, email = $4, telephone = $5, type_utilisateur_id = $6 WHERE id = $7";

const updatePassword = "UPDATE utilisateur SET password = $1 WHERE email = $2 OR telephone = $3";

const reset = "UPDATE utilisateur SET password = '' WHERE email = $1 OR telephone = $2";

const activeCompte = "UPDATE utilisateur SET is_active = true WHERE id = $1";

const desactiveCompte = "UPDATE utilisateur SET is_active = false WHERE id = $1";

const getUilisateurId = "SELECT lastval()";

//couturier
const addCouturier = "INSERT INTO couturier (utilisateur_id, nom_atelier, specialite) VALUES($1, $2, $3) ";

const updateCouturier = "UPDATE couturier SET nom_atelier = $1, specialite = $2 WHERE utilisateur_id = $3";


//client
const addClient = "INSERT INTO client (utilisateur_id) VALUES ($1)";

const updateClient = "UPDATE client SET utilisateur_id = $1 WHERE utilisateur_id = $2"


module.exports = {
    getAllUtilisateurs,
    getUtilisateurById,
    checkEmailExists,
    addUtilisateur,
    deleteUtilisateur,
    updateUtilisateur,
    updatePassword,
    activeCompte,
    desactiveCompte,
    getUser,
    reset,
    getUilisateurId,
    addCouturier,
    addClient,
    updateCouturier,
    updateClient
}
const getAllTypeUtilisateurs = "SELECT * FROM type_utilisateur WHERE name NOT LIKE ('ADMIN')"; 

const getTypeUtilisateurById = "SELECT * FROM type_utilisateur WHERE id = $1 AND name NOT LIKE ('ADMIN') ";

const addTypeUtilisateur = "INSERT INTO type_utilisateur (label, role) VALUES ($1, $2)";

const deleteTypeUtilisateur = "DELETE FROM type_utilisateur WHERE id = $1";

const updateTypeUtilisateur = "UPDATE type_utilisateur SET label = $1, role = $2 WHERE id = $3";



module.exports = {
    getAllTypeUtilisateurs,
    getTypeUtilisateurById,
    addTypeUtilisateur,
    deleteTypeUtilisateur,
    updateTypeUtilisateur
}
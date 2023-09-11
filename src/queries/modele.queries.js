const getAllModeles = "SELECT * FROM modele"; 

const getModeleByNum = "SELECT * FROM modele WHERE num_mod = $1 ";

const addModele = "INSERT INTO modele (nom_mod) VALUES ($1)";

const deleteModele = "DELETE FROM modele WHERE num_mod = $1";

const updateModele = "UPDATE modele SET nom_mod = $1 WHERE num_mod = $2";



module.exports = {
    getAllModeles,
    getModeleByNum,
    addModele,
    deleteModele,
    updateModele
}
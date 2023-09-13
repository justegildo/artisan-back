const getAllMesures = "SELECT * FROM mesure"; 

const getMesureById = "SELECT * FROM mesure WHERE id = $1 ";

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
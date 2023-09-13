const getAllDetailMesures = "SELECT * FROM detail_mesure"; 

const getDetailMesByMesuIdNumType = "SELECT * FROM detail_mesure WHERE mesure_id = $1 AND num_type = $2";

const addDetailMesure = "INSERT INTO detail_mesure (valeur) VALUES ($1)";

const deleteDetailMesure = "DELETE FROM detail_mesure WHERE mesure_id = $1 AND num_type = $2";

const updateDetailMesure = "UPDATE detail_mesure SET valeur = $1 WHERE mesure_id = $2 AND num_type = $3";



module.exports = {
    getAllDetailMesures,
    getDetailMesByMesuIdNumType,
    addDetailMesure,
    deleteDetailMesure,
    updateDetailMesure
}
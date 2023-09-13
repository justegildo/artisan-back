const getAllTypeMesures = "SELECT * FROM type_mesure"; 

const getTypeMesureByNum = "SELECT * FROM type_mesure WHERE num_type = $1 ";

const addTypeMesure = "INSERT INTO type_mesure (nom_type) VALUES ($1)";

const deleteTypeMesure = "DELETE FROM type_mesure WHERE num_type = $1";

const updateTypeMesure = "UPDATE type_mesure SET nom_type = $1 WHERE num_type = $2";



module.exports = {
    getAllTypeMesures,
    getTypeMesureByNum,
    addTypeMesure,
    deleteTypeMesure,
    updateTypeMesure
}
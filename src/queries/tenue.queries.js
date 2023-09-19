const getAllTenues = "SELECT t.num_ordre, t.montant, t.nb_metre,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande, jsonb_build_object('num_mod', m.num_mod, 'nom_mod', m.nom_mod ) AS modele FROM tenue AS t JOIN commande AS cmde ON t.num_cmde = cmde.num_cmde JOIN modele AS m ON t.num_mod = m.num_mod"; 

const getTenueByNum = "SELECT t.num_ordre, t.montant, t.nb_metre,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande, jsonb_build_object('num_mod', m.num_mod, 'nom_mod', m.nom_mod ) AS modele FROM tenue AS t JOIN commande AS cmde ON t.num_cmde = cmde.num_cmde JOIN modele AS m ON t.num_mod = m.num_mod WHERE t.num_ordre = $1 ";

const addTenue = "INSERT INTO tenue ( photo_pagne, montant, nb_metre, num_mod, num_cmde) VALUES ($1, $2, $3, $4, $5)";

const deleteTenue = "DELETE FROM tenue WHERE num_ordre = $1";

const updateTenue = "UPDATE tenue SET photo_pagne = $1, montant = $2, nb_metre = $3, num_mod = $4, num_cmde = $5 WHERE num_ordre = $6";



module.exports = {
    getAllTenues,
    getTenueByNum,
    addTenue,
    deleteTenue,
    updateTenue
}
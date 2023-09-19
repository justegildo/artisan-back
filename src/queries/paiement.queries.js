const getAllPaiements = "SELECT p.num_paie, p.date_paie, p.montant_reg,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande FROM paiement AS p JOIN commande AS cmde ON p.num_cmde = cmde.num_cmde "; 

const getPaiementByNum = "SELECT p.num_paie, p.date_paie, p.montant_reg,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande FROM paiement AS p JOIN commande AS cmde ON p.num_cmde = cmde.num_cmde WHERE p.num_paie = $1 ";

const addPaiement = "INSERT INTO paiement ( date_paie, montant_reg, num_cmde) VALUES ($1, $2, $3)";

const deletePaiement = "DELETE FROM paiement WHERE num_paie = $1";

const updatePaiement = "UPDATE paiement SET date_paie = $1, montant_reg = $2, num_cmde = $3 WHERE num_paie = $4";



module.exports = {
    getAllPaiements,
    getPaiementByNum,
    addPaiement,
    deletePaiement,
    updatePaiement
}
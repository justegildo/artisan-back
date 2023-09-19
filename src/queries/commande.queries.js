const getAllCommandes = "SELECT cmde.num_cmde, cmde.date_cmde, cmde.montant, cmde.date_livraison, cmde.avance, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client FROM commande AS cmde JOIN couturier AS c ON cmde.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id  JOIN client AS cli ON cmde.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id"; 

const getCommandeByNum = "SELECT cmde.num_cmde, cmde.date_cmde, cmde.montant, cmde.date_livraison, cmde.avance, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client FROM commande AS cmde JOIN couturier AS c ON cmde.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id  JOIN client AS cli ON cmde.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id WHERE cmde.num_cmde = $1 ";

const addCommande = "INSERT INTO commande ( montant, date_livraison, avance, client_id, couturier_id) VALUES ($1, $2, $3, $4, $5)";

const deleteCommande = "DELETE FROM commande WHERE num_cmde = $1";

const updateCommande = "UPDATE commande SET montant = $1, date_livraison = $2, avance = $3, client_id = $4, couturier_id = $5 WHERE num_cmde = $6";



module.exports = {
    getAllCommandes,
    getCommandeByNum,
    addCommande,
    deleteCommande,
    updateCommande
}
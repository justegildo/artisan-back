const getAllRendezVous = "SELECT r.num_rdv, r.date_rdv, r.heure_rdv,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client FROM rendez_vous AS r JOIN commande AS cmde ON r.num_cmde = cmde.num_cmde JOIN couturier AS c ON cmde.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id JOIN client AS cli ON cmde.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id"; 

const getRendezVousByNum = "SELECT r.num_rdv, r.date_rdv, r.heure_rdv,  jsonb_build_object('num_cmde', cmde.num_cmde, 'date_cmde', cmde.date_cmde, 'montant', cmde.montant, 'date_livraison', cmde.date_livraison, 'avance', cmde.avance) AS commande, jsonb_build_object('id', c.id, 'nom',  u.nom, 'prenoms', u.prenoms, 'email', u.email, 'telephone', u.telephone, 'sexe', u.sexe, 'nom_atelier', c.nom_atelier, 'specialite', c.specialite ) AS couturier, jsonb_build_object('id', cli.id,  'nom',  ut.nom, 'prenoms', ut.prenoms, 'email', ut.email, 'telephone', ut.telephone, 'sexe', ut.sexe ) AS client FROM rendez_vous AS r JOIN commande AS cmde ON r.num_cmde = cmde.num_cmde JOIN couturier AS c ON cmde.couturier_id = c.id JOIN utilisateur AS u ON c.utilisateur_id = u.id JOIN client AS cli ON cmde.client_id = cli.id JOIN utilisateur AS ut ON cli.utilisateur_id = ut.id WHERE r.num_rdv = $1 ";

const addRendezVous = "INSERT INTO rendez_vous (date_rdv, heure_rdv, client_id, num_cmde, couturier_id) VALUES ($1, $2, $3, $4, $5)";

const deleteRendezVous = "DELETE FROM rendez_vous WHERE num_rdv = $1";

const updateRendezVous = "UPDATE rendez_vous SET date_rdv = $1, heure_rdv = $2, client_id = $3, num_cmde = $4, couturier_id = $5 WHERE num_rdv = $6";



module.exports = {
    getAllRendezVous,
    getRendezVousByNum,
    addRendezVous,
    deleteRendezVous,
    updateRendezVous
}
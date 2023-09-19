const router = require('express').Router();
const paiementController = require('../controllers/paiement.controller');


/**
 * @swagger
 * /api/paiement/add:
 *   post:
 *     summary: Créer une nouvelle paiement
 *     tags:
 *      - Paiement
 *     description: Crée un nouveau paiement avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paiement'
 *     responses:
 *       200:
 *         description: paiement créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", paiementController.addPaiement);


/**
 * @swagger
 * /api/paiement/:
 *   get:
 *     summary: Récupérer toutes les paiements
 *     tags:
 *      - Paiement
 *     description: Renvoie une liste de toutes les paiements.
 *     responses:
 *       200:
 *         description: Liste des paiements récupérées avec succès.
 */
router.get('/', paiementController.getAllPaiements);


/**
 * @swagger
 * /api/paiement/{num_paie}:
 *   get:
 *     summary: Récupérer une paiement par son numéro
 *     tags:
 *      - Paiement
 *     description: Renvoie un paiement en fonction de son numéro.
 *     parameters:
 *       - name: num_paie
 *         in: path
 *         required: true
 *         description: Identifiant de la paiement à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paiement récupéré avec succès.
 *       404:
 *         description: Paiement non trouvé.
 */
router.get('/:num_paie', paiementController.getPaiementByNum);


/**
 * @swagger
 * /api/paiement/{num_paie}:
 *   put:
 *     summary: Mettre à jour une paiement
 *     tags:
 *      - Paiement
 *     description: Met à jour une paiement en fonction de son identifiant.
 *     parameters:
 *       - name: num_paie
 *         in: path
 *         required: true
 *         description: Identifiant de la paiement à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paiement'
 *     responses:
 *       200:
 *         description: Paiement mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_paie', paiementController.updatePaiement);

/**
 * @swagger
 * /api/paiement/{num_paie}:
 *   delete:
 *     summary: Supprimer une paiement
 *     tags:
 *      - Paiement
 *     description: Supprime une paiement en fonction de son identifiant.
 *     parameters:
 *       - name: num_paie
 *         in: path
 *         required: true
 *         description: Identifiant du paiement à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paiement supprimé avec succès.
 *       404:
 *         description: Paiement non trouvé.
 */

router.delete('/:num_paie', paiementController.deletePaiement);  


module.exports = router;
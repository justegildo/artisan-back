const router = require('express').Router();
const rendezVousController = require('../controllers/rendezVous.controller');


/**
 * @swagger
 * /api/rendez-vous/add:
 *   post:
 *     summary: Créer une nouvelle rendez-vous
 *     tags:
 *      - Rendez-vous
 *     description: Crée une nouvelle rendez-vous avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RendezVous'
 *     responses:
 *       200:
 *         description: Rendez-vous créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", rendezVousController.addRendezVous);


/**
 * @swagger
 * /api/rendez-vous/:
 *   get:
 *     summary: Récupérer toutes les rendez-vous
 *     tags:
 *      - Rendez-vous
 *     description: Renvoie une liste de toutes les rendez-vouss.
 *     responses:
 *       200:
 *         description: Liste des rendez-vouss récupérées avec succès.
 */
router.get('/', rendezVousController.getAllRendezVous);


/**
 * @swagger
 * /api/rendez-vous/{num_rdv}:
 *   get:
 *     summary: Récupérer une rendez-vous par son numéro
 *     tags:
 *      - Rendez-vous
 *     description: Renvoie un rendez-vous en fonction de son numéro.
 *     parameters:
 *       - name: num_rdv
 *         in: path
 *         required: true
 *         description: Identifiant de la rendez-vous à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rendez-vous récupéré avec succès.
 *       404:
 *         description: Rendez-vous non trouvé.
 */
router.get('/:num_rdv', rendezVousController.getRendezVousByNum);


/**
 * @swagger
 * /api/rendez-vous/{num_rdv}:
 *   put:
 *     summary: Mettre à jour une rendez-vous
 *     tags:
 *      - Rendez-vous
 *     description: Met à jour une rendez-vous en fonction de son identifiant.
 *     parameters:
 *       - name: num_rdv
 *         in: path
 *         required: true
 *         description: Identifiant de la rendez-vous à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RendezVous'
 *     responses:
 *       200:
 *         description: Rendez-vous mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_rdv', rendezVousController.updateRendezVous);

/**
 * @swagger
 * /api/rendez-vous/{num_rdv}:
 *   delete:
 *     summary: Supprimer une rendezVous
 *     tags:
 *      - Rendez-vous
 *     description: Supprime une rendez-vous en fonction de son identifiant.
 *     parameters:
 *       - name: num_rdv
 *         in: path
 *         required: true
 *         description: Identifiant du rendez-vous à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rendez-ous supprimé avec succès.
 *       404:
 *         description: Rendez-ous non trouvé.
 */

router.delete('/:num_rdv', rendezVousController.deleteRendezVous);  


module.exports = router;
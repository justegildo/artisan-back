const router = require('express').Router();
const reponseController = require('../controllers/reponse.controller');


/**
 * @swagger
 * /api/reponse/add:
 *   post:
 *     summary: Créer une nouvelle reponse
 *     tags:
 *      - Reponse
 *     description: Crée un nouveau reponse avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reponse'
 *     responses:
 *       200:
 *         description: Reponse créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", reponseController.addReponse);


/**
 * @swagger
 * /api/reponse/:
 *   get:
 *     summary: Récupérer toutes les reponses
 *     tags:
 *      - Reponse
 *     description: Renvoie une liste de toutes les reponses.
 *     responses:
 *       200:
 *         description: Liste des reponses récupérées avec succès.
 */
router.get('/', reponseController.getAllReponses);


/**
 * @swagger
 * /api/reponse/{num_rep}:
 *   get:
 *     summary: Récupérer une reponse par son numéro
 *     tags:
 *      - Reponse
 *     description: Renvoie un reponse en fonction de son numéro.
 *     parameters:
 *       - name: num_rep
 *         in: path
 *         required: true
 *         description: Identifiant de la reponse à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reponse récupéré avec succès.
 *       404:
 *         description: Reponse non trouvé.
 */
router.get('/:num_rep', reponseController.getReponseByNum);


/**
 * @swagger
 * /api/reponse/{num_rep}:
 *   put:
 *     summary: Mettre à jour une reponse
 *     tags:
 *      - Reponse
 *     description: Met à jour une reponse en fonction de son identifiant.
 *     parameters:
 *       - name: num_rep
 *         in: path
 *         required: true
 *         description: Identifiant de la reponse à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reponse'
 *     responses:
 *       200:
 *         description: Reponse mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_rep', reponseController.updateReponse);

/**
 * @swagger
 * /api/reponse/{num_rep}:
 *   delete:
 *     summary: Supprimer une reponse
 *     tags:
 *      - Reponse
 *     description: Supprime une reponse en fonction de son identifiant.
 *     parameters:
 *       - name: num_rep
 *         in: path
 *         required: true
 *         description: Identifiant du reponse à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reponse supprimé avec succès.
 *       404:
 *         description: Reponse non trouvé.
 */

router.delete('/:num_rep', reponseController.deleteReponse);  


module.exports = router;
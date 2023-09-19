const router = require('express').Router();
const tenueController = require('../controllers/tenue.controller');


/**
 * @swagger
 * /api/tenue/add:
 *   post:
 *     summary: Créer une nouvelle tenue
 *     tags:
 *      - Tenue
 *     description: Crée un nouveau tenue avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tenue'
 *     responses:
 *       200:
 *         description: tenue créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", tenueController.addTenue);


/**
 * @swagger
 * /api/tenue/:
 *   get:
 *     summary: Récupérer toutes les tenues
 *     tags:
 *      - Tenue
 *     description: Renvoie une liste de toutes les tenues.
 *     responses:
 *       200:
 *         description: Liste des tenues récupérées avec succès.
 */
router.get('/', tenueController.getAllTenues);


/**
 * @swagger
 * /api/tenue/{num_ordre}:
 *   get:
 *     summary: Récupérer une tenue par son numéro
 *     tags:
 *      - Tenue
 *     description: Renvoie un tenue en fonction de son numéro.
 *     parameters:
 *       - name: num_ordre
 *         in: path
 *         required: true
 *         description: Identifiant de la tenue à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tenue récupéré avec succès.
 *       404:
 *         description: Tenue non trouvé.
 */
router.get('/:num_ordre', tenueController.getTenueByNum);


/**
 * @swagger
 * /api/tenue/{num_ordre}:
 *   put:
 *     summary: Mettre à jour une tenue
 *     tags:
 *      - Tenue
 *     description: Met à jour une tenue en fonction de son identifiant.
 *     parameters:
 *       - name: num_ordre
 *         in: path
 *         required: true
 *         description: Identifiant de la tenue à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tenue'
 *     responses:
 *       200:
 *         description: Tenue mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_ordre', tenueController.updateTenue);

/**
 * @swagger
 * /api/tenue/{num_ordre}:
 *   delete:
 *     summary: Supprimer une tenue
 *     tags:
 *      - Tenue
 *     description: Supprime une tenue en fonction de son identifiant.
 *     parameters:
 *       - name: num_ordre
 *         in: path
 *         required: true
 *         description: Identifiant de la tenue à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tenue supprimé avec succès.
 *       404:
 *         description: Tenue non trouvé.
 */

router.delete('/:num_ordre', tenueController.deleteTenue);  


module.exports = router;
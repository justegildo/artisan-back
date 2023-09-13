const router = require('express').Router();
const mesureController = require('../controllers/mesure.controller');


/**
 * @swagger
 * /api/mesure/add:
 *   post:
 *     summary: Créer un nouveau mesure
 *     tags:
 *      - Mesure
 *     description: Crée un nouveau mesure avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mesure'
 *     responses:
 *       200:
 *         description: Mesure créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", mesureController.addMesure);


/**
 * @swagger
 * /api/mesure/:
 *   get:
 *     summary: Récupérer tous les mesures
 *     tags:
 *      - Mesure
 *     description: Renvoie une liste de tous les mesures.
 *     responses:
 *       200:
 *         description: Liste des mesures récupérés avec succès.
 */
router.get('/', mesureController.getAllMesures);


/**
 * @swagger
 * /api/mesure/{id}:
 *   get:
 *     summary: Récupérer un mesure par son identifiant
 *     tags:
 *      - Mesure
 *     description: Renvoie un mesure en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du mesure à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mesure récupéré avec succès.
 *       404:
 *         description: Mesure non trouvé.
 */
router.get('/:id', mesureController.getMesureById);


/**
 * @swagger
 * /api/mesure/{id}:
 *   put:
 *     summary: Mettre à jour un mesure
 *     tags:
 *      - Mesure
 *     description: Met à jour un mesure en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du mesure à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mesure'
 *     responses:
 *       200:
 *         description: Mesure mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', mesureController.updateMesure);

/**
 * @swagger
 * /api/mesure/{id}:
 *   delete:
 *     summary: Supprimer un mesure
 *     tags:
 *      - Mesure
 *     description: Supprime un mesure en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du mesure à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mesure supprimé avec succès.
 *       404:
 *         description: Mesure non trouvé.
 */

router.delete('/:id', mesureController.deleteMesure);  


module.exports = router;
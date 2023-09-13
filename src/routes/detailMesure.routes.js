const router = require('express').Router();
const detailMesureController = require('../controllers/detailMesure.controller');


/**
 * @swagger
 * /api/detail-mesure/add:
 *   post:
 *     summary: Créer un nouveau detail mesure
 *     tags:
 *      - Detail Mesure
 *     description: Crée un nouveau detail mesure avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetailMesure'
 *     responses:
 *       200:
 *         description: Detail mesure créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", detailMesureController.addDetailMesure);


/**
 * @swagger
 * /api/detail-mesure/:
 *   get:
 *     summary: Récupérer tous les details mesures
 *     tags:
 *      - Detail Mesure
 *     description: Renvoie une liste de tous les details mesures.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 */
router.get('/', detailMesureController.getAllDetailMesures);


/**
 * @swagger
 * /api/detail-mesure/{mesure_id}/{num_type}:
 *   get:
 *     summary: Récupérer un detail mesure par son identifiant
 *     tags:
 *      - Detail Mesure
 *     description: Renvoie un detail mesure en fonction de son identifiant.
 *     parameters:
 *       - name: mesure_id
 *         in: path
 *         required: true
 *         description: Identifiant du detail mesure à récupérer
 *         schema:
 *           type: integer
 *      - name: num_type
 *         in: path
 *         required: true
 *         description: Numéro de type associé au détail de mesure
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail mesure récupéré avec succès.
 *       404:
 *         description: Detail mesure non trouvé.
 */
router.get('/:mesure_id/:num_type', detailMesureController.getDetailMesureByMesureId);


/**
 * @swagger
 * /api/detail-mesure/{mesure_id}/{num_type}:
 *   put:
 *     summary: Mettre à jour un detail mesure
 *     tags:
 *      - Detail Mesure
 *     description: Met à jour un detailMesure en fonction de son identifiant.
 *     parameters:
 *       - name: mesure_id
 *         in: path
 *         required: true
 *         description: Identifiant du detail mesure à mettre à jour
 *         schema:
 *           type: integer
 *      - name: num_type
 *         in: path
 *         required: true
 *         description: Numéro de type associé au détail de mesure
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetailMesure'
 *     responses:
 *       200:
 *         description: Detail mesure mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:mesure_id/:num_type', detailMesureController.updateDetailMesure);

/**
 * @swagger
 * /api/detail-mesure/{mesure_id}/{num_type}:
 *   delete:
 *     summary: Supprimer un detail mesure
 *     tags:
 *      - Detail Mesure
 *     description: Supprime un detail mesure en fonction de son identifiant.
 *     parameters:
 *       - name: mesure_id
 *         in: path
 *         required: true
 *         description: Identifiant du detail mesure à supprimer
 *         schema:
 *           type: integer
 *      - name: num_type
 *         in: path
 *         required: true
 *         description: Numéro de type associé au détail de mesure
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail mesure supprimé avec succès.
 *       404:
 *         description: Detail mesure non trouvé.
 */

router.delete('/:mesure_id/:num_type', detailMesureController.deleteDetailMesure);  


module.exports = router;
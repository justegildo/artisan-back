const router = require('express').Router();
const typeMesureController = require('../controllers/typeMesure.controller');


/**
 * @swagger
 * /api/type-mesure/add:
 *   post:
 *     summary: Créer un nouveau type mesure
 *     tags:
 *      - Type Mesure
 *     description: Crée un nouveau typeMesure avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeMesure'
 *     responses:
 *       200:
 *         description: Type mesure créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", typeMesureController.addTypeMesure);


/**
 * @swagger
 * /api/type-mesure/:
 *   get:
 *     summary: Récupérer tous les types mesures
 *     tags:
 *      - Type Mesure
 *     description: Renvoie une liste de tous les types mesures.
 *     responses:
 *       200:
 *         description: Liste des types mesures récupérés avec succès.
 */
router.get('/', typeMesureController.getAllTypeMesures);


/**
 * @swagger
 * /api/type-mesure/{num_type}:
 *   get:
 *     summary: Récupérer un type mesure par son identifiant
 *     tags:
 *      - Type Mesure
 *     description: Renvoie un typeMesure en fonction de son identifiant.
 *     parameters:
 *       - name: num_type
 *         in: path
 *         required: true
 *         description: Identifiant du type mesure à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type mesure récupéré avec succès.
 *       404:
 *         description: Type mesure non trouvé.
 */
router.get('/:num_type', typeMesureController.getTypeMesureByNum);


/**
 * @swagger
 * /api/type-mesure/{num_type}:
 *   put:
 *     summary: Mettre à jour un type mesure
 *     tags:
 *      - Type Mesure
 *     description: Met à jour un type mesure en fonction de son identifiant.
 *     parameters:
 *       - name: num_type
 *         in: path
 *         required: true
 *         description: Identifiant du type mesure à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeMesure'
 *     responses:
 *       200:
 *         description: Type esure mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_type', typeMesureController.updateTypeMesure);

/**
 * @swagger
 * /api/type-mesure/{num_type}:
 *   delete:
 *     summary: Supprimer un type mesure
 *     tags:
 *      - Type Mesure
 *     description: Supprime un type mesure en fonction de son identifiant.
 *     parameters:
 *       - name: num_type
 *         in: path
 *         required: true
 *         description: Identifiant du type mesure à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Type mesure supprimé avec succès.
 *       404:
 *         description: Type mesure non trouvé.
 */

router.delete('/:num_type', typeMesureController.deleteTypeMesure);  


module.exports = router;
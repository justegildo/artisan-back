const router = require('express').Router();
const modeleController = require('../controllers/modele.controller');


/**
 * @swagger
 * /api/modele/add:
 *   post:
 *     summary: Créer un nouveau modele
 *     tags:
 *      - modele
 *     description: Crée un nouveau modele avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/modele'
 *     responses:
 *       200:
 *         description: modele créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", modeleController.addModele);


/**
 * @swagger
 * /api/modele/:
 *   get:
 *     summary: Récupérer tous les types utilisateurs
 *     tags:
 *      - modele
 *     description: Renvoie une liste de tous les modeles.
 *     responses:
 *       200:
 *         description: Liste des types utilisateurs récupérés avec succès.
 */
router.get('/', modeleController.getAllModeles);


/**
 * @swagger
 * /api/modele/{num_mod}:
 *   get:
 *     summary: Récupérer un modele par son identifiant
 *     tags:
 *      - modele
 *     description: Renvoie un modele en fonction de son identifiant.
 *     parameters:
 *       - name: num_mod
 *         in: path
 *         required: true
 *         description: Identifiant du modele à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: modele récupéré avec succès.
 *       404:
 *         description: modele non trouvé.
 */
router.get('/:num_mod', modeleController.getModeleByNum);


/**
 * @swagger
 * /api/modele/{num_mod}:
 *   put:
 *     summary: Mettre à jour un modele
 *     tags:
 *      - modele
 *     description: Met à jour un modele en fonction de son identifiant.
 *     parameters:
 *       - name: num_mod
 *         in: path
 *         required: true
 *         description: Identifiant du modele à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/modele'
 *     responses:
 *       200:
 *         description: modele mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_mod', modeleController.updateModele);

/**
 * @swagger
 * /api/modele/{num_mod}:
 *   delete:
 *     summary: Supprimer un modele
 *     tags:
 *      - modele
 *     description: Supprime un modele en fonction de son identifiant.
 *     parameters:
 *       - name: num_mod
 *         in: path
 *         required: true
 *         description: Identifiant du modele à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: modele supprimé avec succès.
 *       404:
 *         description: modele non trouvé.
 */

router.delete('/:num_mod', modeleController.deleteModele);  


module.exports = router;
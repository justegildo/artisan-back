const router = require('express').Router();
const commandeController = require('../controllers/commande.controller');


/**
 * @swagger
 * /api/commande/add:
 *   post:
 *     summary: Créer une nouvelle commande
 *     tags:
 *      - Commande
 *     description: Crée un nouveau commande avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commande'
 *     responses:
 *       200:
 *         description: Commande créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", commandeController.addCommande);


/**
 * @swagger
 * /api/commande/:
 *   get:
 *     summary: Récupérer toutes les commandes
 *     tags:
 *      - Commande
 *     description: Renvoie une liste de toutes les commandes.
 *     responses:
 *       200:
 *         description: Liste des commandes récupérées avec succès.
 */
router.get('/', commandeController.getAllCommandes);


/**
 * @swagger
 * /api/commande/{num_cmde}:
 *   get:
 *     summary: Récupérer une commande par son numéro
 *     tags:
 *      - Commande
 *     description: Renvoie un commande en fonction de son numéro.
 *     parameters:
 *       - name: num_cmde
 *         in: path
 *         required: true
 *         description: Identifiant de la commande à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commande récupéré avec succès.
 *       404:
 *         description: Commande non trouvé.
 */
router.get('/:num_cmde', commandeController.getCommandeByNum);


/**
 * @swagger
 * /api/commande/{num_cmde}:
 *   put:
 *     summary: Mettre à jour une commande
 *     tags:
 *      - Commande
 *     description: Met à jour une commande en fonction de son identifiant.
 *     parameters:
 *       - name: num_cmde
 *         in: path
 *         required: true
 *         description: Identifiant de la commande à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Commande'
 *     responses:
 *       200:
 *         description: commande mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_cmde', commandeController.updateCommande);

/**
 * @swagger
 * /api/commande/{num_cmde}:
 *   delete:
 *     summary: Supprimer une commande
 *     tags:
 *      - Commande
 *     description: Supprime une commande en fonction de son identifiant.
 *     parameters:
 *       - name: num_cmde
 *         in: path
 *         required: true
 *         description: Identifiant du commande à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commande supprimé avec succès.
 *       404:
 *         description: Commande non trouvé.
 */

router.delete('/:num_cmde', commandeController.deleteCommande);  


module.exports = router;
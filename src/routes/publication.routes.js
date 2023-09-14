const router = require('express').Router();
const publicationController = require('../controllers/publication.controller');


/**
 * @swagger
 * /api/publication/add:
 *   post:
 *     summary: Créer une nouvelle publication
 *     tags:
 *      - Publication
 *     description: Crée une nouvelle publication avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publication'
 *     responses:
 *       200:
 *         description: Publication créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", publicationController.addPublication);


/**
 * @swagger
 * /api/publication/:
 *   get:
 *     summary: Récupérer toutes les publications
 *     tags:
 *      - Publication
 *     description: Renvoie une liste de tous les publications.
 *     responses:
 *       200:
 *         description: Liste des publications récupérées avec succès.
 */
router.get('/', publicationController.getAllPublications);


/**
 * @swagger
 * /api/publication/{id_publication}:
 *   get:
 *     summary: Récupérer une publication par son identifiant
 *     tags:
 *      - Publication
 *     description: Renvoie une publication en fonction de son identifiant.
 *     parameters:
 *       - name: id_publication
 *         in: path
 *         required: true
 *         description: Identifiant de la publication à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Publication récupéré avec succès.
 *       404:
 *         description: Publication non trouvé.
 */
router.get('/:id_publication', publicationController.getPublicationById);


/**
 * @swagger
 * /api/publication/{id_publication}:
 *   put:
 *     summary: Mettre à jour une publication
 *     tags:
 *      - Publication
 *     description: Met à jour une publication en fonction de son identifiant.
 *     parameters:
 *       - name: id_publication
 *         in: path
 *         required: true
 *         description: Identifiant de la publication à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publication'
 *     responses:
 *       200:
 *         description: Publication mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id_publication', publicationController.updatePublication);

/**
 * @swagger
 * /api/publication/{id_publication}:
 *   delete:
 *     summary: Supprimer une publication
 *     tags:
 *      - Publication
 *     description: Supprime une publication en fonction de son identifiant.
 *     parameters:
 *       - name: id_publication
 *         in: path
 *         required: true
 *         description: Identifiant de la publication à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Publication supprimé avec succès.
 *       404:
 *         description: Publication non trouvé.
 */

router.delete('/:id_publication', publicationController.deletePublication);  


module.exports = router;
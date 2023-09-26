const router = require('express').Router();
const postController = require('../controllers/post.controller');


/**
 * @swagger
 * /api/post/add:
 *   post:
 *     summary: Créer une nouvelle post
 *     tags:
 *      - Post
 *     description: Crée un nouveau post avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", postController.addPost);


/**
 * @swagger
 * /api/post/:
 *   get:
 *     summary: Récupérer toutes les posts
 *     tags:
 *      - Post
 *     description: Renvoie une liste de toutes les posts.
 *     responses:
 *       200:
 *         description: Liste des posts récupérées avec succès.
 */
router.get('/', postController.getAllPosts);


/**
 * @swagger
 * /api/post/{num_post}:
 *   get:
 *     summary: Récupérer une post par son numéro
 *     tags:
 *      - Post
 *     description: Renvoie un post en fonction de son numéro.
 *     parameters:
 *       - name: num_post
 *         in: path
 *         required: true
 *         description: Identifiant de la post à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post récupéré avec succès.
 *       404:
 *         description: Post non trouvé.
 */
router.get('/:num_post', postController.getPostByNum);


/**
 * @swagger
 * /api/post/{num_post}:
 *   put:
 *     summary: Mettre à jour une post
 *     tags:
 *      - Post
 *     description: Met à jour une post en fonction de son identifiant.
 *     parameters:
 *       - name: num_post
 *         in: path
 *         required: true
 *         description: Identifiant de la post à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:num_post', postController.updatePost);

/**
 * @swagger
 * /api/post/{num_post}:
 *   delete:
 *     summary: Supprimer une post
 *     tags:
 *      - Post
 *     description: Supprime une post en fonction de son identifiant.
 *     parameters:
 *       - name: num_post
 *         in: path
 *         required: true
 *         description: Identifiant du post à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post supprimé avec succès.
 *       404:
 *         description: Post non trouvé.
 */

router.delete('/:num_post', postController.deletePost);  


module.exports = router;
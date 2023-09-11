const db = require("../config/dbConfig");
const utilisateurQueries = require('../queries/utilisateur.queries');
const typeUtilisateurQueries = require('../queries/typeUtilisateur.queries');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


//afficher tous les utilisateurs
module.exports.getAllUtilisateurs = async (req, res) => {

    const results = await db.query(utilisateurQueries.getAllUtilisateurs)
    //console.log(result.rowCount);

    if (results.rowCount) {
        res.status(200).json(results.rows);

    } else {
        res.status(401).send("Pas de données disponible")
    }
}

// récupérer une utilisateur
module.exports.getUtilisateurById = async (req, res) => {

    const id = parseInt(req.params.id);

    const result = await db.query(utilisateurQueries.getUtilisateurById, [id])
    //console.log(result.rowCount);

    if (result.rowCount) {
        res.status(200).json(result.rows);
    } else {
        res.status(401).send("Cet utilisateur n'existe pas")
    }
}

//ajouter une utilisateur
module.exports.addUtilisateur = async (req, res) => {
    const { nom, prenoms, sexe, email, telephone, password, type_utilisateur, nom_atelier, specialite } = req.body;
    //console.log(req.body);

    const result = await db.query(utilisateurQueries.checkEmailExists, [email, telephone]);

    if (result.rows.length) {

        res.send("Cet email / numéro de téléphone existe déjà dans la base de données !");

    } else {
        try {
            // Insert the new user into the database
            var hashPassword = bcrypt.hashSync(password);
            const results = await db.query(utilisateurQueries.addUtilisateur,
                [nom, prenoms, sexe, email, telephone, hashPassword, type_utilisateur])

            //console.log(results);

            if (results.rowCount && results.command === 'INSERT') {

                const resul = await db.query(utilisateurQueries.getUilisateurId)
                const userId = resul.rows[0].lastval
                //console.log(userId);


                const resultType = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [type_utilisateur])
                //console.log(resultType.rows[0].name);

                if (resultType.rows[0].name === 'CLIENT') {
                    //console.log(resultType.rows[0].name);

                    const result = await db.query(utilisateurQueries.addClient, [userId])

                    if (result.rowCount && result.command === 'INSERT') {
                        // Send a welcome email to the new user
                        let transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 587,
                            secure: false,
                            service: 'gmail',
                            auth: {
                                user: process.env.USER_MAIL, // replace with your own email
                                pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        });

                        //envoie du message à l'utilisateur
                        let mailOptions = {
                            from: process.env.SENDER_MAIL, // sender address
                            to: req.body.email, // list of receivers
                            subject: 'EcoiaApp', // Subject line
                            text: "Inscription réussie avec succès ! ", // plain text body
                            html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur notre plateforme EcoiaApp ! C\est agréable de vous avoir parmi nous ! </p><br> `
                        };

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                res.status(400).send(error);
                            } else {
                                res.status(200).send('Email envoyé: ' + info.response);
                            }
                        });

                        res.status(200).send("Client crée avec succès !")

                    } else {
                        res.status(400).send("Erreur")
                    }

                } else if (resultType.rows[0].name === 'COUTURIER') {
                    //console.log(resultType.rows[0].name);

                    const result = await db.query(utilisateurQueries.addCouturier, [userId, nom_atelier, specialite])

                    if (result.rowCount && result.command === 'INSERT') {
                        // Send a welcome email to the new user
                        let transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 587,
                            secure: false,
                            service: 'gmail',
                            auth: {
                                user: process.env.USER_MAIL, // replace with your own email
                                pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        });

                        //envoie du message à l'utilisateur
                        let mailOptions = {
                            from: process.env.SENDER_MAIL, // sender address
                            to: req.body.email, // list of receivers
                            subject: 'EcoiaApp', // Subject line
                            text: "Inscription réussie avec succès ! ", // plain text body
                            html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur notre plateforme EcoiaApp ! C\est agréable de vous avoir parmi nous ! </p><br> `
                        };

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                res.status(400).send(error);
                            } else {
                                res.status(200).send('Email envoyé: ' + info.response);
                            }
                        });

                        res.status(200).send("Couturier crée avec succès !")

                    } else {
                        res.status(400).send("Erreur")
                    }
                    
                } else if (resultType.rows[0].name === 'ADMIN') {
                    console.log(resultType.rows[0].name);

                    // Send a welcome email to the new user
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        service: 'gmail',
                        auth: {
                            user: process.env.USER_MAIL, // replace with your own email
                            pass: process.env.PASSWORD_USER_MAIL // replace with your own email password
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    });

                    //envoie du message à l'utilisateur
                    let mailOptions = {
                        from: process.env.SENDER_MAIL, // sender address
                        to: req.body.email, // list of receivers
                        subject: 'EcoiaApp', // Subject line
                        text: "Inscription réussie avec succès ! ", // plain text body
                        html: `<p>${prenoms + ' ' + nom} une très chaleureuse bienvenue à vous sur notre plateforme EcoiaApp ! C\est agréable de vous avoir parmi nous ! </p><br> `
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            res.status(400).send(error);
                        } else {
                            res.status(200).send('Email envoyé: ' + info.response);
                        }
                    });

                    res.status(200).send("Utilisateur crée avec succès !")

                } else {
                    res.status(400).send("Erreur")
                }

            } else {
                res.status(400).send("Erreur")
            }

        } catch (err) {
            res.status(400).json(err.message);
        }
    }
}


//modifier un utilisateur
module.exports.updateUtilisateur = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, prenoms, sexe, email, telephone, type_utilisateur, nom_atelier, specialite } = req.body;

    const result = await db.query(utilisateurQueries.getUtilisateurById, [id])

    const noUtilisateurFound = !result.rows.length;

    if (noUtilisateurFound) {
        res.send("Cet utilisateur n'existe pas");

    } else {
        const results = await db.query(utilisateurQueries.updateUtilisateur,
            [nom, prenoms, sexe, email, telephone, type_utilisateur, id])
        //console.log(results);

        if(results.rowCount && results.command === 'UPDATE'){

            const resultType = await db.query(typeUtilisateurQueries.getTypeUtilisateurById, [type_utilisateur])
            //console.log(resultType.rows[0].name);

            if (resultType.rows[0].name === 'CLIENT') {

                const result = await db.query(utilisateurQueries.updateClient, [id])

                if(result.rowCount && results.command === 'UPDATE')  {

                    res.status(200).send("Client modifié avec succès !")

                } else {
                    res.status(400).send("Erreur")
                }

            } else if (resultType.rows[0].name === 'COUTURIER') {

                const result = await db.query(utilisateurQueries.updateCouturier, [nom_atelier, specialite, id])

                if(result.rowCount && results.command === 'UPDATE') {

                    res.status(200).send("Couturier modifié avec succès !");

                } else {
                    res.status(400).send("Erreur")
                }

            } else if (resultType.rows[0].name === 'ADMIN') {

                res.status(200).send("tilisateur modifié avec succès !")

            } else if (resultType.rows[0].name === 'USER'){
                
                res.status(400).send("Utilisateur modifié avec succès !")

            } else {
                res.status(400).send("Erreur")
            }
            
        } else {
            res.status(401).json(error)
        }
    }
}



//supprimer un utilisateur
module.exports.deleteUtilisateur = async(req, res) => {
    const id = parseInt(req.params.id);

    const results = await db.query(utilisateurQueries.getUtilisateurById, [id])
    //console.log(results);

    const noNiveauLyceeFound = !results.rows.length;
    if (noNiveauLyceeFound) {
        res.send("Impossible de supprimer cet utilisateur car il n'existe pas dans la base de données. ");
    } else {
        const result = await db.query(utilisateurQueries.deleteUtilisateur, [id])
        //console.log(result);
        if (result) {
            res.status(200).send("Utilisateur supprimé avec succès");
        } else {
            res.status(401).send("Erreur")
        }
    }
}







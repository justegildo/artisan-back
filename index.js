const express = require('express');
const app =express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path: './src/config/.env'});
const userRoutes = require('../back/src/routes/utilisateur.routes')
const typeUserRoutes = require('../back/src/routes/typeUtilisateur.routes')
const typeMesureRoutes = require('../back/src/routes/typeMesure.routes')
const modeleRoutes = require('../back/src/routes/modele.routes')
const mesureRoutes = require('../back/src/routes/mesure.routes')
const detailMesureRoutes = ('../back/src/routes/detailMesure.routes.js')
const verifyAuthToken = require ('./src/middleware/middleware')

app.use(express.json());

var corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,',
    'preflightContinue': false 
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//gestion swagger 
app.use('/artisan-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

//utilisateur
app.use('/api/user', userRoutes);

//type utilisateur
app.use('/api/type-user', verifyAuthToken, typeUserRoutes);

//modele
app.use('/api/modele', /*verifyAuthToken, */ modeleRoutes);

//type mesure
app.use('/api/type-mesure', /*verifyAuthToken, */ typeMesureRoutes);

//mesure
app.use('/api/mesure', /*verifyAuthToken, */ mesureRoutes);

//mesure
app.use('/api/detail-mesure', /*verifyAuthToken, */ detailMesureRoutes);

//le port
app.listen(process.env.SERVEUR_PORT, () => 
    console.log(`Server started in port ${process.env.SERVEUR_PORT} && aller sur le swagger http://localhost:${process.env.SERVEUR_PORT}/artisan-api-docs`
));
//startApp();

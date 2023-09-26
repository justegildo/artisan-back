const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config({path: './src/config/.env'});


const swaggerDefinition = {
  openapi: '3.0.0',
  //basePath: '../back/src/components/schemas',
  info: {
    title: 'API REST',
    version: '1.0.0',
    description: 'API of EcoiaApp',
    license: {
      name: "ARTI-COUT",
      url: "https://spdx.org/licenses/JDG.html",
    },

    contact: {
      name: "Juste Gildo",
      url: "https://juste-gildo.com",
      email: "dossousedjrogildas@gmail.com",
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        in: "Bearer",
        name: "Authorization",
      },

      OpenID: {
        type: "openIdConnect",
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration'
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ],

    schemas: {
      Utilisateur: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "telephone": {
            "type": "string",
            "format": "number"
          },
          "password": {
            "type": "string"
          },
          "type_utilisateur_id": {
            "type": "string",
            //"format": "number"
          },
        },
        "required": [
          "nom", "prenom", "email", "password"
        ]
      },

      UpdateUtilisateur: {
         "type": "object",
         "properties": {
           "nom" : {
               "type": "string"
           },
           "prenoms": {
               "type": "string"
           }, 
           "sexe":{
               "type": "string"
           },
           "email": {
             "type": "string",
             "format": "email"
           },
           "telephone": {
             "type": "string",
             "format": "number"
           },
           "type_utilisateur": {
             "type": "string"
           }
           },
           "required": [ 
             "nom", "prenom", "email"
           ]
       },

      Authentification: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        },
        "required": [
          "username", "password"
        ]
      },

      UpdatePassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "oldPassword": {
            "type": "string"
          }
          ,
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "oldPassword", "newPassword"
        ]
      },

      ResetPassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "newPassword"
        ]
      },

      TypeUtilisateur: {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "label", "name"
        ]
      },

      Modele: {
        "type": "object",
        "properties": {
          "nom_mod": {
            "type": "string"
          }
        },
        "required": [
          "nom_mod", "string"
        ]
      },

      TypeMesure: {
        "type": "object",
        "properties": {
          "nom_type": {
            "type": "string"
          }
        },
        "required": [
          "nom_type"
        ]
      },

      Mesure: {
        "type": "object",
        "properties": {
          "client_id": {
            "type": "number"
          },
          "couturier_id": {
            "type": "number"
          }
        },
        "required": [
          "client_id", "couturier_id"
        ]
      },

      DetailMesure: {
        "type": "object",
        "properties": {
          "mesure_id": {
            "type": "number"
          },
          "num_type": {
            "type": "number"
          },
          "valeur": {
            "type": "string"
          }
        },
        "required": [
          "mesure_id", "num_type", "valeur"
        ]
      },

      UpdateDetailMesure: {
        "type": "object",
        "properties": {
          "valeur": {
            "type": "string"
          }
        },
        "required": [
          "valeur"
        ]
      },

      Publication: {
        "type": "object",
        "properties": {
          "couturier_id": {
            "type": "number"
          },
          "num_mod": {
            "type": "number"
          }
        },
        "required": [
          "couturier_id", "num_mod"
        ]
      },

      Commande: {
        "type": "object",
        "properties": {
          "montant": {
            "type": "string"
          },
          "date_livraison": {
            "type": "string",
            "format": "date"
          },
          "avance": {
            "type": "string"
          },
          "client": {
            "type": "number"
          },
          "couturier": {
            "type": "number"
          }
        },

        "required": [
          "couturier", "client", "date_livraison"
        ]
      },

      RendezVous: {
        "type": "object",
        "properties": {
          "date_rdv": {
            "type": "string",
            "format": "date"
          },
          "heure_rdv": {
            "type": "string"
          },
          "commande": {
            "type": "number"
          },
          "client": {
            "type": "number"
          },
          "couturier": {
            "type": "number"
          }
        },

        "required": [
          "couturier", "client", "date_livraison"
        ]
      },

      Tenue: {
        "type": "object",
        "properties": {
          "photo_pagne": {
            "type": "string"
          },
          "montant": {
            "type": "string"
          },
          "nb_metre": {
            "type": "string"
          },
          "modele": {
            "type": "number"
          },
          "commande": {
            "type": "number"
          }
        },

        "required": [
          "commande", "modele"
        ]
      },

      Paiement: {
        "type": "object",
        "properties": {
          "date_paie": {
            "type": "string",
            "format": "date"
          },
          "montant_reg": {
            "type": "string"
          },
          "commande": {
            "type": "number"
          }
        },

        "required": [
          "commande", "montant_reg"
        ]
      },

      Reponse: {
        "type": "object",
        "properties": {
          "contenu_rep": {
            "type": "string"
          },
          "utilisateur": {
            "type": "number"
          },
          "post": {
            "type": "number"
          }
        },

        "required": [
          "contenu_rep", "utilisateur", "post"
        ]
      },

      Post: {
        "type": "object",
        "properties": {
          "contenu": {
            "type": "string"
          },
          "date_post": {
            "type": "string",
            "format": "date"
          },
          "heure_post": {
            "type": "string"
          },
          "emetteur": {
            "type": "number"
          },
          "recepteur": {
            "type": "number"
          }
        },

        "required": [
          "date_post", "emetteur", "recepteur", "heure_post", "contenu"
        ]
      },

  
    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['../back/src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
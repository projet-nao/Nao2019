## Controllers :
Les fichiers controllers (dans ce dossier) font interface entre le Modèle et la Vue.  
Leur principale utilisation est de récupérer des données, pour les injecter dans la Vue (les pages HTML) pour faire des pages générées dynamiquement.  
 
 Il est possible :
+ De les générer automatiquement via la commande `sails generate new api *nom de la table dans la BDD*` :  
Cette commande génère un fichier `*nom de la table dans la BDD*.js` dans le dossier `/api/models` et un fichier `*nom de la table dans la BDD*Controller.js`.
+ De le créer à la main :  
Il faut que le fichier contienne :  
`module.exports = {`  
`  // code`  
`};`

#### Actions :  
Les controllers contiennent des actions qui peuvent être appelées via les routes (voir fichier `/config/routes.js`).  
La syntaxe est :  
`*nom de l'action*: function (req, res) {`  
`    /* Code */`  
`};`  
    ou  
`*nom de l'action*: await function (req, res) {`  
`    /* Code */`  
`};`  

Par défaut, les accès à la base de données se font de manière asynchrone.  
Si il est nécessaire de faire plusieurs appels à la BDD, il est intéressant de forcer l'attente avec le mot clé `await`.  
Par exemple :  
`var resultats = await Users.find();` attend le retour de la fonction `.find()`  
Pour plus de documentation : [La documentation sur les controllers de SailsJS](https://sailsjs.com/documentation/concepts/actions-and-controllers)

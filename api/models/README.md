## Models :
Les fichiers models (dans ce dossier) font interface entre l'application et la base de données.  
Leur principale utilisation est de définir l'interface des tables de la base de données pour que le controller ait une couche d'abstraction.    
 
 Il est possible :
+ De les générer automatiquement via la commande `sails generate new api *nom de la table dans la BDD*` :  
Cette commande génère un fichier `*nom de la table dans la BDD*Controller.js` dans le dossier `/api/controllers` et un fichier `*nom de la table dans la BDD*.js` dans ce dossier.  

+ De le créer à la main :  
Il faut que le fichier contienne :  
`module.exports = {`  
`  attributes: {`  
`    /* Code */`  
`  }`  
`};`  

#### Modèles :  
Les models représentent des tables d'une base de données. Ce n'est pas une base de données, il en faut une (de préférence MySQL car testé).  
La syntaxe est :  
`*nom du champ*: { type: *type de la donnée*,`  
`},`  

Pour plus de documentation : [La documentation sur les models de SailsJS](https://sailsjs.com/documentation/concepts/models-and-orm/models)

# Nao2019

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri May 03 2019 00:39:50 GMT+0200 (GMT+02:00) using Sails v1.1.0.

---------------------------------- Fin de la partie générée automatiquement -----------------------------------------

## Prérequis :
 + [Node.js](https://nodejs.org/fr/)
 + [npm](https://www.npmjs.com/)
 + Sails.js ( Le framework qui a généré la première partie de ce README )
 + MySQL
 + (Conseillé mais pas obligatoire) PHPMyAdmin

### Versions
 + Sails : v1.1.0
 + Node.js : v10.15.3 (Dernière version stable actuellement)
 + npm : v6.4.1

Le serveur qui hébèrge le tout est un Ubuntu 16.04.6 (Des problèmes rencontrés avec Ubuntu 18 notamment avec nouveau le système de mise en place d'adresse IP statique...)

### Pour installer NodeJS + npm + SailsJS sur Ubuntu :
  [Tutoriel utilisé](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/), à recopier ici plus tard pour éviter des liens morts
  
  NodeJS : 
  `sudo apt-get install curl python-software-properties`  
  `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`  
  `sudo apt-get install nodejs`

  SailsJS : `npm install sails -g`

### Description BREVE de SailsJS : 
SailsJS est un Framework orienté MVC : Model , View , Controller.  
Rapidement, ce type de Framework sépare l'aspect données (Model) de l'apparence (View) et du traitement (Controller).
Ce format découpé nécessite de bien définir les interfaces entres les modules (qui envoie quoi à qui)pour un développement efficace.
Avec un bon découpage, il est possible de rendre chaque partie interchangable et donc de pouvoir faire évoluer le projet en mettant le moins possible en péril le reste du projet.

### Ce que SailsJS fait (entre autre, je ne connais pas toutes les options du Framework) :
  + Accède à une(des) base(s) de données
  + Renvoie des vues à l'utilisateur
  
### Ce que SailsJS ne fait pas :
  + Hébérger une base de données :  
SailsJS permet de communiquer via une base de données qu'il faudra connecter. Les instructions pour connecter une base de données MySQL seront données plus bas. Pour les autres bases de données, il faudra se référrer à la documentation propre à SailsJS (cf. Liens de la première partie).
  + Proposer une template graphique pour la présentation de votre site web :  
SailsJS fait beaucoup, et propose une template très élaborée avec "type 1" (lors de la création de projet).
Cependant, c'est un style assez basique, pour le personnaliser, il est fortement conseillé d'utiliser un Framework d'Interface Utilisateur (UI) comme [Bootstrap](https://getbootstrap.com/) ou encore [Semantic UI](https://semantic-ui.com/) ou [JQueryUI](https://jqueryui.com/) entre (de nombreux) autres... 

## Fonctionnement global de SailsJS
Ce paragraphe n'a pas vocation à expliquer précisément le fonctionnement de chaque feature du framework mais plutôt un "tour du propriétaire" pour les novices.

L'aspect View (du MVC de quelques paragraphes avant) est stocké dans le dossier "views" (sans grandes surprises) et contient deux sous dossiers :  
`layout` qui contient `layout.ejs` -> Ce fichier contient le layout du site : C'est la tête et le pied de chaque page. Seul le corps des pages changera ce qui évite de recopier sur toutes les pages une barre de navigation par exemple...  
`pages` qui contient des fichiers `.ejs` qui seront les corps des différentes pages.  
Les fichiers `.ejs` sont des fichiers `HTML` dans lesquels on peut afficher des variables via le controlleur. Nous verrons plus tard comment afficher ces variables.  

Le dossier `api` contient des dossiers dont ceux qui vont nous intéresser : `models` et `controllers`.  
Les API se génèrent en première partie via une commande de SailsJS : `sails generate api *Nom de la table de la BDD*`  
Cette commande génère deux fichiers `./models/*Nom de la table de la BDD*.js` et `./controllers/*Nom de la table de la BDD*.js`

L'aspect Model est contenu dans le dossier `api/models`.  
Ce dossier contient des fichiers `.json` qui décrivent la structure des tables de la base de données.  
Il faut installer un adapteur pour les différentes bases de données.  Pour installer l'adapteur pour MySQL il faut saisir la commande `npm install sails-mysql --save --save-exact` dans le dossier du projet.  
En suite le paramétrage pour le fichier `/config/datastores.js` est disponible à [cette page](https://sailsjs.com/documentation/reference/configuration/sails-config-datastores#?using-a-local-mysql-database-in-development)  
##### /!\ Le framework SailsJS impose d'avoir un champ `createdAt` et `updatedAt` /!\   
Les fichiers de Model ne font pas d'actions / de requêtes, c'est le rôle du Controller.  

L'aspect Controller est contenu dans le dossier `api/controllers`.  
Ce dossier contient des fichiers `.js` qui permettent d'écrire des fonctions de traitement et/ou récupération des données.  
Il est possible, par exemple, de voir la méthode HTTP du client, son IP et d'autres paramètres, de choisir ce qu'il sera affiché pour la suite.  

En général, le fonctionnement est que le client demande un controller, qui récupère des données au besoin. Ensuite le controller réponds une vue qu'il remplit avec les données traitées.

Il est possible d'intégrer dans les vues ( les fichiers `.ejs` ) des tags pour écrire depuis le controller ( à la manière que PHP écrirait dans un fichier .html ).  
Ces tags sont décris dans la [documentation de SailsJS](https://sailsjs.com/documentation/concepts/views/locals).  
`<%= someValue %>` permet d'afficher du texte uniquement, par exemple le nom de la personne connectée.  
`<%- someRawHTML %>` permet d'afficher du HTML, pour afficher un élément pour le DOM (un onglet d'une navbar par exemple)
`<% if (condition) %>` permet d'éxécuter du JavaScript.  
Par exemple `<% if (connected) { %> <a>Logout</a> <% } %>` affiche `<a>Logout</a>` si le client est connecté...   
Seule la balise d'ouverture change le type d'affichage, la fermeture est toujours `%>`.

Le controlleur peut contacter les fichiers de Model pour faire des requêtes à la base de données.

Le fichier `config/routes.js` joue un rôle intéressant :  
Il permet de déclarer les URL accessibles dans le cadre du site, soit une vue soit un controller. La syntaxe de ce fichier est encore une fois du JSON. Plus de détails sont disponibles dans la [documentation du Framework](https://sailsjs.com/documentation/concepts/routes).

<!-- Internally, Sails used [`sails-generate@1.16.8`](https://github.com/balderdashy/sails-generate/tree/v1.16.8/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->


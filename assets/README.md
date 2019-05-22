## Assets :
Les assets sont les fichiers supplémentaires auxquels les clients ont besoin d'accéder.  
Le framework (SailsJS) fait que les différents fichiers placés ici sont __automatiquement__ inclus dans le fichier `/views/layout/layout.ejs` entre les balises `<!-- STYLE -->` et `<!-- STYLE END -->` pour les fichiers `.css` et entre les balises `<!-- SCRIPT -->` et `<!-- SCRIPT END -->` pour les fichiers `.js`  
Le chemin pour accéder à ces fichiers depuis les pages HTML EST `/*Dossier dans assets*/*nom du fichier*`. Par exemple, une image nommée `welcome.png` aura comme chemin `/images/welcome.png`. Le fonctionnement est le même pour les autres dossiers mais l'intégration des fichiers qui les composent se fait automatiquement.   

Les différents dossiers ont chacun un but :  
+ `dependencies` :  
`dependencies` contient les fichiers (JavaScript ou CSS) que le client appelle en priorité.  
Par exemple, pour certains éléments de la bibliothèque Bootstrap il faut obligatoirement que JQuery soit déjà chargé. Dans ce cas il faut placer JQuery dans le dossier `dependencies` et Bootstrap dans le dossier `js` "normal" pour garantir le bon ordre de chargement.    
+ `images` :  
`images` contient les images à utiliser dans le site. Les images dans ce dossier sont accessibles dans toutes les pages.
+ `js` :  
Ce dossier contient les fichiers Javascript (`.js`) que le client va charger. Les modifications étant écrites dans le layout, les fichiers `.js` sont chargés dans toutes les pages.  Pour charger un fichier `.js` dans une seule page le plus simple est le copier/coller le code JavaScript au pied de la page.  
Il est possible sinon de créer un nouveau dossier dans le dossier `assets` que SailsJS ne prendra pas en compte et n'intègrera pas automatiquement.
+ `styles` :  
Ce dossier contient les fichiers CSS (`.css`) que le client va charger. Le même détail qu'avec les fichiers `.js` (chargés à toutes les pages) et à noter ici aussi.  
Le même contournement est possible.
+ `templates` :  
Ce dossier contient des templates. Elles n'ont pas été utilisées pour ce projet.  
Elles permettent globalement de fournir un page principale que demandent certains framework comme Backbone, Angular, Ember, ou Knockout (entre autres...) ou plus globalement les [SPAs](https://en.wikipedia.org/wiki/Single-page_application)  

Le fichier `favicon.ico` est tout simplement l'icone du site, qui s'affiche dans les onglets à côté du titre HTML (balises `<titre></titre>`)  
Pour plus de documentation : [La documentation sur les models de SailsJS](https://sailsjs.com/documentation/concepts/models-and-orm/models)

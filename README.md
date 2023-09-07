# Bagdad

Le miscroservice backend du domaine commerce de Datafirst.

## Setup du projet SANS DOCKER:

Se référer à la doc de dubai.

## Scripts

- dev: lancer le serveur en développement
- start: lancer le serveur en production
- build: build les fichiers pour la prod
- test: lance les tests
- test:watch: relance les tests à chaque fois qu'il y a une modification
- test:coverage: lance les tests et calcule le coverage

## Architecture serveur métier :

./index.ts : point d'entrée de l'application, se connecte à la bdd et lance le serveur
./config : dossier contenant les configurations du serveur, de sequelize et autres librairies
./controllers : dossier contenant les controllers
./dao : dossier contenant les DAO
./middlewares : dossier contenant les middlewares pour express
./models : dossier contenant les models sequelize
./routes : dossier contenant les routes pour express
./utils : dossier contenant les fonctions utilitaires

## Les routes

### Comment les utiliser ?

Vous trouverez les roots dans le dossier src/routes/
Chaque route contient une doc swagger qui est accessible par la route /api-docs

Mais pour résumer, voici les routes principales :
dans /projects
projects/var
projects/hors-var
projects/lead
projects/cloud
projects/opportunities

Pour l'instant il est obligatoire de mettre le paramètre team, mais bientôt seul le pseudo de l'ic ("ic=nicolas") sera nécessaire.

Pour récupérer les ics:
/ic

### Architecture

Chaque route est assignée à une route et un controller :
router.route('route').get(controller)
La route est l'URL qui permet d'accéder à la route, et le controller est la fonction qui sera appelée lorsque l'utilisateur accèdera à cette route.
Typiquement un controller sera une méthode qui renvoie un json mettant en forme le résultat d'une requête sequelize, nous allons détailler le fonctionnement de Sequelize ci-dessous.

## Sequelize

### Résumé

Sequelize est utilisé pour manipuler la BDD BI MySql. On peut s'en servir pour directement générer une BDD de plusieurs technologies, mais ici nous avons utiliser un script pour générer le model de la BDD existante (_script présent ci-dessous_). Grâce à ces models objets, on peut réaliser des requêtes équivalentes à SQL et les renvoyer au client souhaitant récupérer les données.

### DAO

Requêtes SQL élémentaires pour récupérer les données.
On réalise une classe par table, et on définit les méthodes qui permettent de récupérer les données. Ces méthodes sont censée être assez souples pour être utilisées plusieurs fois par le controller.

### Controllers

Utilise les DAO pour les traiter en appliquant la logique métier et les différentes vérifications, le but est de renvoyer les bonnes données quand un client attaque l'URL correspondant.

### Models

Les modèles sont la représentation "OBJET JS" des BDD. Dans le serveur BI, il y a plusieurs BDD.
Chaque BDD est représenté par un dossier à son nom. Chaque BDD contient toutes les tables sous forme de fichier js contenant une Classe. Cette classe est un model (elle extend model) et donc on peut y retrouver chaque colonne de la BDD avec le type de donnée etc.
Init-models.js est utilisé pour lister toutes les tables et faciler leur "requêtage".

## Pour la petite histoire :

L'index se connecte à la base de donnée via la configuration sequelize et fait écouter le serveur sur le port 5000. L'utilisateur attaque le serveur sur la route 'performances?year=2021&week=23'. Le serveur appelle la méthode du controller associée à cette route. Le controller va vérifier si les données demandées ont été enregistrées dans le cache. Si oui, il renvoie juste ce qu'il y a dans le cache, sinon, il exécute la logique métier associée à la route. Il va appeler les méthodes du DAO pour aller chercher les données dans la base de donnée, puis il va retourner les données attendues, tout en les enregistrant dans le cache.

## Auto-génération des Models en ES6 Modules :

Pour générer les models Sequelize, utilisés par les DAO pour effectuer des requêtes sur les tables de la base de données, on utilise le module node "sequelize-auto" qui permet de générer tous les models d'une base de données grâce à une commande.
Pour utiliser la commande ci-dessous, il faut remplacer les variables d'environnement par les vraies valeurs et le nom de la base de données par la base de données à importer.

```bash
node_modules\.bin\sequelize-auto --output "./models/BI_REPORTS" --database "BI_REPORTS" --host "MYSQL_DB_HOST" --user "MYSQL_DB_USERNAME" --port MYSQL_DB_PORT --pass "MYSQL_DB_PASStrueWORD" --dialect "mysql" --lang esm --views
```

node_modules\.bin\sequelize-auto --output "./models/COMPUFIRST_2" --database "COMPUFIRST_2" --host "10.52.8.200" --user "MYSQL_DB_USERNAME" --port MYSQL_DB_PORT --pass "MYSQL_DB_PASSWORD" --dialect "mysql" --lang esm

# Prérequis

- Comprendre l'anglais (la quasi-totalité des documentations et ressources sont en anglais)
- Comprendre comment fonctionne un site web
- Savoir utiliser JavaScript
- Connaitre les bases du runtime environment Node.js
- Connaitre les bases d'Express.js
- Avoir lu la documentation de Sequelize dans les grandes lignes
- Comprendre comment Redis fonctionne
- Connaitre les bases de Vue.js
- Connaitre les bases de Nuxt.js

# Ressources

## JS

[Documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[Les Bases](https://www.youtube.com/watch?v=XkvrHQNmigs&list=PLEagTQfI6nPPVSKoYo2p8Cf8eijcyz5t9)

## NodeJS

[Documentation](https://nodejs.org/en/docs/)

[Cours Intensif](https://www.youtube.com/watch?v=fBNz5xF-Kx4)

### Ressources additionnelles

[Redis et NodeJS](https://www.youtube.com/watch?v=oaJq1mQ3dFI)

[Exemple API](https://www.bezkoder.com/node-js-express-sequelize-mysql/)

## VueJS

[Documentation](https://vuejs.org/v2/guide/)

[Introduction Éclair](https://www.youtube.com/watch?v=nhBVL41-_Cw)

[Cours intensif](https://www.youtube.com/watch?v=qZXt1Aom3Cs)

### Ressources additionnelles

[Fetch une API](https://www.youtube.com/watch?v=m-MAIpnH9ag)

## Différents modes de rendu

[Server Side Rendering vs Client Side vs Hybride](https://docs.google.com/document/d/1Y_XI3f657rB-cTRxKMX8otqSdi_-eVHqZEwANhrORcI/edit?usp=sharing)

### Ressources additionnelles

[Server Side, Static Rendering et Hydratation](https://docs.google.com/document/d/1_oPURjOa-EzYOarrtapkpbTz4h8i)

## Nuxt

[Documentation](https://fr.nuxtjs.org/docs/2.x/get-started/installation)

[Cours intensif](https://www.youtube.com/watch?v=Wdmi4k7sFzU)

### Ressources additionnelles

[Chaine sur Nuxt](https://www.youtube.com/c/DebbieOBrien/videos)

## Sequelize

[Documentation](https://sequelize.org/master/manual/getting-started.html)

### Ressources additionnelles

[Exemple API](https://www.bezkoder.com/node-js-express-sequelize-mysql/)

## Redis

[Introduction éclair](https://www.youtube.com/watch?v=G1rOthIU-uo)

[Redis et NodeJS](https://www.youtube.com/watch?v=oaJq1mQ3dFI)

[Cours intensif](https://www.youtube.com/watch?v=jgpVdJB2sKQ)

[Documentation](https://redis.io/documentation)

## ChartJS

[Doc VueChartJS](https://vue-chartjs.org/guide/)

[Doc ChartJS](https://www.chartjs.org/docs/latest/)

## Ressources additionnelles globales

[Comparaison des frameworks rapide](https://docs.google.com/document/d/1vAihdDVf_TWai9LdgvjL12LI0Zcooc2CjxNOXgzVizI/edit?usp=sharing)

[Comparaison des frameworks détaillée](https://www.youtube.com/watch?v=cuHDQhDhvPE)

[SEO](https://docs.google.com/document/d/13XK0czTDufwwxoyYSybPnIGbhHYa7IF8GuTWQBY4fcg/edit?usp=sharing)

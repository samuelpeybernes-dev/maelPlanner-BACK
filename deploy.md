# Déployer les applications :)

## Pré-requis

1. Avoir pm2 d'installé en global sur sa machine.

   - npm i -g pm2@latest

2. Avoir une key ssh.

   - ssh-keygen -t rsa -b 4096 -C your.email@compufirst.com
   - Entrer un mot de passe à la clé ssh.

3. Placer la .pub key sur le serveur (demander à Léo).

4. Tester que la connexion ssh fonctionne.

   - ssh -t batchoperator@10.52.8.206

5. Ajouter le remote au repository sur le serveur dans le repository local.
   - git remote add prod batchoperator@10.52.8.206:/home/batchoperator/gitlab-wrk/datafirst/deploy-NOM_DU_MS.git
   - Tester avec git ls-remote prod.

## Deploy

1. Avoir commit sur la dev et avoir fini de bosser sur changements qu'on veut apporter en prod.

2. Tester que la version produite fonctionne avec les autres microservices à jour de la version actuellement en prod.
   On teste toujours en lançant les ms des backend first puis le front.

   Pour chaque microservice externe au projet à deploy :

   - Switch sur la main : git switch main
   - Build à partir de la main : npm run build
   - Lancer le projet avec pm2 : pm2 start

   Pour le ms à deploy :

   - Rester sur la dev.
   - Build à partir de la dev : npm run build
   - Lancer le projet avec pm2 : pm2 start

3. Quand tous les ms fonctionnent ensemble, merge la dev dans la main et push sur la prod.

   - git switch main
   - git merge dev
   - git push -u prod main

   Ne pas oublier de push sur origin.

   - git push origin

## Ajouter un microservice au serveur

1. Se connecter au serveur avec ssh.

   - ssh batchoperator@10.52.8.206

2. Ajouter le dossier qui va contenir le projet.

   - cd gitlab-wrk/datafirst/
   - mkdir NOM_DU_MS
     ex: mkdir bagdad

3. Initialiser l'empty git repository.

   - git init --bare deploy-NOM_DU_MS.git
     ex: git init --bare deploy-bagdad.git

4. Ajouter la première partie du hook de déploiement auto.

   - cd deploy-NOM_DU_MS.git/hooks
     ex: cd deploy-bagdad.git/hooks
   - nano post-receive
   - Coller la première partie du hook en modifiant les paths avec le nom du nouveau ms.
     CTRL+O puis ENTER pour enregistrer
     CTRL+X pour quitter l'édition du fichier avec nano.

5. Rendre le script exécutable.

   - chmod +x /home/batchoperator/gitlab-wrk/datafirst/deploy-NOM_DU_MS.git/hooks/post-receive

6. Ajouter le remote au repository sur le serveur dans le repository local.

   - git remote add prod batchoperator@10.52.8.206:/home/batchoperator/gitlab-wrk/datafirst/deploy-NOM_DU_MS.git

7. Avoir commit sur la dev et avoir fini de bosser sur changements qu'on veut apporter en prod.

8. Ajouter le fichier de configuration pm2 à la racine du projet

   - pm2 init
     La commande génère un fichier ecosystem.config.js.
   - Remplacer le contenu du fichier par le fichier ecosystem.config.js ci-dessous.
   - Adapter le contenu du fichier.
   - git add .
   - git commit -m "Add ecosystem.config.js pm2's config file to root"

9. Tester que la version produite fonctionne avec les autres microservices à jour de leur version actuellement en prod.
   On teste toujours en lançant les ms des backend first puis le front.

   Pour chaque microservice externe au projet à deploy :

   - Switch sur la main : git switch main
   - Build à partir de la main : npm run build
   - Lancer le projet avec pm2 : pm2 start

   Pour le ms à deploy :

   - Rester sur la dev.
   - Build à partir de la dev : npm run build
   - Lancer le projet avec pm2 : pm2 start

10. Quand tous les ms fonctionnent ensemble, merge la dev dans la main et faire le premier push sur la prod.

    - git switch main
    - git merge dev
    - git push -u prod main

11. Vérifier que le premier push s'est bien passé côté serveur.

    - cd /home/batchoperator/gitlab-wrk/datafirst/NOM_DU_MS
    - ls -la
      Il faut que le dossier node_modules et que le dossier généré au build (dist ou .nuxt) soit dans la liste des dossiers et fichiers.
    - ajouter le .env

12. Mapper les ip

    - sudo iptables -A OUTPUT -p TCP --sport LE_NOUVEAU_PORT -j ACCEPT
    - sudo iptables -A INPUT -p TCP --dport LE_NOUVEAU_PORT -j ACCEPT
    - sudo iptables -A OUTPUT -p TCP --dport LE_NOUVEAU_PORT -j ACCEPT

13. Lancer le process du ms avec pm2

    - pm2 start

14. Tester si le process du ms s'est bien lancé en prod.

    - Tester les routes attendues.
    - Tester si les interactions avec les autres ms sont bien celles attendues.

15. Ajouter la partie 2 au hook post_receive

    - cd /home/batchoperator/gitlab-wrk/datafirst/deploy-NOM_DU_MS.git/hooks
    - nano post_receive
    - Coller la partie du de post_receive depuis les fichiers ci-dessous.
      A partir de ce point, le déploiement auto devrait être effectif.

16. Tester si le déploiement auto est bien fonctionnelle.
    - Faire une légère modification sur le projet en local.
    - git switch dev
    - git add .
    - git commit -m "Test auto deploy"
    - git switch main
    - git merge dev
    - git push -u prod main
    - Regarder si la modification a bien été prise en compte.

### Fichiers

**ecosystem.config.js** :

```javascript
module.exports = {
  apps: [
    {
      name: 'NOM_DU_MS',
      // path du fichier à lancer dans le dossier de build pour lancer l'app
      script: './dist/index.js',
    },
  ],
}
```

**post_receive** partie 1 :

```sh
#!/bin/sh

# Checkout files
git --work-tree=/home/batchoperator/gitlab-wrk/datafirst/NOM_DU_MS --git-dir=/home/batchoperator/gitlab-wrk/datafirst/deploy-NOM_DU_MS.git checkout -f main

# Install dependencies
cd /home/batchoperator/gitlab-wrk/datafirst/NOM_DU_MS
npm install

# Build app
npm run build
```

**post_receive** partie 2 :

```sh
# Restart app
pm2 reload NOM_DU_MS
```

## pm2

En cas de panique : **pm2 kill** (kill pm2 et tous ses process).

Lifecycle des process :

- pm2 start app_name
- pm2 restart app_name
- pm2 stop app_name
- pm2 delete app_name
- pm2 kill

Logs :

- pm2 logs
- pm2 monit

## Ressources

[Deploy to your server using Git](https://www.youtube.com/watch?v=H6UU7TsyrGs)

[How to fix "Permission denied" error](https://www.youtube.com/watch?v=ISeXMoEcG8Q)

[Deploy Nuxt using pm2](https://nuxtjs.org/integrations/deployments/pm2/)

[pm2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)

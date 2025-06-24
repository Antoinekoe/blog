# Blog Léger NodeJS/Express/Javascript

[![Screenshot du blog](public/images/screenshot-blog.PNG)]()

Un blog léger, rapide et responsive développé avec NodeJS, Express et Javascript. Permet de créer, modifier et supprimer des articles facilement.

## Fonctionnalités

- **Création d'articles :** Interface intuitive pour rédiger et publier de nouveaux articles.
- **Modification d'articles :** Possibilité de mettre à jour et de modifier les articles existants.
- **Suppression d'articles :** Suppression facile des articles obsolètes ou non pertinents.
- **Design Responsive :** Adapté à tous les types d'écrans (ordinateurs, tablettes, smartphones).
- **Backend NodeJS/Express :** API RESTful pour une gestion efficace des données.
- **Frontend Javascript :** Interface utilisateur dynamique et réactive.

## Technologies utilisées

- **Backend :**
  - NodeJS
  - Express
  - EJS
- **Frontend :**
  - Javascript
  - HTML
  - CSS
- **Autres :**
  - npm pour la gestion des dépendances
  - Git pour le contrôle de version

## Installation

1.  **Clonez le repository :**

    ```bash
    git clone https://github.com/Antoinekoe/blog.git
    cd [nom_du_repertoire_du_projet]
    ```

2.  **Installez les dépendances :**

    ```bash
    npm install
    ```

3.  **Démarrage du serveur :**
    ```bash
    nodemon index.js
    ```
    Le blog sera accessible à l'adresse `http://localhost:[PORT]` (remplacez `[PORT]` par le port configuré dans index.js ou par défaut, généralement 3000).

## Structure du projet

Blog/
├── node_modules/ # Dossier contenant les dépendances npm (non listé explicitement)
├── public/ # Dossier contenant les fichiers statiques (CSS, JS, images)
│ ├── images/ # Dossier pour les images
│ │ ├── bg-2.png
│ │ ├── bg.png
│ │ ├── blog.svg
│ │ └── screenshot-blog.PNG
│ └── styles.css # Fichier CSS (global, si utilisé)
├── views/ # Dossier contenant les vues (templates EJS)
│ ├── Articles/ # Dossier pour les vues des articles
│ │ ├── create.ejs # Vue pour créer un article
│ │ ├── delete.ejs # Vue pour supprimer un article
│ │ ├── index.ejs # Vue pour la liste des articles
│ │ └── modify.ejs # Vue pour modifier un article
│ ├── partials/ # Dossier pour les parties réutilisables des vues
│ │ ├── footer.ejs # Footer
│ │ └── header.ejs # Header
│ └── templateArticle.js # Fichier de template javascript pour un article
├── .gitignore # Fichier spécifiant les fichiers et dossiers à ignorer par Git
├── index.js # Point d'entrée de l'application (serveur Express, ou autre)
├── package-lock.json # Fichier de verrouillage des dépendances npm
├── package.json # Fichier de configuration npm
└── README.md # Ce fichier

## Comment contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez suivre ces étapes :

1.  **Fork le repository.**
2.  **Créez une branche pour votre fonctionnalité (feature) ou correction de bug (bugfix) :**

    ```bash
    git checkout -b feature/ma-nouvelle-fonctionnalite
    # ou
    git checkout -b bugfix/correction-bug
    ```

3.  **Effectuez vos modifications et commitez-les avec des messages clairs et descriptifs.**

4.  **Poussez votre branche sur votre fork :**

    ```bash
    git push origin feature/ma-nouvelle-fonctionnalite
    ```

5.  **Créez une pull request (PR) vers la branche `main` du repository original.**

## Points d'amélioration potentiels (TODO)

- Ajouter la possibilité de catégoriser les articles.
- Implémenter un système d'authentification pour la gestion des articles (pour l'instant, tout le monde peut créer, modifier, supprimer).
- Optimiser les performances (par exemple, avec la mise en cache).
- Ajouter des tests unitaires et d'intégration.
- Implémenter un système de commentaires.
- Connecter le blog à une BDD.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

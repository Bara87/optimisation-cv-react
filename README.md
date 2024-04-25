## Récupération du dépot
- Ouvrez votre terminal.
- Utilisez la commande suivante pour cloner le dépôt vers votre machine locale :
  
  ```
  git clone https://github.com/Bara87/optimisation-cv-react
  
  ```

## Prérequis

- **Node.js et npm** : Assurez-vous d'avoir Node.js installé sur votre système. Node.js inclut npm (Node Package Manager), qui est nécessaire pour installer et gérer les dépendances du projet.

## Versions recommandées

- **Node.js** : Utilisez la version 21.2.0 Vous pouvez télécharger Node.js à partir de son site officiel : [nodejs.org](https://nodejs.org/).
- **npm** : npm est généralement installé avec Node.js et sera automatiquement mis à jour avec une version compatible lors de l'installation de Node.js.

## Installation du projet

1. **Création du projet React** :
   - Ouvrez votre terminal.
   - Installez React et ReactDOM :
     
     ```
     npm install react react-dom
     ```
     

2. **Installation de Bootstrap** :

   - Utilisez npm pour installer Bootstrap et les dépendances nécessaires :
     ```
     npm install bootstrap
     ```

3. **Importation de Bootstrap** :
   - Dans le fichier index.html importer bootsrap en important les deux lignes suivantes
     
     ```
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384- 
     rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
     ```

     
     ```
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" 
     crossorigin="anonymous"></script>
     ```
     

4. **Démarrage du serveur de développement** :
   - Après avoir effectué les étapes précédentes, vous pouvez démarrer le serveur de développement en utilisant la commande :
     ```
     npm start
     ```
     Cette commande lancera votre application React dans un navigateur et ouvrira automatiquement une fenêtre avec l'adresse `http://localhost:3000/` où vous pourrez voir votre projet en cours de développement.

N'hésitez pas à explorer le contenu du projet et à contribuer si vous le souhaitez !

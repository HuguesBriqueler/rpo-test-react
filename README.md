# RPO-Test-React

Frontend - ReactJS CRUD Application </br>

## L'énoncé du sujet :

</br>
Ecrivez une petite application web en ReactJS gérant une liste de
personnes :</br>
● Une personne possède ces attributs : identifiant, prénom, nom et
adresse email</br>
● Lister les personnes par le nom de famille</br>
● Pouvoir modifier une personne de la liste</br>
● Pouvoir supprimer une personne de la liste</br>
● Côté backend, un service « fake » sera suffisant. Les requêtes et les
réponses devront être au format JSON.</br>
</br>
Conseils : essayez de suivre l'approche TDD en documentant vos étapes de
développement et expliquez les décisions que vous avez prises.
</br>

## Analyse :

</br>
L'énoncé du sujet est très ouvert et très simple.</br>
Qu'attend t-on de mon travail ?</br>
- Une application single page, ou l'utilisation de React Router ?</br>
- L'utilisation de l'API de contexte, de Redux ou une simple gestion de state ?</br>
- Que signifie ce service fake coté backend ?</br>

  > Les données doivent elles persister ?</br>
  
  > Dois-je mettre en place un 'monkey patch' sur la méthode fetch ?</br>
  
  > Puis-je utiliser Firebase ?</br>

</br>
L'approche TDD souffre de toutes ces interrogations.</br>
</br>

## Les choix :

</br>
Après reflections, et quelques essais, je suis arrivé à ces choix :</br>
-  Une application single page, sans utilisation de React Router.</br>
-  Un seul composant 'Card', qui gérera les données et les actions.</br>
-  L'utilisation d'un fichier de data au format JSON, placé dans le dossier public.</br>
-  L'interrogation de ce fichier fakeData.json, via une requête fetch, pour initialiser le state de l'application.</br>
-  Une gestion des tests de rendu reduite au seul composant 'Card'.</br>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

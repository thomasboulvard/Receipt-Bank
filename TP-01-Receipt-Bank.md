# 🎓 TP - 01 Receipt Bank

Votre objectif pendant ce TP est d'atteindre les objectifs fonctionnels.

Vous avez la capacité de vous exprimer en `HTML`, `CSS`, `d'utiliser des librairies`, vous disposez d'un `environnement de développement` et avez découvert `JavaScript` en étudiant les `variables`, les `types`, le `DOM`, les `fonctions` et les `évènements`.

___

## 🐥 Précedement

> Vous avez décidé d'une thématique de projet et vous avez découvert des syntaxes vous permettant de vous rapprocher de l'objectif du projet.

Vous travaillez à implémenter le rendu graphique en pur JavaScript pour obtenir une Single Page Application.

___

## 🦆 Maintenant

Vous allez découvrir:
* Accéder à la camera
* Afficher le flux vidéo
* Capturer une image

___

## 👨🏻‍💻 Camera

> Activer la camera

[@see Web/API/MediaDevices/getUserMedia](https://developer.mozilla.org/fr/docs/Web/API/MediaDevices/getUserMedia)

Vous pouvez demander le flux vidéo en fonction de contraites.

```js
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
  /* use the stream */
})
.catch((err) => {
  /* handle the error */
});
```

La première étape consiste à modifier votre DOM en fonction de l'acceptation ou du refus de l'utilisateur.

* 📝 Quand le stream est obtenu afficher un bouton de capture à la place du bouton d'activation de la camera si présent

* 📝 Quand l'utilisateur refuse l'activation de la camera, proposez un bouton pour relancer l'opération au click

___

## 👨🏻‍💻 Vidéo

> Afficher le flux vidéo

Une fois le stream obtenu vous voulez afficher son flux vidéo.

[@see Web/API/MediaDevices/getUserMedia#utilisation](https://developer.mozilla.org/fr/docs/Web/API/MediaDevices/getUserMedia#utilisation_de_la_nouvelle_api_dans_les_navigateurs_plus_anciens)

Vos navigateurs implémentent la camera depuis un long moment et vous n'avez pas à vous méfier de sa compatibilité, par contre la balise vidéo possède soit un attribut src soit un attribut srcObject en fonction des navigateurs.

Intéressez-vous aux structures conditionnelles et aux opérateurs logiques.

[@see JavaScript/wiki/03#-conditions](https://github.com/seeren-training/JavaScript/wiki/03#-conditions)

```js
if ("srcObject" in video) {
    video.srcObject = stream;
} else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(stream);
}
```

* 📝 Affichez la vidéo correspondant aux flux vidéo obtenu
* 📝 Vérifiez la compatibilité de votre script sur différents navigateurs

___

## 👨🏻‍💻 Capture

> Capturer une image

Une fois la vidéo affichée, vous souhaitez en capturer une image.

L'opération est délicate et passe par un peu de bidouille. L'idée est de créer une balise canvas qui possède la capacité de faire un rendu graphique. Il faut créer la balise et son contexte 2D pour pouvoir dessiner une image à partir de la vidéo, puis pour obtenir la source de l'image au format base64. Une fois la source obtenue vous pouvez l'affecter à l'attribut src d'une image pour l'afficher. Cette image n'est pas présente sous forme de fichier mais uniquement dans la mémoire au format base64.

[@see Web/API/WebRTC_API/Taking_still_photos](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos)

```js
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
canvas.getContext('2d').drawImage(
    video,
    0,
    0,
    video.videoWidth,
    video.videoHeight
);
img.src = canvas.toDataURL();
```

* 📝 Afficher l'image en utilisant canvas pour l'obtenir

___

## 🐧 Next

Vous découvrirez:
* L'obtention des informations d'une image
* La logique métier

___

## 👨🏻‍💻 Informations

> Récupérer ses informations

Vous avez plusieurs solutions pour récupérer les informations textuelles d'une image. Soit vous utilisez un service distant qui le fait pour vous, soit vous installez un package.

[@see package/tesseract](https://www.npmjs.com/package/tesseract.js)

```js
import Tesseract from 'tesseract.js';
 
Tesseract.recognize(
  'https://tesseract.projectnaptha.com/img/eng_bw.png',
  'eng',
  { logger: m => console.log(m) }
)
.then(({ data: { text } }) => {
  console.log(text);
});
```

* 📝 Récupérez les informations de votre image

___

## 👨🏻‍💻 Logique

> Structure de données

C'est mainteant que vous rentrez dans la logique de votre projet: qu'est-ce qu'une facture pour le projet?

* 📝 Proposez un objet qui identifie la structure d'une facture

```js
const salary = {
    age: null,
    firstname: null,
    lastname: null
};
```

Vous devez analyser le texte de votre image et la mapper sur votre structure de donnée. Vous aurez besoin de multiples tests, de patience et d'apports syntaxiques pour ce faire.

Vous devrez certainement analyser votre texte ligne par ligne et avez besoin maintenant du type tableau et des boucles.

[@see seeren-training/JavaScript/wiki/03#-itérations](https://github.com/seeren-training/JavaScript/wiki/03#-it%C3%A9rations)

Les données peuvent être regroupées dans un type de données: le tableau.

```js
const firstnamelist = [
    "John",
    "Bill",
    "Joe",
];
```

Il est possible de parcourir ce type pour répéter des instructions pour chacun de ses éléments.

```js
firstnamelist.forEach((firstname) => {
    console.log(firstname);
});
```

* 📝 Bouclez sur vos informations

Il faudra ensuite effectuer des tests de valeur pour savoir si une information correspond à un format attendu par votre structure. Vous devez étudier les expressions régulières et les tests logiques introduits précédemments.

Il est possible de vérifier si une information correspond à un format.

[@see Web/JavaScript/Reference/Global_Objects/String/match#exemples](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match#exemples)


```js
const str = 'Pour plus d\'informations, voir le chapitre 3.4.5.1';
const pattern = /(chapitre \d+(\.\d)*)/i;
const resultat = str.match(pattern);

console.log(resultat);

// logs ['chapitre 3.4.5.1', 'chapitre 3.4.5.1', '.1']
```

Il faudra alors mettre en place les motifs qui permettent de capter l'information qui vous interesse. Vous devez étudier en profondeur cette thématique. En priorité, les délimiteurs et quantificateurs puis classe de caractères. Parcourez les liens du premier tableau du lien suivant.

[@see Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions#utiliser_des_caract%C3%A8res_sp%C3%A9ciaux)

Pour essayer vos expressions, utiliser un service en ligne.

[@see regex101.com](https://regex101.com/)

* 📝 Capturez les informations textuelles et affectez-les à votre structure déterminée précédemment.

___

## 🕕 Manage your time

C'est une première étape à franchir avant de sauvegarder vos structues de données, de proposer leur visualisation, export et autre exploitation...
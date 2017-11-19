---
type: guide
user: Lyghur
date: '2004-06-18T15:07:37.000Z'
lastmod: '2004-07-13T12:51:47.000Z'
---

# Introduction

ZSnes est un émulateur de qualité qui vous permettra de jouer
à l'ensemble de la ludothèque SNES. Il n'est pas bien compliqué à utiliser mais
si jamais vous débutez, ce tutorial pourra vous aider. Je ne rentre pas dans
les détails mais propose juste une bonne configuration avec laquelle vous pourrez
jouer rapidement sans vous prendre la tête.

# Avant de commencer

## Video

Avant de commencer à jouer, il vaut mieux configurer la vidéo, le son et les contrôlesdans `Config -> Video`, choisissez les options suivantes : ![super nes nintendo zsnes](/emulators/zsnes/configure/zsnes_video_config.png)

Pour la résolution, vous pouvez mettre n'importe laquelle mais, pour que le
jeu soit fidèle à l'original, choisissez de préférence un rapport de 4/3 et
un mode "**DR** Full". **D** indique que l'image ne sera pas déformée
(un carré ressemblera à un carré et non à un rectangle) et le **R** indique
que vous pouvez utiliser les filtres avancés (ici, le _Super 2xSAI Engine_)
qui rendent l'image plus belle.

## Contrôles

Dans `Config -> Input #1`, cliquez sur _Set Keys_ et entrez chaque
touche une par une. Si vous jouez au clavier, vous pouvez par exemple choisir
Q, S, W et X pour les boutons Y, X, B et A de la SNES comme ci-dessous :
![super nes nintendo zsnes](/emulators/zsnes/configure/zsnes_input_device.png)

ZSnes gère aussi les manettes. Si vous en avez une, assignez chaque bouton
de la même façon. Pour retrouver le gameplay de la SNES, vous pouvez les disposer
en vous inspirant du pad SNES :
![super nes nintendo zsnes](/emulators/zsnes/configure/zsnes_pad_snes.jpg)

## Son

Dans `Config -> Sound`, sélectionnez les paramètres suivants :
![super nes nintendo zsnes](/emulators/zsnes/configure/zsnes_sound_config.png)

Vous pouvez aussi activer le son surround si vous avez de bons hauts parleur.
Ne pas oublier non plus de cocher une méthode d'interpolation (n'importe laquelle)
sinon le son part en \*ouille.

# Pendant le jeu

## Lancer un jeu

Dans `Game -> Load Game`, choisissez
votre jeu. Pour économiser de la place sur votre disque dur, n'oubliez pas
que vous pouvez compresser les jeux en ZIP. Ne faites pas attention aux options
en bas (Force NTSC, etc.), elles ne servent jamais.
![super nes nintendo zsnes](/emulators/zsnes/configure/zsnes_load_game.png)

## Quelques trucs

Quelques trucs plus ou moins indispensables à connaître :

* _Pour sauvegarder_ - Pour faire une sauvegarde rapide pendant le jeu, appuyez sur **F2**.
* _Pour charger_ - Pour charger la dernière sauvegarde, appuyez sur **F4**.
* _Avance rapide_ - Pour accélérer le déroulement du jeu appuyez sur **²** (le petit 2 en haut à gauche du clavier). Pratique pour faire défiler les longs dialogues ou les combats à répétition dans les RPGs !

# L'éditeur de combos

L'éditeur de combo permet d'enregistrer des séquences de touches puis d'exécuter
ces séquences pendant le jeu à l'aide d'un seul bouton. Cela permet par exemple
d'enregistrer les coups de spéciaux de jeux de baston tel que Street Fighter
II ou Dragon Ball Z pour pouvoir les sortir plus facilement. Bref, vous avez
du mal à sortir le Marteau Pilon de Zangief ? Vous tenez _absolument_ à
jouer avec Zangief ? (Parce que faut le vouloir quand même ^^) Eh bien l'éditeur
de combos est fait pour vous !
Pour commencer, un petit survol des options disponibles :
![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled.png)

Dans le cadre, à gauche, c'est la liste des combos actuellement enregistrées.

* **Clear** : Remet à 0 l'éditeur (sauf la liste de combos).
* **Add** : Rajoute la combo à la liste.
* **Replace** : Remplace la combo sélectionnée par une nouvelle combo.
* **Delete** : Supprime la combo sélectionnée.
* **Description** : Nom de la combo.
* **Key** : La touche à laquelle vous associez la combo. Cela peut être une touche du clavier ou un bouton de la manette.
* **P\#** : Indique que la combo sera utilisable par le joueur \#.
* **\> = last ** : Permet d'inverser la combo, c'est-à-dire que la gauche devient la droite et la droite devient la gauche.
* **Game Specific** : Cochez cette case si vous voulez que la combo ne soit disponible que pour le jeu en cours.
* **Combination Keys** : La séquence de touches pour la combo en cours.
* **Press+Rel** : Appuie puis relâche la touche aussitôt.
* **Press only** : La touche est appuyée et maintenue.
* **Rel only** : La touche est relâchée (si elle était appuyée).
* **Frame delay** : Ajoute un délai de 1, 2, 3, 4, 5 ou 9 frames.
* **Second delay** : Ajoute un délai en secondes.
* **Del** : Efface la dernière touche ou le dernier délai dans la liste "combination keys"

Pour que ce soit plus clair, voici un exemple. On va enregistrer le fameux Shoryuken
(Dragon Punh) de Ryu dans Street Fighter II Turbo. Pour rappel, ce coup se déclenche
lorsque l'on fait Droite / Bas / Bas + Droite / Y.

Tout d'abord, il faut donc entrer le nom de la combo (ici Shoryuken) et choisir
la touche à laquelle on va associer la combo (ici "Q"). On coche également p\#1
pour que cette combo soit utilisable par le premier joueur. Par contre, pas
la peine de cocher "Game Specific" -- au contraire puisque cette combo pourra
être réutilisée dans plusieurs jeux de baston ! (dont tous les Street Figher
mais aussi les Dragon Ball et Mortal Kombat).
![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-1.png)

On peut maintenant entrer la combo. Pour cela, il faut choisir chaque touche
une par une et _important_ mettre un délai d'une frame entre chaque touche.
En effet, sans ce délai, c'est comme-ci toutes les touches étaient appuyées
en même temps au lieu de former une séquence.

La combo commence donc par la flèche droite. Sélectionnez la touche Droite dans
Press + Rel (la touche droite sera donc enfoncée puis relachée aussitôt). Après
quoi ne pas oublier d'ajouter un délai d'une frame avant d'enregistrer la touche
suivante ! Il faut ensuite enregistrer la touche "bas" de la même façon que
pour la touche précédente, avec toujours le délai d'une frame.

![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-3.png)

![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-4.png)

---


Pour la diagonale, c'est un peu différent puisqu'ici il s'agit d'appuyer simultanément
sur bas et droite. Pour cela, ajoutez simplement les deux touches (toujours
dans Press + Rel) mais cette fois sans mettre de délai entre les deux. Comme
il n'y a pas de délai, c'est comme si les deux touches étaient appuyées en même
temps (image de gauche). Finalement, il reste à ajouter le bouton Y en mettant
un délai juste avant (image de droite).

![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-5.png)

![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-6.png)

---


C'est terminé ! La combo pourra maintenant être déclenchée en appuyant sur le
bouton Q. Néanmoins cette combo ne pourra être utilisée que lorsque le personnage
se trouvera à la gauche de l'écran. Lorsqu'il est à droite, il faudrait faire
Gauche / Bas / Bas-Gauche / Y, c'est-à-dire l'inverse de la combo que l'on vient
d'enregistrer. Cette combo inversée doit également être assignée à un bouton
du clavier ou de la manette -- voici comment procéder.

Tout d'abord, sélectionnez la combo que vous venez d'ajouter puis cliquez sur
Add. La combo va maintenant apparaître en double dans la liste de combos. Sélectionnez-la
puis cochez "\> = last " pour inverser la combo et, dans "Key", changez la touche
(ici "W"). Finalement cliquez sur Replace pour mettre à jour la combo.
![super nes nintendo zsnes](/emulators/zsnes/configure/Untitled-10.png)

Et voilà, dorénavant, il suffira d'appuyer sur Q pour déclencher le Dragon Punch
lorsque Ryu est à gauche et sur W lorsqu'il est à droite. Il ne vous reste plus
qu'à lancer le jeu et à essayer les combos (sur ce bon vieux Zangief par exemple :)

![super nes nintendo zsnes](/emulators/zsnes/configure/sft21.png)

![super nes nintendo zsnes](/emulators/zsnes/configure/sft22.png)

---


# Pour finir

ZSnes dispose de nombreuses autres fonctions qui permettent une utilisation plus avancée du programme. Sans trop détailler, vous trouverez entre autres :

* Un [éditeur de codes](/guides/hexacheats/) dans le menu _Cheat_.
* La possibilité de sauvegarder des films de vos parties dans _Misc -\> Movie Open _(très simple d'utilisation).

---
type: guide
user: Julio
date: '2004-06-18T15:06:00.000Z'
lastmod: '2004-08-15T18:40:28.000Z'
---

## I - Quelques mots sur Snes9x

Snes9x est un émulateur Super Nintendo, et pas nimporte lequel : il est tout simplement considéré comme le meilleur,
avec Zsnes. Tous les deux sont en fait complémentaires. En effet, Snes9x émule par exemple Star Ocean, que Zsnes némule pas,
à cause de la présence dune puce particulière dans la cartouche de ce jeu. Peu gourmand en ressources et performant, doté dune
compatibilité impressionnante, Snes9x fera revivre la Super Nintendo sur votre PC !

## II - Ce quil vous faut pour jouer avec Snes9x

Pour profiter des joies de la Super Nintendo, vous n'aurez besoin que de très peu de choses, en fait une seule : l'archive de
Snes9x, que vous pourrez naturellement trouver sur Emu Nova. Il vous suffit dextraire larchive grâce à Winzip, Winrar ou Winace
dans un répertoire quelconque. Voici ce que vous devriez obtenir :
![fichiers snes9x](/emulators/snes9x/configure/pack.png)

Cliquez maintenant sur Snes9x.exe pour lancer lémulateur. Cest parti pour configurer la bête afin den tirer le meilleur !

## III - Configuration de lémulateur

On va procéder par étapes dans la configuration de Snes9x, suivez le guide (et ne loubliez pas à la fin de la visite ^^).

### Configuration Vidéo

Longlet « options » que vous pouvez voir sur le screen ci-dessous vous permet de configurer tout ce qui concerne
la vidéo et laffichage.
![snes9x](/emulators/snes9x/configure/options.png)

Cliquez tout dabord sur « configuration de laffichage », vous verrez alors apparaître le menu suivant :
![snes9x](/emulators/snes9x/configure/affichage.png)

Dans la case « général », vous disposez de différents options :

* **Plein écran**, comme son nom lindique, permet de joueren plein écran !
* **Mode 7 Bi-linéaire** sert à ????
* **Montrer le taux dimages** vous permet dafficher le nombre dimages par seconde.
* **Etirer limage** étirera artificiellement limage pour quelle colle au mieux à vorte écran, ce qui peut légèrement la déformer.

Ensuite, dans la zone « image SNES », gardez cochées les cases « rendu en 16 bits » et « transparence »,
afin dobtenir le rendu le plus fidèle possible.
La zone « paramètres daffichage » vous permettra de choisir la résolution qui vous semblera la plus adaptée.
Une fois choisie, vous pouvez soit tester cette résolution avec « mode test », ce qui vous permettra de voir si votre
écran supporte la résolution choisie, soit directement en cliquant sur « choix mode ». Un re-démarrage de lémulateur
pourra savérer nécessaire. Je vous conseille de cocher la case « activer le double tampon », afin déviter des problèmes
de synchronisation de limage. Ainsi, vous bénéficierez du maximum de fluidité.

Ensuite, vous pouvez voir longlet **« paramètres du cache SPC7110 »**, je vous conseille de ne pas
y toucher ! Il vous permet de ne charger en mémoire quune partie de la ROM à laquelle vous allez jouer. Enfin vient
longlet **« configuration du pack GFX »**, qui sert à configurer les packs graphiques nécessaires pour
faire tourner certains jeux particuliers, comme Star Ocean. Néanmoins, il est étrange de constater que l'on peut jouer à ces jeux sans ces packs...Si quelqu'un connait leur véritable utilité, qu'il me contacte par email, je le remercie d'avance ;). En cliquant sur cet onglet, vous verrez apparaître ce menu :
![snes9x](/emulators/snes9x/configure/gfx.png)

Où figurent les noms de tous les jeux bénéficiant de ce système de packs. Cliquez ensuite sur « parcourir » pour
donner le chemin daccès sur votre disque dur. Ici encore, si quelqu'un sait où télécharger ces fameux packs, je suis preneur ^^

Quelques options concernant laffichage sont accessibles plus facilement depuis longlet du menu général « fenêtre »,
où vous pourrez choisir votre langue, ce qui ne savérera pas utile étant donné que la version de Snes9x que nous proposons
sur Emu Nova est déjà en Français ;o) Vous pourrez aussi passer en plein écran, cacher la barre de menu, ou encore étirer limage.
Cela vous évite davoir à aller dans le menu de configuration graphique.

### Configuration sonore

Cliquez tout simplement sur longlet "son", présent dans la barre de menu de Snes9x, visible sur le screen ci-dessous,
afin de faire apparaître le menu permettant une configuration sonore complète. En fait, il s'agit d'une sorte de "menu rapide"
puisqu'il permet de régler la plupart des options sonores de manière simple.
![snes9x](/emulators/snes9x/configure/son.png)

Vous pouvez régler le **taux d'échantillonnage (taux du playback)**, réglé par défaut à une valeur de
_48Khz_, ce qui permet un son de qualité. Baisser la qualité d'échantillonnage prendra moins de ressources CPU,
mais en revanche la qualité du son sera moindre. A vous de doser selon vos goûts ;o)

Le _sound buffer length_ est la taille du buffer sonore. Je vous conseille de mettre la même valeur pour ces deux
options sinon il risque d'y avoir des soucis, par exemple le son qui se coupe car l'émulateur n'aura plus de données sonores
à fournir...Plus cette durée est courte, meilleur sera le confort sonore.

Nous pouvons ensuite choisir les paramètres suivants :

* **Son en 16-bit** vous permet de coder votre son en 16 bit, je conseille de le laisser cocher pour une qualité optimale.
* **stereo** vous permet, devinez quoi...d'avoir le son stéréo ^^ Toujours plus agréable que du son mono.
* **reverse stereo** permet d'inverser le rôle de chaque baffe lors de l'utilisation du mode stéréo.
* **Interpolé** permet d'effectuer une interpolation du signal sonore, c'est-à-dire que l'émulateur reconstitue au mieux le signal d'après quelques points en suivant une sorte de courbe de tendance. Consommateur de ressources mais efficace !
* **Synchronisation du son** a pour effet de générer le signal sonore de façon synchrone avec le processeur.

Passons maintenant à l'onglet _"Paramètres"_ qui concerne quant à lui l'émulation sonore en général et non pas
seulement l'aspect qualitatif. Entendez par là que vous allez pouvoir effectuer divers réglages ou effet à partir du zoli
son que vous avez configuré dans le paragraphe précédent ;o) Un traitement du son, en quelque sorte. Ce menu est plus
complet que le précédent comme nous allons le voir. Voyons ce que nous avons à nous mettre sous la dent :
![snes9x](/emulators/snes9x/configure/para_son.png)

* Je vous conseille de garder le **driver sonore par défaut de Snes9x**, qui fonctionne réellement très bien.
* On retrouve ensuite le _taux d'échantilonnage_, que nous avons réglé précédemment.
* La _longueur du tampon_, ainsi que stéréo, _Stéréo inversé_ ont déjà été vus précédemment également.
* L'option _Linear interpolation of sample data_ correspond à l'option _Interpolé_ du menu rapide.
* Ensuite, _Générer les données sample synch avec le CPU_ correspond ici encore à l'option _Synchroniser_ du menu rapide.
* **Lecture de la hauteur d'enveloppe du volume** sert à lire tout le signal sonore sans aucune atténuation.
* **Effets d'echo** active un effet d'écho, il faut aimer...Mais bon pourquoi pas !
* **Contrôle du volume maître vous permettra de régler le volume sonore global de l'émulateur.**
* **Son muet** est une option conseillée à ceux qui aiment le silence ! En effet, en cochant cette case vous désactiverez purement et simplement le son...Un peu dommage de ne pas profiter de la musique d'un bon vieux Mario Bros par exemple ;o)
* **Méthode de décodage d'échantillons anti-résonnance** permet d'éviter d'éventuelles résonances du son, peu probables. Cette option est donc assez peu utile.
* **Activer l'émulation du son CPU** permet l'émulation du processeur sonore de la Super NES, option très utile !

### Configuration de la manette

Pour paramétrer selon vos envies votre manette ou votre clavier, cliquez sur longlet 3, nommé « contrôleur ». Les options
suivantes sont alors disponibles :
![snes9x](/emulators/snes9x/configure/controlleur.png)

Cliquez simplement sur « configuration du pad » afin de définir vos boutons sur votre stick favori, vous voyez alors apparaître
un joli menu :
![snes9x](/emulators/snes9x/configure/config_controlleur.png)

Cliquez sur une touche pré-attribuée, puis appuyez sur la touche souhaitée. Elle sera alors automatiquement attribuée !
Vous pouvez ainsi configurer jusquà 5 joypads, en faisant dérouler longlet en haut à gauche du menu. Une fois votre/vos
manettes configurées, cliquez simplement sur OK pour enregistrer. Ensuite, si vous tiquez loption « activer le multitap5 »,
vous pourrez jouer jusquà 5 personnes en même temps ! Option sympathique donc pour rythmer vos soirées ;o)

Snes9x offre également la possibilité démuler la souris ou le Superscope, il vous suffit pour cela de cocher les cases
correspondantes ! Difficile de faire plus simple non ?

## IV - Jouer en réseau

Tu es seul, tu aimes la Super NES, et tu aimerais bien jouer avec des potes ? Lauteur de Snes9x a pensé à toi, oui oui,
à toi ! En effet, tu vas pouvoir jouer en réseau grâce à une sympathique option proposée par Snes9x. Ce mode propose de jouer
jusquà 5\. Un de ceux qui désirent jouer doit se définir en tant que serveur, et les autres se connecteront à lui.

Si vous souhaitez être celui qui va faire office de serveur, il vous suffit de cliquer sur « agir en tant que serveur »
dans longlet « réseau » du menu général :
![snes9x](/emulators/snes9x/configure/reseau.png)

A ce moment, lémulateur affichera un message : « server, wanting a response from the client ». Un pote à vous doit
alors se joindre à la partie ;o)

Justement parlons-en, et plaçons-nous dans la situation inverse : si vous souhaitez vous connecter sur un ami qui lui
fait office de serveur, cliquez sur _Réseau -\> Connexion au serveur_, et entrez l'adresse IP de votre camarade,
puis cliquez sur **Connecter**, et là vous devez vous trouver en liaison avec le PC de votre collègue !

Une option excellente, cochez l'option suivante :
![snes9x](/emulators/snes9x/configure/rom.png)

Ainsi, tous vos potes qui sont connecté sur votre PC recevront la ROM du jeu utilisé ! Elle est pas belle la vie ?

## V - Commandes diverses

Quand lémulateur est en cours dutilisation, vous disposez de pas mal de commandes utiles, dont voici la liste :
Options
Fonctionnalités
Echap
Montre/cache la barre de menu Pause
Met en Pause lémulateur. Alt+'Return
Montre/Bascule entre le mode Plein Ecran et le mode fenêtré.
\`
Bouton Turbo du Superscope.
~
Bouton Pause du Superscope.
Tab
Mode Turbo (Avance rapide)  pour passer les longues intros.
0
Bascule lémulation H-DMA sur on/off.
1
Bascule larrière plan 1 sur on/off.
2
Bascule larrière plan 2 sur on/off.
3
Bascule larrière plan 3 sur on/off.
4
Bascule larrière plan 4 sur on/off.
5
Bascule les sprites (sprites) sur on/off.
6
Bascule entre du joypad 1 et 2\.
7
Rotation entre Multi-player 5, la souris sur le port 1,la souris sur le port 2 et lémulation du SuperScope.
8
Bascule les priorités des couches en arrière-plan pour les arrières-plansinclus dans le sous-écran (addition/soustraction).
9
Bascule les effets de transparences sur on et off  seulement si le mode16-bit ou au dessus est sélectionné.
Shift+9
Bascule le mode 7 bi-linèaire filtering sur on/off.
Backspace
Bascule lémulation des graphismes fenêtres sur on/off.
Shift+'F1-F9
Sauvegarde un fichier de jeu Freeze.
F1-F9
Charger un fichier de jeu Freeze, restore sur la position exact dun jeu.
Shift+'+'
Augmente le temps de limage émulé d1 ms. Ceci ralentit le jeu. (Saut dimage auto seulement)
Shift+'-'
Diminue le temps de limage émulé d1 ms. Ceci accélère le jeu. (Saut dimage auto seulement)
Shift+'insert'
Change le Turbo sur le bouton 'L'. Note : change pour tous les contrôleurs.
Shift+'delete'
Change le Turbo sur le bouton 'R'.
Shift+'\['
Change le Turbo sur le bouton 'select'.
Shift+'home'
Change le Turbo sur le bouton 'Y'.
Shift+'pageup'
Change le Turbo sur le bouton 'X'.
Shift+'end'
Change le Turbo sur le bouton 'B'.
Shift+'pagedown'
Change le Turbo sur le bouton 'A'.
'+'
Augmente le taux de saut dimage, rendant la mise à jour de lécran moins jolie mais accélère le jeu. '-'
Diminue le taux de saut dimage, rendant le jeu plus lissé, mais ralentit le jeu. Presser à répétition la touche basculera automatiquement le taux du saut dimage auto, où le taux est ajusté dynamiquement pour garder une vitesse de jeu constante.
F12
Permet de prendre une capture d'écran.

## VI - Les filtres graphiques

Nous allons voir dans cet annexe les différents filtres graphiques dont dispose Snes9x, filtres également disponibles sur
nombre d'autres émulateurs, comme MAME par exemple.

### Aucun

Comme son nom lindique, aucun filtre nest appliqué ! Par conséquent, la pixellisation risque dêtre assez importante.
![snes9x](/emulators/snes9x/configure/aucun.png)

### Normal

Cest le filtre le plus classique, et le plus basique aussi. Il permet de saffranchir de façon très faible de la pixellisation.

![snes9x](/emulators/snes9x/configure/normal.png)

### Scanlines

Comme vous pouvez le voir, des lignes horizontales appraissent sur lécran. Ceci permet de diminuer leffet d« escalier »
des graphismes, mais sur un écran dordinateur ces lignes sont disgracieuses au possible.
![snes9x](/emulators/snes9x/configure/scanlines.png)

### Supereagle Kreeds (Kreeds Niveau 1)

Ce filtre lisse limage de manière à ce que les contours des décors ne soient plus crénelés, mais lisses, à un tel point
que les personnages prennent un aspect « dessin animé ». On aime ou on aime pas.
![snes9x](/emulators/snes9x/configure/kreed1.png)

### 2xSal Kreeds (Kreeds Niveau 2)

Le même filtre que le précédent, en plus exagéré.
![snes9x](/emulators/snes9x/configure/kreed2.png)

### Super 2xSal Kreeds (Kreeds Niveau 3)

Encore plus exagéré que le précédent. Un très bon lissage mais les graphismes ne sont plus très fidèles, même si
le crénelage est à ce stade quasi-absent.
![snes9x](/emulators/snes9x/configure/kreed3.png)

### Mode TV

Comme le Port-Salut, cest écrit dessus ! Ce filtre est en fait constitué de légères scanlines, et permet très bien de
saffranchir de la pixellisation. Ce mode est bien entendu optimisé pour un écran de TV, qui a une résolution très inférieure
à celui dun PC.
![snes9x](/emulators/snes9x/configure/TV.png)

### 3D/FX bilinéaire

Attention, ce mode nest utilisable QUE si vous avez une carte graphique compatible 3D FX ! Sinon vous aurez droit à un
joli message derreur qui vous dira, à raison, que les libraires graphiques concernées sont introuvables. Ce filtre utilise
votre carte graphique afin de lisser les graphismes de façon efficace, sans dénaturer ni déformer ceux-ci. Lun des meilleurs
filtres qui soit !

### Open GL bilinéaire

Idem, mais pour les possesseurs de cartes graphiques compatibles Open GL.
![snes9x](/emulators/snes9x/configure/openGL.png)

Si avec tous ces filtres différents vous ne trouvez pas votre bonheur, moi je jette l'éponge ! :op

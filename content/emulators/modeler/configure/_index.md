---
type: guide
user: Julio
date: '2004-06-18T14:59:35.000Z'
lastmod: '2004-07-13T12:49:48.000Z'
---

# I - Avant-Propos...

Modeler est un émulateur _System 32 et Model 1_, qui est développé par les auteurs du célèbre émulateur **ZiNc.** Le développement de
Modeler a été un peu oublié, mais il n'empêche qu'il fut le premier à faire tourner des jeux Model 1, même si ceux-ci ne tournent que
partiellement ou mal. Le système 32 est quand à lui très correctement émulé. Comme vous allez le voir, Modeler est un émulateur très
simple à configurer, qui possède très peu d'options. Il a le bon goût de comporter dans ces dernières le jeu en réseau, par l'implémentation
du module **Kaillera**. Cette émulateur dispose d'une GUI assez asique et d'un menu assez rudimentaire, tout simplement parce que tous
les réglages se font en cours de jeu ! Assez bla-blaté, entrons dans le vif du sujet ;o)

Si vous voulez jouer de façon correcte à Modeler, la configuration minimale est la suivante : **CPU 350 MHz, 64 MB RAM (sans le son)**. Il est
recommandé d'avoir un **CPU de 800 MHz ou plus équipé de 128 MB de RAM.** Les systèmes d'exploitations suceptibles de faire tourner Modeler sont :

* Windows 98 SE
* Windows 2000
* Windows XP

Il vous faudra également **DirectX 8 au minimum**, ainsi qu'une carte vidéo compatible. Les versions 2.2 ou plus de Linux ayant un kernel
comportant XFree 86 3.x pourront supporter Modeler sans problèmes. Les distributions **Redhat 6.x et 7.x** également.

# II - Ce qu'il vous faut pour commencer...

Il vous faut tout simplement l'archive contenant l'émulateur, que vous pourrez bien entendu télécharger sur **Emu Nova** ! Dézippez
simplement le contenu de l'archive dans un dossier de votre choix, et c'est tout ! Pas trop dur ? :op Vous devriez obtenir dans votre
dossier quelque chose comme ceci :
![modeler](/emulators/modeler/configure/tuto1.JPG)

Bien sûr, vous devrez également disposer de ROMs Model 1 ou System 32, pour donner à manger à l'émulateur ^^

# III-Lancement de l'émulateur

C'est extrêment simple, comme vous allez le voir. Tout d'abord, placez vos **ROMs zippées** dans le répertoire _**roms**_
de l'émulateur, que vous voyez sur le screenshot ci-dessous :
![modeler](/emulators/modeler/configure/tuto2.JPG)

Lancez ensuite l'émulateur par un double-clic sur **_modeler.exe_**, vous voyez la liste des jeux émulés. Vous êtes désormais armés
pour jouer aux jeux dont vous avez les ROMs !

# IV-Configuration

Maintenant que l'on a tout ce qu'il nous faut pour jouer, on va voir les réglages à effectuer sur les plans vidéo, graphiques et sonores afin
de contenter chacun d'entre vous ;o).

## IV - A : Réglages préliminaires

Avant de lancer un jeu, nous allons nous attarder sur les options qui s'offrent à nous dans l'interface graphique de Modeler, qui sont mises en couleur sur le screen ci-dessous :
![](/emulators/modeler/configure/tuto3.JPG)

* Pour lancer un jeu, il vous suffit de cliquer sur **l'onglet 1**, _Play (local)_. On peut difficilement faire plus simple !
* Modeler vous offre la possibilité de jouer en réseau. En effet, lorsque vous démarrez l'émulateur, il vous suffit de cliquer sur l'onglet _Kaillera (online)_ indiqué par le **numéro 2** sur la capture d'écran. Il vous suffit alors de suivre les indications figurant sur le [tutorial Kawaks](http://www.emunova.net/?cat=tuto&lib=15#netplay) pour jouer en ligne (si vous ne connaissez pas déjà la procédure).
* Enfin, **l'onglet 3**, qui est _Exit_, sert tout simplement à quitter l'émulateur "proprement".

Examinons maintenant le sous-menu de Modeler, situé sur la gauche de l'interface :
![](/emulators/modeler/configure/tuto4.JPG)

* Si vous cochez l'onglet numéro 4, le son du jeu sera converti sous forme de fichier .wav et atterira directement dans le dossier **wave** de l'émulateur.
* L'onglet numéro 5, _Show FPS_, vous permettra de visualiser **le nombre d'images par seconde** lors du jeu.
* Si jamais vous disposez d'une machine de puissance moyenne, n'hésitez pas, afin d'améliorer la fluidité de la vidéo, à **désactiver le son** , en cochant la case numéro 6\.
* Enfin, activer la case numéro 7 ne semble servir à rien, malgré mes essais...

## IV - B : Configuration de la vidéo

Nous allons voir maintenant comment Modeler pour en tirer le maximum. Plusieurs commandes sont à connaître pour modifier les paramètres vidéo
(_uniquement en cours de jeu_) ! Les voici donc :

* **Alt Gauche + Enter** : Bascule en Mode Plein Ecran
* **Alt Gauche** pressé simultanément avec :
  * **Z** -\> Revenir au mode vidéo fenêtré
  * **X** -\> Multiplie la taille de l'écran par 2
  * **C** -\> Ecran x 2 avec 100% de scanlines (les scanlines donnent l'apparence d'un écran de télévision classique)
  * **V** -\> Ecran x 2 avec seulement 25% de scanlines
  * **B** -\> Ecran x 2 avec 50 % de scanlines
  * **N** -\> Ecran x 2 avec l'effet vidéo EAGLE
  * **M** -\> Ecran x 2 avec l'effet vidéo 2xSai
* La touche **"\*"** force le _saut d'image automatique_.
* En appuyant sur les touches **"+" et "-"**, vous pourrez régler manuellement le saut d'image (frameskip).

## IV - C : Configuration du son

Modeler dispose également de quelques options pour vous aider à configurer votre son au mieux suivant votre machine, voici les commandes
permettant d'activer divers filtres ou effets sonores :

* Le touche **8** active un _filtre passe-bas_, qui permet d'obtenir un meilleur son en ne laissant passer que les basses fréquences du son. Sur certaines machines un peu vieilles, ceci peut également permettre d'éviter un son qui craque ou désagréable.
* La touche **9** du pavé numérique active le mode **Surround EX**, qui vous simule un son de très grande qualité, pour une consommation de ressources processeur raisonnable.
* Si vous appueyez sur **0**, cela aura pour effet d'activer le mode "Stereo Expander", qui est un autre type de son "surround", mais qui pourra encore de meilleurs résultats sur certains jeux, à vous de tester et d'expérimenter ce qui va le mieux sur votre machine ! ^^

A chaque fois que vous activerez un effet sonore, un message de confirmation apparaîtra à l'écran, histoire que vous en soyez sûr...

## IV - D : Contrôles

Maintenant que la vidéo enchante vos yeux, et que le son charme vos oreilles, il faudrait aussi satisfaire vos doigts, qui frémissent
d'impatience de jouer ;o) Voici comment les contenter :

* Flèches **Haut / Bas / Gauche / Droite** : Directions joueur 1\.
* **CTRL Gauche / Alt / Espace / Shift / Z / X / C** : Boutons d'action Joueur 1\.
* Les touches du pavé numérique **1 / 2 / 3 / 4** correspondent au bouton Start du joueur 1, 2, 3, 4 respectivement.
* Les touches **5 / 6 / 7 / 8** : Crédit joueur 1, 2, 3, 4 respectivement.
* **Insert / Home** : service et test (laissez appuyé Insert pour entrer dansle menu de test et utilisez Home pour naviguer dans la plupart des jeux).

# V-Divers

J'ai jugé utile de vous donner quelques petites commandes et fonctions en plus. Celles-ci vous aideront à peaufiner un peu la configuration
de Modeler, et sont loin d'être indsipensable pour jouer. Un complément en quelque sorte. Quelques commandes sympathiques pour commencer :

* La touche **"p"** vous permet de faire une **pause**.
* En appuyant sur **F12**, vous effectuerez une **capture d'écran** au fomat _BMP_ si votre système d'exploitation est Windows, ou bien _PNG_ si vous utilisez Linux. Commande très utile si vous voulez conserver des souvenirs de vos parties endiablées !
* Par défaut, l'attribution des touches au clavier est telle que vous pouvez y jouer directement avec un **_Hotrod SE_** ! Bien pratique pour les possesseurs de ce magnifique accessoire ;o)
* Si vous appuyez sur **F11**, vous verrez affiché le nombre d'images par seconde.
* L'appui de la touche **F6** permet de faire disparaître la flèche de la souris.

Si d'aventure vous en veniez à essayer le jeu **Title Fight**, utilisez les deux joysticks du Hotrod pour simuler ceux de la machine
originale. Autrement, les flèches directionnelles du clavier représentent le _joystick de mouvement_ et pour le deuxième joystick, utilisez
les commandes suivantes : _R pour Haut, D pour Gauche, G pour Droite, et F pour Bas._

Une fonction extrêment utile : **_sauvegarder et charger ses parties !_** C'est très simple :

* Si vous appuyez simultanément sur _Shift + un nombre quelconque de 0 à 9_, vous effectuerez alors une **sauvegarde à l'emplacement X**.
* Pour charger une partie précédemment sauvegardée, il vous suffira de presser _Ctrl Droit + le numéro de l'emplacement où vous avez sauvegardé votre partie._ **Attention :** On ne peut sauvegarder qu'une et une seule partie par emplacement.
* Vous ne pourrez pas sauvegarder ou sauver une partie pour les jeux Model 1 (étant donné qu'ils sont tous très peu jouables, l'auteur considère que ce n'est pas un gros souci, et il n'a pas tort ^^).
* **Prenez garde :** si vous sauvegardez une partie quand le son est désactivé, et que vous chargez la partie alors que le son est activé, vous risquez un crash de l'émulateur !

---
type: guide
user: Julio
date: '2004-06-18T15:05:42.000Z'
lastmod: '2004-08-22T19:12:26.000Z'
---

# Présentation

Satourne est un émulateur Saturn et ST-V (Sega Titan Video, version arcade de la Saturn), développé par un auteur français, Fabien Autrel.
Il commence à émuler une part importante des jeux Saturn existants, à des vitesses pour l'instant modestes mais correctes si vous disposez d'une
bonne machine (2 Ghz et 512 Mo de RAM); en attendant une optimisation de l'émulateur. Voyons maintenant comment retrouver les sensations de la
Saturn sur votre PC avec Satourne !

# Téléchargement du nécessaire

Avant d'expliquer comment configurer Satourne, vous aurez besoin de télécharger les fichiers suivants :

* Satourne v1.1p
* Bios Saturn
* Bios ST-V

Vous pouvez télécharger tout ceci dans les sections [émulation Saturn](/saturn/)
([émulateurs Saturn](/saturn/#emulateurs), [utilitaires saturn](/saturn/))sur Emu Nova.

En effet, il vous sera impossible de lancer un jeu Saturn / ST-V sans le BIOS correspondant. Créez ensuite un dossier dans lequel vous dézipperez
l'émulateur. Mettez ensuite le **BIOS Saturn**, que vous décompresserez aussi, et enfin le **BIOS ST-V**, que, vous l'aurez
deviné, vous aurez aussi à décompresser ;o) Ne vous étonnez pas, le BIOS ST-V est composé de multiples fichiers, cela est normal. Vous devez donc avoir
dans votre dossier quelque chose qui ressemble à ça :
![satourne bios](/emulators/satourne/configure/satourne-dossier-bios.gif)

Voilà, tout est en place. Maintenant, on va indiquer à Satourne l'emplacement des BIOS ainsi que chacun des plugins dont il a besoin pour fonctionner.

# Déclaration du bios et des Plugins
![satourne selection bios](/emulators/satourne/configure/satourne-selection-bios.gif)

Pour fonctionner correctement, Satourne doit connaître les différents _chemins d'accès aux plugins et BIOS_, ce que nous allons faire tout de suite.

## Déclarer les BIOS

Pour cela, allez dans __Options --\> Other Options__,puis comme l'indique la **case 1**, dans _Saturn Bios_ et parcourez votre
disque dur pour indiquer à Satourne où se trouve votre BIOS _**dézippé**_. De même pour le ST-V, dans la **case 2**, où est
indiqué _ST-V Bios_, indiquez le BIOS, toujours dézippé ! (indiquez un des différents fichiers en fait)

Si vous indiquez à Satourne le chemin d'accès au BIOS zippé, vous aurez un message d'erreur au lancement des jeux : **Sh2 invalid opcode**,
suivie d'un code d'erreur. Donc pensez bien à dézipper votre BIOS ;o)
Voici une capture illustrant cela :

Une remarque cependant : déclarez les 2 BIOS même si vous ne comptez jouer qu'à l'une des 2 machines.

---

## Sélection des plugins

Ensuite, pour chacun des différents plugins de Satourne, vous devrez aller dans __Plugins --\> XXX Plugin__, où XXX désigne 1 des 6 plugins de
Satourne. Dans le sous-menu qui s'ouvre alors, cliquez sur __Choose Plugin__, et choisissez à chaque fois le premier de la liste (souvent,
ce sera le seul).

**Avertissement !** Il est TRES PROBABLE que lorsque vous choisirez le _Plugin CD-Block_, vous obteniez un message d'erreur
comme "Error : no ASPI found". Cela vient du fait que vous ne disposez pas des pilotes nécessaires à Satourne pour pouvoir exploiter votre lecteur CD-ROM.
C'est un problème très fréquent (sur 3 ordinateurs où j'ai testé Satourne, 2 ont eu ce problème). Pour résoudre ceci très simplement, téléchargez
le pack de _pilotes ASPI_ présent dans la section Saturn d'Emu Nova et re-démarrez au besoin votre ordinateur. Et voilà, c'est bon ! :o)

## Relancer Satourne

Une fois les BIOS Saturn et ST-V déclarés et les plugins choisis, quittez Satourne. Ensuite, relancez-le. Au démarrage, il chargera tout
seul les BIOS et les plugins que vous aurez choisi, comme vous pouvez le voir sur cette capture :
![satourne plugins loaded](/emulators/satourne/configure/satourne-plugins-loaded.gif)

# Configuration des Plugins

Les plugins ont un rôle crucial dans Satourne : chacun d'eux gère une partie de l'émulation, par exemple le plugin VDP gère les graphismes
et le plugin CD-BLOCK gère l'accès au lecteur CD. Ce système a également été conçu afin que des programmeurs extérieurs puissent aborder leur contribution.

Maintenant que l'on a choisi les plugins à utiliser, il faut les configurer (tout du moins certains d'entre eux). Pour cela, c'est
très simple : allez dans __Plugins --\> XXX Plugin__ et dans le sous-menu, cliquez sur _Configure Plugin_. Voici comment configurer chaque plugin :

## Plugin CD Block
![satourne choose a CDROM device](/emulators/satourne/configure/satourne-choose-cdrom-device.gif)

Tout d'abord, il faut que vous indiquiez le lecteur CD dans lequel vous allez insérer votre jeu Saturn (original ou non; vous pouvez
également utiliser Daemon Tools pour jouer avec un ISO si vous ne voulez pas graver le jeu). Il faut donc configurer le _Plugin CD Block_.
Pour y accéder suivez la procédure indiquée plus haut. Voici le menu qui va s'offrir à vous :

Dans le menu déroulant (case 1), choisissez le lecteur dans lequel vous avez mis votre CD Saturn. Ensuite, pour que le CD soit lu, cliquez sur
_Insert the CD into the Saturn_ (case 2). C'est tout pour ce plugin.

---

## Plugin Vidéo

Ensuite, nous allons configurer le plugin VDP, qui est le plugin graphique. Pour cela, ne passez pas par le menu de Satourne mais par le
menu de la fenêtre d'affichage qui s'est ouverte lorsque vous aviez indiqué le chemin d'accès de celui-ci à Satourne.

### Onglet "Display"
![satourne fullscreen resolution](/emulators/satourne/configure/satourne-display.gif)

* _Toggle Fullscreen_, qui vous permet de passer en plein écran. Cela consommera plus de ressources et risque de rendre l'émulation plus lente... A vos risques et périls !
* _Resolution_ qui, vous l'aurez deviné, vous permet de choisir la résolution de la fenêtre d'affichage.

### Onglet "Filtering"

* Les options _VDP 1 et VDP 2_ vous offrent divers types de filtrage graphique. L à il faut tester à tâtons et voir lequel vous correspond le mieux.
* Ensuite, vous pouvez voir l'option _anti-aliasing_, celle-ci vous permet d'adoucir les polygones, les lignes... Option très sympathique mais aussi goumande en mémoire donc gare ! ;o)

### Onglet "Disable"

Il permet de désactiver certaines parties de la vidéo, comme les polygones, les lignes... Voici le menu sur cette capture d'écran :
![satourne vdp normal distorted scaled sprites polygons lines](/emulators/satourne/configure/satourne-vdp1-vdp2-disable.gif)

### Onglet "Options"

Enfin, dans l'onglet _Options_, vous pourrez vider la mémoire cache de la vidéo (VDP 1 et VDP 2).

## Plugin SH2

Passons maintenant à la configuration du plugin SH2 ! Celle-ci sera inutile si vous n'y connaissez rien en programmation car elle vous permet en
fait de voir ou non tout ce qui se passe au niveau de votre PC lorsque l'émulateur est en route... Donc, ne touchez pas à ce plugin, j'indiquerai
en annexe quelques petites choses pour ceux qui veulent vraiment bidouiller ;o)

## Plugin SMPC

Maintenant, on va s'atteler à la configuration du _Plugin SMPC _, celui-ci est très important car il est chargé d'indiquer à Satourne
la provenance géographique du jeu (USA, Europe, etc...) mais il vous permettra surtout de configurer votre manette / clavier ! Pour configurer ce
plugin, assurez-vous d'avoir branché votre manette de jeu le cas échéant avant de lancer Satourne.

* Dans la case 1, le plus simple est de laisser cochée la case __Auto.__ Ainsi Satourne déterminera seul l'origine de votre jeu. Si votre jeu plante au démarrage ou est mal reconnu, je vous conseille de cocher la case d'origine de votre jeu si vous la connaissez.
* Au niveau de la case 2, vous pouvez voir les onglets _Player X Pad Setup_. Cliquez dessus et vous verrez apparaître le menu suivant :
![satourne smpc plugin pad setup](/emulators/satourne/configure/satourne-smpc-pad-setup.gif)

Vous pouvez choisir de jouer au clavier ou à la manette, pour ce reportez-vous au menu déroulant de la case 3\. Vous verrez différents
périphériques de jeu disponibles (clavier, manette...). Choisissez celui qui vous convient, puis _cliquez sur une touche de la Saturn suivie
de la touche du clavier / manette correspondante_ (de votre choix). Répétez cette opération pour chacune des touches de la manette de la
Saturn. Ca y est, les contrôles sont configurés ! :o)

## Plugins SCU & SCSP

Quant aux 2 derniers plugins, les _Plugin SCU_ et _Plugin SCSP_, ils ne peuvent être (dans la version 1.1p de Satourne) configurés.
Du travail en moins donc ^^

# Lancement d'un jeu Saturn

Tout (ou presque ^^) est fini, vous pourrez jouer d'ici une poignée de secondes ! Tout d'abord, insérez le CD du jeu saturn dans votre lecteur
CD, puis il ne vous reste que les étapes suivantes à suivre :

* Dans le __Plugins ---\> Plugin CD Block__, cliquer sur "Configurer"
* Choisir le lecteur dans lequel votre CD se trouve (votre lecteur virtuel dans le cas d'un ISO), puis cliquer sur _"Insert Disk into Saturn"_
* Simplement cliquer sur "RUN" dans le menu principal

Et voilà ! Votre jeu se lance, vous n'avez plus qu'à jouer désormais ! Si vous suivez précisément la procédure, cela doit se faire sans problème si
votre jeu est supporté. Attention, certains jeux ne sont pas émulés DU TOUT par Satourne.

# Lancement d'un jeu ST-V

Avant de suivre la procédure ci-dessous, mettez vos ROMs ST-V dans le répertoire _roms_ de Satourne et surtout laissez-les zippées !
Ces ROMs sont exactement les mêmes que MAME utilise. Vous allez voir que jouer à un jeu ST-V est très facile, vous avez déjà fait le plus dur ^^

* Allez dans __Machine Mode__ : cette option vous permet de passer de la Saturn au ST-V, choisissez donc ST-V.
* Cliquer sur "Load ST-V ROM", la liste apparaît alors. Vous pouvez voir diverses infos sur les jeux dont vous disposez, et eux seulement.
* Cliquer sur "Load" une fois votre jeu sélectionné puis sur "RUN" dans le menu principal. Ca y est, votre jeu est lancé, c'est à vous de jouer maintenant ;o)

# Divers

* Satourne offre la possibilité d'émuler une cartouche de RAM allant de 1 Mo à 4 Mo, mais cette fonction n'est pas encore complètement opérationnelle, je vous conseille donc d'attendre une version ultérieure de l'émulateur.
* Pour ceux qui veulent expérimenter, qu'ils aillent donc dans _Options-\>Other Options_, on voit le nombre de cycles effectués par unité de temps par le processeur SH2 de la Saturn. Vous pouvez rendre l'émulation plus rapide mais moins stable en augmentant cette valeur. En revanche, si vous baissez cette valeur, l'émulation sera plus lente, mais elle sera d'autant plus stable. A vous après de trouver le bon compromis en fonction de votre machine et de vos envies ! ;o)

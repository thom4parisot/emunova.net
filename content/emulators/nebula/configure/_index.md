---
type: guide
user: Julio
date: '2005-10-25T08:01:06.000Z'
lastmod: '2005-12-12T13:32:23.000Z'
---

# Introduction

Parmi les divers émulateurs Arcade existants, **Nebula** mérite sans conteste sa place
sur le podium. Développé par _Elsemi_, qui a également crée un émulateur **Sega Model 2**
(après la sortie d'une version spéciale de Nebula qui n'émulait que ce système),
mais qui a aussi contribué aussi aux projets _Chankast, MAME..._ Vous l'aurez compris,
Elsemi est un programmeur de talent. Dans le présent tutorial, nous allons nous intéresser de près à la
configuration complète de ce petit bijou qu'est _Nebula_.
Mais pourquoi autant d'enthousiasme autour de cet émulateur ? Tout simplement parce qu'il possède un grand
nombre de qualités. Tout d'abord, il est _simple d'utilisation_ et peut être abordé sans trop de
problèmes par un débutant (tout du moins pour une utilisation basique). Ensuite, il émule parfaitement les
systèmes _Neogeo, CPS1, CPS2_, et partiellement le système arcade _PolyGame Master_
(Elsemi a fait de gros progrès sur l'émulation du PGM au courant du mois de Janvier et du mois d'Août 2005).
Autre point non négligeable, Nebula émule très honorablement la _Neogeo CD_, ce qui est loin
d'être commun et ce qui permet de découvrir les jeux spécifiques à ce support.
Enfin, Nebula est un émulateur flexible, puisque l'on peut _rajouter des jeux supportés_ via un
système de fichiers DAT.
Vous l'aurez compris, Nebula est un émulateur Arcade très complet, et après avoir lu ce tutorial,
vous serez capable de le pousser dans ses derniers restranchements ! Bonne lecture.

# Téléchargement de Nebula et fichiers importants

Avant toutes choses, commencez par télécharger la dernière version de Nebula sur Emu Nova, qui se
trouve [cette page](http://www.emunova.net/emulation/emulateurs/neogeo.htm). Vous aurez
également besoin des [BIOS Neogeo et
Neogeo CD](http://www.emunova.net/emulation/utilitaires/neogeo.htm). Sans ces précieux fichiers, Nebula sera _dans l'incapacité de faire fonctionner vos
jeux ou de les détecter, ceci est donc très important._ Créez un dossier nommé par exemple
**Nebula** (quel hasard ^^), et placez l'archive de l'émulateur que vous venez de
télécharger dans ce répertoire.

* **Décompressez l'archive** dans le répertoire que vous aurez crée à cet effet.
* **Déplacez les BIOS Neogeo et Neogeo CD** dans le sous-répertoire "**roms**"
qui est apparu lors de la décompression. (Ne décompressez pas les BIOS, laissez-les au format **.zip**
sinon cela ne fonctionnera pas).
* Enfin, placez vos **ROMs** dans le sous-répertoire "**roms**", le même
où vous avez placé les BIOS Neogeo et Nogeo CD. (Ne décompressez surtout pas vos ROMs, laissez-les au
format **.zip** sinon elles ne fonctionneront pas).

Vous êtes désormais parés à lancer _Nebula_ pour la première fois, et pour procéder à sa
configuration. Suivez le guide !

# Configurer Nebula

Double-cliquez sur l'icône de l'exécutable de Nebula, nommée _nebula.exe_, vous verrez apparaitre
un _disclaimer_ qu'il vous faudra attendre 20 secondes avant de voir disparaitre. Cliquez ensuite
sur "I agree" (Oui, j'accepte) si vous acceptez les termes d'utilisation de Nebula (il vaut mieux si vous
voulez pouvoir exploiter ce tutorial :D) :
![Disclaimer](/emulators/nebula/configure/1-Disclaimer.png)

Une fenêtre de dialogue vous informe ensuite que Nebula n'est pas encore configuré.
Il faut donc procéder à une configuration préliminaire qui se fait _via_ l'interface suivante :
![Congiguration de base](/emulators/nebula/configure/2-Basic_config.png)

_**Champ GUI (1/2) :**_

Vous avez ici le choix entre la nouvelle interface de Nebula, qui est une interface Windows classique
(Fenetre, barre de menu "Fichier", "Vidéo", etc...) et l'ancienne interface qui prendra tout l'écran et
présente la liste des jeux disponibles. Je trouve personnellement cette dernière moins pratique et vous conseille donc la "nouvelle" interface.

_**Champ Romsets :**_

Laissez les deux cases cochées pour des raisons pratiques : la première permet d'utiliser les noms stricts des jeux
(ce qui permet d'etre sur que la ROM que vous avez est compatible avec Nebula), et la seconde fera en sorte
qu'à chaque démarrage de Nebula, il vérifiera si vous avez ajouté de nouvelles _ROMs_ dans le répertoire
approprié.

_**Champ System :**_

Vous pouvez avec le curseur changer la priorité de Nebula lorsqu'il est exécuté sur votre ordinateur. Cette
priorité varie de -15 (très basse priorité) à 15 (Nebula prendra toutes les ressources qu'il lui faut, quitte
à "étouffer" d'autres processus en cours sur votre ordinateur), en passant par 0 (priorité normale, que je vous
conseille de garder).

_**Champ GUI (2/2) :**_

Vous pouvez choisir, en décochant les cases, d'activer les bruitages de l'interface graphique et de la controler au joystick.
A vous de voir si vous jugez cela indispensable.

_**Champ Graphics :**_

Vous avez ici l'opportunité d'activer/désactiver des _effets graphiques_, qui sont respectivement
la possibilité _de masquer les sprites CPS2_, puis d'afficher les **rasters Neogeo**
(qui correspondent à certaines parties de l'affichage), et enfin d'activer les effets de _transparence_.
Je vous conseille de tout laisser activé pour un affichage correct. Toutefois, si votre ordinateur ralentit et
rend l'utilisation de Nebula pénible, vous pouvez désactiver l'émulation des rasters et de la transparence afin de décharger le processeur et ainsi rendre l'émulation plus fluide.

_**Champ Sound :**_

La taille du buffer sonore est ici configurable, la valeur par défaut fonctionne toutefois très bien. Ne modifiez cette valeur
que si vous avez des problèmes de délai ou de synchronisation sonore.

_**Champ Input :**_

Si vous disposez d'une manette à retour de force, elle pourra vous servir ! Pour cela, laissez la case
correspondante cochée.

_**Champ PGM :**_

Nebula émule **partiellement** le système PGM, ou _PolyGame Master_, un système arcade
sensé remplacer la Neogeo mais qui n'a jamais véritablement percé. Il est recommandé de laisser le son désactivé
pour ne pas demander trop de ressources à l'ordinateur. Parmi les jeux jouables, ne manquez pas le trop méconnu **Knights of Valour : Nine Dragons**, Nebula est le seul émulateur permettant de jouer à ce jeu par exemple.

## Réglages vidéo

Nous allons maintenant nous intéresser à une partie cruciale qui est la **configuration vidéo** de
Nebula. Celui-ci dispose d'une foule de filtres graphiques et d'effets divers, qui vous permettront d'obtenir
obligatoirement ce que vous recherchez. Etudions en détail les options graphiques proposées par Nebula :
![Configuration vidéo](/emulators/nebula/configure/3-config_video.png)

Fonctions
Descriptions
Fullscreen
Cette option présente un sous-menu que je vais vous présenter plus bas.
Window Mode
Ce sous-menu est également détaillé plus bas.
Switch to Fullscreen
Permet de basculer instantanément en plein écran.
Surface allocation
Indiquer si vous voulez utiliser la mémoire vidéo (conseillée) ou la mémoire vive (RAM)
CPS-1
Vous pouvez _via_ l'option "Shots factory" qui apparait alors accéder aux screenshots que vous
aurez pris de jeux CPS1\.
CPS-2
Vous pouvez, comme dans la configuration initiale, choisir d'activer/désactiver l'affichage
des rasters ainsi que le masquage automatique des sprites pour ce système.
Neo-Geo
Activer/désactiver l'émualtion des rasters. Entrer dans le "Shot FActory" pour faire de jolies captures d'écrans
Sprites Transparency
Lorsqu'elle est activée, cette option permet comme dans la configuration initiale de permettre
l'affichage des transparences.
Transparency Table
Permet d'activer l'utilisation des fichiers de transparence spécifiques à chaque jeu.
Automatic Transparencies
Permet d'activer automatiquement l'affichage des transparences.

## Réglages sonores

Nous pouvons maintenant nous intéresser à la configuration sonore de Nebula. Que je vous rassure, pour une utilisation
"classique" de Nebula, vous n'aurez pas besoin de vous y intéresser. En revanche, si vous êtes curieux ou que vous voulez
pousser l'émulateur dans ses derniers retranchements, ce paragraphe est fait pour vous ! Un aperçu du menu de configuration
du son tout d'abord :
![Configuration audio](/emulators/nebula/configure/config_son.png)

Fonctions
Descriptions
Q sound /PGM
Cette option permet tout d'abord _d'activer/désactiver le son pour les jeux PGM_,
mais aussi de choisir la _fréquence d'échantillonage_ (la diminuer si votre ordinateur
n'arrive pas à suivre), l'interpolation du signal sonore (ne l'augmenter que si vous avez un ordinateur puissant,
la diminuer si votre ordinateur peine...) qui permet d'avoir une meilleure fidélité du son, le mode de traitement _DirectX_ (celui par défaut
fontionne très bien), et enfin la possibilité de _pré-amplifier_ le son des jeux PGM pour avoir un volume sonore
final plus élevé.
Neo-Geo
Dans ce sous-menu, vous pouvez _activer/désactiver_ le son (je vous conseille de le laisser activé !), ainsi que
de choisir tout comme pour le PGM la fréquence d'échantillonage et l'interpolation du signal sonore.
Les memes conseils que ceux donnés précédemment s'appliquent.
CPS-1 / Konami
Ici encore, vous pouvez configurer le taux d'échantillonage et la qualité de l'interpolation du
signal sonore.
DSP Plugins
Permet de sélection un plugin son pour améliorer l'émulation sonore de Nebula.
Save sound to Wave file
Cette option vous permettra de convertir la bande sonore du jeu auquel vous êtes en train de
jouer en un fichier **\*.wav**, qui sera ensuite lisible par un lecteur multimédia
classique.
Dump current PGM song
Cette option vous permet de sauvegarder sous la forme d'un fichier audio classique une bande-son
de jeu PGM ! Plutot sympathique.

## Options de jeu
Dans ce menu, vous allez pouvoir modifier quelques options relatives au jeu, comme sa région
(cas de la Neogeo); et configurer vos manettes (votre clavier le cas échéant), ce qui est donc important.
Voyons en détail comment tirer le pmeilleur parti de ces différentes possibilités :
Fonctions
Descriptions
Config Controls
Un menu crucial, où vous allez choisir la disposition des boutons de jeu : au clavier, à l'aide d'une manette... Dans un souci de simplicité, choisissez les configurations pré-établies pour les joysticks type X-Arcade/Hotrod d'une part, pour les joypads classiques d'autre part. Macros
Les Macros sont des touches particulières : en appyant dessus, l'effet sera le même
que si vous aviez enchaîné une série de boutons que vous aurez vous-même définie auparavant.
Hints
Activer ou non les commandes d'aides (en haut de la fenêtre) en mode "no stretch" et en 800x600\.
Macro Layout
Attribuer vos macros au joueur 1 ou 2, ou laisser la détection automatique.
Region
Permet de choisir la langage des jeux.
Cheats
Consulter et utiliser les codes de triches disponibles pour le jeu en cours d'émulation.
CPU Overclock
Permet d'overclocker la fréquence du CPU original du système émulé.

La dernière option, **Neogeo Options**, est plus fournie et mérite d'être détaillée :

* Region : Cette option permet de choisir la région d'origine de la machine. Ceci a pour incidence
de changer la couleur du sang sur certains jeux (blanc/gris en Europe, rouge au Japon par exemple),
ou encore de contourner certaines "censures", comme la poitrine de Maï qui remue (ou pas) !
* Mode : Ici, vous choisirez si vous voulez au jeu tel qu'il est en version **AES
(ou Console)**, ou comme sur la **Borne d'arcade (version MVS)**.
Quelle est la différence ? En version Console, vous aurez accès au menu des jeux,
(tels que entraînement pour les jeux de baston) ce que vous n'aurez pas par exemple en version Arcade.
* Use Universe BIOS : Si vous souhaitez tricher facilement dans les jeux, alors
débloquez les possibilités en utilisant l'**Universe BIOS** de Razoola ! Vies infinies, changer de niveau, tout cela sera possible.

## Options diverses

Nebula possède également quelques fonctionnalités annexes très intéressantes.
Celles-ci sont disponibles dans le sous-menu **Misc**. Voici le détail de
chacune d'entre elles dans le tableau ci-dessous :
Fonctions
Descriptions
Generate RomCenter DAT
Permet de créer un fichier DAT, qui autorise le logiciel RomCenter à scanner vos répertoires
de ROMs, et à savoir celles qui sont attendues et reconnues par _Nebula_. C'est donc
indispensable si vous souhaitez vérifier vos ROMs ou bien les lister de manière plus précise.
Auto-Switch to 16-bit Desktop
Cette option vous sera utile si vous souhaitez que votre bureau passe en 16-bits
(au lieu de 32 habituellement), ceci se fera automatiquement au démarrage de chaque ROM
par Nebula.
Auto-Switch to FullScreen after ROM load
Une fonctionnalité simple et excellente : chargez votre ROM comme d'habitude, et
Nebula bascule le jeu en plein écran sans intervention de votre part ! Un must.
Language
Comme vous l'aurez deviné, vous devez ici choisir la langue dans laquelle
Nebula proposera ses menus et options. Pour que ceci soit effectif, il faudra re-démarrer Nebula.

## Emuler la Neogeo CD

Peu de gens savent que Nebula est sans doute le _meilleur émulateur Neogeo CD_ à ce jour. Petit rappel pour ceux qui ne sauraient pas ou qui auraient oublié, la Neogeo CD fut un support que SNK a lancé afin de conquerir un public plus vaste : même si de nombreuses personnes connaissaient la Neogeo _via_ les salles d'arcade, peu sont ceux ayant acquis une Neogeo AES et ses onéreuses cartouches. Le passage au support CD permit ainsi des jeux à des prix plus raisonnables, même si les temps de chagement instrinsèques au support étaient assez douloureux à supporter. Mais revenons-en à Nebula.
Il est capable de faire fonctionner _aussi bien les jeux originaux que les ISOS_, et ce avec une
excellente qualité d'émulation. Vous allez voir qu'émuler la Neogeo CD est de plus très simple à
mettre en oeuvre. Lorsque vous lancez Nebula et que vous affichez la liste des jeux disponibles,
**double-cliquez** sur le fichier _Neogeo CD BIOS_ :
![Bios Neogeo CD](/emulators/nebula/configure/neocd-bios.png)

Vous verrez alors une courte séquence animée qui est celle du démarrage de la Neogeo CD. Durant cette séquence,
**appuyez sur la touche Tab**. Le menu suivant apparaîtra alors :
![Menu Neogeo CD](/emulators/nebula/configure/neocd-menu.png)

A l'aide des flèches directionnelles du clavier, choisissez l'option _CD settings_ puis validez à l'aide de la touche **Entrée**.
  * Si vous avez inséré un **jeu original de Neogeo CD** dans votre ordinateur, alors choisissez "Vrai CD" avec les flèches
gauche et droite du clavier. Toujours de la même façon, choisissez la lettre du lecteur où est inséré le jeu.
  * Si vous utilisez une **image CD de jeu Neogeo CD (un ISO)** (pour en savoir plus sur les ISOS Neogeo CD, rendez-vous à la fin de ce tutorial), choisissez alors _Image ISO_, puis
appuyez sur Entrée au niveau de l'option _Choisir une image ISO_. Un explorateur de fichiers apparait alors, et vous n'avez plus qu'à indiquer le chemin d'accès de votre ISO.

Une fois que
votre jeu est sélectionné, appuyez **2 fois sur Echap**. La petite séquence de démarrage de la
Neogeo CD se termine alors et tout simplement, le jeu démarre ! Ce n'est pas plus compliqué.

Il est également bon de savoir que la configuration des contrôles pour la Neogeo CD est _la même_ que celle des autres systèmes émulés par Nebula. Ceci est également vrai pour les **réglages audio et vidéo**. Un point qui peut poser problme à l'utilisation de ce module _Neogeo CD_ est la structure des jeux Neogeo CD tels que vous les trouverez sur Internet. En effet, quand vous dézipperez l'archive contenant les fichiers du jeu, vous serez sans doute surpris de trouver un fichier **ISO** ainsi qu'une multitude de fichiers **WAV**. Pas d'inquiétude : c'est parfaitement normal. Lorsque vous lancez un ISO Neogeo CD, tout ce que vous avez besoin d'indiquer à Nebula, c'est l'emplacement du fichier ISO, et rien d'autre.

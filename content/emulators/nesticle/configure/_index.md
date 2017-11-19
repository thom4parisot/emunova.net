---
type: guide
user: Sigfrodi
date: '2004-06-18T15:01:45.000Z'
lastmod: '2004-07-13T12:47:03.000Z'
---

# Introduction

Nesticle fut en son temps l'un des programmes phares de la scène de l'émulation de la Nintendo NES. Bien qu'il soit fort ancien 
et que la talentueuse équipe de [Bloodlust](http://bloodlust.zophar.net/) (qui a également réalisée Callus et 
Genecyst, références en leur temps) semble avoir arrêté tout développement depuis 1998 (!), Nesticle n'en reste pas moins un émulateur 
efficace et doté d'une bonne compatibilité, malgré un rendu des couleurs et sonore imparfait. Par ailleurs, son âge en fait un programme 
extrêmement léger, puisqu'un Pentium 133Mhz suffit largement pour une émulation correcte.

# Installation

Si vous ne disposez pas de Nesticle, vous pouvez le télécharger sur la page [émulateurs NES](/nes/#emulateurs)
d'Emu Nova. Préférez la version 0.42 à la version x.xx plus récente mais dont les améliorations ne concernent que le support MS-Dos (elle est d'ailleurs 
incompatible avec Windows XP).

Une fois l'archive zip téléchargée, décompressez la dans un dossier (par exemple "C:\\emul\\nes") et créez un répertoire pour accueillir vos 
jeux ("roms" par exemple) et copiez y vos roms. Si vos jeux sont zippés, vous devrez les décompresser, Nesticle ne gérant pas le format Zip. :(

# Configurer et utiliser Nesticle

Pour lancer Nesticle, double cliquez sur le fichier _nestcl95.exe_ qui se trouve dans le dossier où vous avez installé Nesticle. Le fichier 
_nesticle.exe_ est la version DOS et ne devrait concerner que peu de monde. ;)

Vous voilà devant le GUI de Nesticle (on appréciera au passage le design du pointeur ;) ).

Nous allons commencer par configurer la résolution graphique. Cela se passe dans le menu "_Settings -\> Resolution_"

Nesticle vous propose un certain de nombre de résolutions par défaut. Notez qu'il n'y a pas de mode fenêtré. L'option "_Other_" permet 
de définir une résolution non listée. Malheureusement, Nesticle n'adapte pas l'image du jeu à la résolution choisie : quelle que soit celle 
que vous choisissez, Nesticle gardera l'image du jeu en 320x240\. L'image apparaîtra simplement plus petite à l'écran. Je vous conseille 
le "_320x240_", compatible avec toutes les cartes graphiques et permettant une image plein-écran.
![](/emulators/nesticle/configure/gfx.gif)

En fonction des jeux, vous aurez parfois à cocher également les options "_Setting -\> Scroll fix 1_" et "_Settings -\> Scroll fix 2_" 
qui corrigent des bugs dans la gestion du scrolling dans certains jeux. Cocher ces options n'est jamais sauvegardé par Nesticle, il faudra le 
refaire lors de vos prochaines utilisations.
![](/emulators/nesticle/configure/scrollfix.gif)

Les options sonores sont toutes aussi simples à configurer. Vérifiez d'abord que l'option "_Settings -\> Toggle sound_" est cochée. 
La décocher désactivera le son.
![](/emulators/nesticle/configure/togsnd.gif)

A présent, cliquez sur "_Settings -\> Sound..._". Dans la boîte qui apparaît, cochez toutes les options.
![](/emulators/nesticle/configure/snd.gif)

Une fois celà fait, nous pouvons passer à la configuration des commandes. Cela se passe dans "_Settings -\> Redefine input_". 
Nesticle est capable de gérer deux périphériques de contrôle. Dans le menu, choisissez celui que vous souhaitez configurer.
![](/emulators/nesticle/configure/control.gif)

Apparaît une boîte qui ressemble à ceci :
![](/emulators/nesticle/configure/control2.gif)

Cliquez d'abord sur le type de controlleur que vous utilisez : clavier, joystick ou joypad puis sur "_Remap buttons_". 
Une nouvelle boîte va apparaître :
![](/emulators/nesticle/configure/buttons.gif)

Dans cette boîte, cliquez sur le champs à côté de B: puis sur le bouton de votre joystick/joypad ou sur la touche du clavier que vous souhaitez 
assigner au bouton B de la NES. Faîtes de même avec A, Select et Start, puis fermez la boîte en cliquant sur la petite croix en haut à droite 
comme pour n'importe quelle fenêtre Windows.

Une fois revenu sur la fenêtre de configuration du pad, vous pouvez tester le fonctionnement de vos boutons et de la croix directionnelle à droite.

Si vous constatez que les mouvements de la croix directionnelle sont anormaux (cela ne devrait pas se produire si votre joystick/joypad 
est connecté sur port USB), il faut calibrer la croix avec le bouton "_Calibrate_" puis en suivant les instructions à l'écran.

Nous pouvons maintenant configurer les dossiers utilisés par Nesticle dans le menu "_File -\> Directories..._"
![](/emulators/nesticle/configure/dir2.gif)

Ceci ouvrira la fenêtre suivante :
![](/emulators/nesticle/configure/dir.gif)

Remplissez les divers champs avec le chemin **absolu** (c'est à dire le chemin complet sur votre disque dur). Les divers champs sont :

* _SAVE_ : le répertoire où seront stockées vos sauvegardes de jeux.
* _PCX_ : le répertoire où seront stockées les captures d'écran de vos jeux.
* _LOG_ : le répertoire où seront stockés les fichiers log de Nesticle contenant le rapport d'erreurs du logiciel
* _PATCH_ : le répertoire où seront stockés vos patches pour vos roms (ceci n'a rien à voir avec les IPS de traduction).

Comme vous pouvez le noter sur la capture d'écran ci-dessus, tous ces fichiers sont sauvegardés par défaut dans le dossier où se trouve Nesticle.
"Assez de palabres, nous on veut jouer maintenant!", allez vous me dire (et vous aurez bien raison ! ). Vous pouvez ouvrir une rom grâce au menu 
"_File -\> Load Rom..._"

![](/emulators/nesticle/configure/load.gif)

Ceci ouvrira la fenêtre suivante :
![](/emulators/nesticle/configure/romch.gif)

Double cliquez sur la rom de votre choix et l'émulation commencera immédiatement. Vous pouvez aller au répertoire supérieur en cliquant sur 
![](/emulators/nesticle/configure/dirup.gif) ou changer de disque dur grâce aux boutons ![](/emulators/nesticle/configure/hdch.gif). Une fois dans 
le jeu, appuyez sur la touche "_Echap_" de votre clavier pour cacher le GUI de Nesticle. Appuyez de nouveau dessus pour le faire réapparaître.

# Raccourcis claviers

Les raccourcis claviers les plus utiles :

* **Echap** : Afficher/masquer le GUI de Nesticle.
* **F5** : Sauvegarde le jeu (la rom doit être chargée).
* **F7** : Charge la sauvegarde du jeu (la rom doit être chargée).
* **Touches 0 à 9 du pâvé alphanumérique** : Change le slot de sauvegarde. Cela permet d'avoir jusqu'à 10 sauvegardes différentes par jeu.
* **F8** : Coupe/réactive le son.
* **F9** : Capture d'écran.

# Aller plus loin

L'option "_File -\> Save PCX Snapshot_" permet de faire des captures d'écran. Elles sont stockées dans le répertoire spécifié lors 
de la configuration des dossiers (ou dans le dossier de Nesticle si cela n'a pas été fait).
![](/emulators/nesticle/configure/snap.gif)

Il faut savoir que le format PCX est un ancien format qui n'est plus utilisé. Vous ne pourrez pas utiliser ces fichiers dans une page web, 
par exemple. Mais vous pourrez cependant les convertir en JPEG ou en GIF avec n'importe quel logiciel d'images.

L'option "_File -\> Log wave output_" permet d'enregistrer les musiques de vos jeux préférés au format Wave en 16 bits 22Khz. 
Cliquez sur "_Start..._", puis entrez un nom de fichier dans la boîte de dialogue. Cliquez ensuite sur "_File -\> Log wave output -\> 
Stop_" pour arrêter l'acquisition. Le fichier sera enregistré dans le répertoire où se situe Nesticle.
![](/emulators/nesticle/configure/sndout.gif)

L'option "_CPU -\> Nes Movie_" permet d'enregistrer des vidéos de vos exploits. Cliquez sur "_CPU -\> Nes Movie -\> Record_" pour 
commencer l'enregistrement puis entrez le nom du fichier. Cliquez sur "_CPU -\> Nes Movie -\> Stop_" pour arrêter l'enregistrement. 
Malheureusement, celles-ci sont enregistréesdans un format propriétaire (NSM) et vous ne pourrez les lire que dans Nesticle. Pour ce faire, 
chargez la rom concernée, puis cliquez sur "_CPU -\> Nes Movie -\> Play_" et saisissez dans la boîte de dialogue le nom du fichier vidéo.
![](/emulators/nesticle/configure/movie.gif)

Nesticle a également été l'un des premiers émulateurs à proposer une option multijoueurs en réseau. Je vous préviens par avance que je n'ai jamais 
testé cette fonction. Ceci se passe dans le menu "_Net_" :
![](/emulators/nesticle/configure/net.gif)

D'après la doc de Nesticle, on ne peut jouer qu'à deux en réseau. Un joueur sera le serveur, l'autre sera le client.

Pour configurer le serveur, aller dans le menu "_Net -\> Start Server_", une nouvelle fenêtre apparait :
![](/emulators/nesticle/configure/server.gif)

Entrez un nom de serveur dans le champs "_Name_" puis choisissez un protocole (vraisemblablement, TCP/IP) puis cliquez sur "_Start_".

Pour configurer le client, allez dans le menu "_Net -\> Connect..._". Dans la nouvelle fenêtre, indiquez le nom du serveur ainsi que le 
protocole (qui doit être le même que le serveur), puis cliquez sur connect. **Je vous rappelle qu'il ne peut y avoir qu'un seul client et 
qu'un seul serveur**. Le fichier readme.txt accompagnant Nesticle met en garde sur les conséquences imprévisibles du manquement à cette règle!!

L'option "_Net -\> Chat window_" permet de discuter avec votre partenaire de jeu.

Pour vous déconnecter, cliquez sur "_Net -\> Disconnect_"

Voilà! Vous devriez maintenant savoir plus que ce qu'il n'en faut pour pouvoir exploiter Nesticle. Il existe d'autres fonctions que nous 
n'avons pas vues ici, mais elles sont pour la plupart destinées aux développeurs. Bon jeu!! :)
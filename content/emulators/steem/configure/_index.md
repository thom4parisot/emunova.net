---
type: guide
user: Exodus
date: '2004-06-18T15:06:18.000Z'
lastmod: '2006-12-31T09:17:07.000Z'
---

# Avec Atari on est tous des Dieux !

Et oui, les slogans de l'époque n'y allaient pas de main 
morte... Mais il faut avouer qu'Atari n'est pas tout à fait étranger au succès 
qu'ont connu les jeux vidéo à la fin des années 80! Heureusement, cette belle 
époque n'est pas vraiment morte, et c'est avec Steem que je vous propose de la revivre. ;)

# Installation

Tout d'abord, commencez par télécharger l'émulateur dans la section [émulateurs Atari ST](/atarist/#emulateurs). 
Dézippez ensuite le fichier téléchargé dans le répertoire de votre choix, par exemple "C:\\Program Files".   
Allez dans ce répertoire et exécutez "Steem.exe". Pour le premier démarrage, le programme vous posera une série de question (en anglais). Au cas où vous seriez anglophobe ;) voici en substance la traduction : 

La première question vous demande si vous voulez placer un raccourci dans 
le menu démarrer (répondez comme vous l'entendez).  
Ensuite, Steem vous averti qu'il aura besoin du "TOS" pour fonctionner. 
Si vous ne l'avez pas déjà fait, téléchargez-le là : [TOS.zip](http://www.blimey.strayduck.com/download.htm)
, puis dézippez-le vers le répertoire où vous avez installé Steem.

Revenons à l'installation de Steem proprement dite : le programme vous demande 
alors de sélectionner ce "TOS". Sélectionnez le fichier "Tos102us.img" situé 
dans le répertoire d'installation de steem. 
Le programme vous demande alors de choisir un répertoire où seront contenues 
les roms à émuler. Cliquez sur OK, puis sélectionnez un répertoire. Vous devrez 
placer toutes les roms atari que vous téléchargez dans ce répertoire afin 
de simplifier l'utilisation de steem. 

L'étape suivante vous propose d'émuler un disque dur atari (en fait, un 
simple répertoire simulera ce disque dur). La plupart du temps, vous n'aurez 
pas besoin de disque dur, cependant il se peut que vous trouviez certaines 
roms sous forme de fichiers ST (par exemple, des fichiers d'extension .prg) 
qui requièrent un disque dur. Si vous voulez simuler un disque dur, cliquez 
sur Oui puis sélectionnez un répertoire qui servira de base à ce disque dur.
Steem vous proposera de répéter l'opération plusieurs fois afin de créer 
d'autres disques durs, mais un seul disque me semble amplement suffisant. 
Cliquez sur Non pour arrêter de créer des disques durs.

Enfin, un message de félicitations vous indique que steem est prêt à être 
utilisé!

# Configuration

Attaquons-nous maintenant à la configuration de Steem. Heureusement, 
les options par défaut sont déjà bien réglées, ce qui me permettra d'écourter 
cette section :p  
Cliquez sur le bouton "options". ![atari st steem](/emulators/steem/configure/steem_options_icon.gif)
Vous obtiendrez cet écran :
![atari st steem](/emulators/steem/configure/steem_options_dialog.gif)

## Section "General"

Il est conseillé de ne pas modifier les paramètres, 
à part peut-être le dernier : "Automatic fast forward on disk access" qui 
permet de réduire les temps de chargement.

## Section "Startup"

Cochez "Start in fullscreen mode" si vous voulez 
que Steem démarre en plein écran lorsque vous le lancez. Vérifiez que les 
cases "Never use DirectDraw" et "Never use DirectSound" soient décochées pour 
un maximum de confort (il vous faut pour cela avoir DirectX installé sur votre 
ordinateur). 

## Section "File association"

Vous pouvez cliquer sur .ST et .MSA si ce 
n'est pas déjà fait. Ainsi, lorsque vous téléchargerez une rom au format ST 
ou MSA (ce sont les formats les plus courants), un simple double-clic sur 
le fichier lancera le jeu. 

Fermez à présent la fenêtre d'options et cliquez sur l'icône ![atari st steem](/emulators/steem/configure/steem_joysticks_icon.gif)
afin de configurer les touches. 

Configurez ici l'émulation du (ou des) joystick(s) : dans "Standard Ports", 
le port 1 correspond au premier joystick, et le port 0 correspond à la souris 
ou au second joystick pour les jeux à plusieurs. Entrez les touches qui vous 
conviennent pour émuler le joystick. Notez que Steem supporte l'utilisation 
de joysticks. Voilà pour l'essentiel de la configuration. Bien sûr, si vous 
vous sentez l'âme d'un bidouilleur, rien ne vous empêche d'aller fouiller 
un peu plus toutes les options de configuration, mais celles enregistrées 
par défaut seront dans la plupart des cas les plus appropriées.

# Utilisation

Maintenant, place aux jeux! Voyons les manipulations de base pour utiliser Steem.

## Utilisation de Steem

Premièrement, la touche magique du clavier qui vous permet de basculer entre 
l'environnement Windows et l'environnement Atari, c'est Pause/Break. La première 
icône à gauche ![atari st steem](/emulators/steem/configure/steem_play_icon.gif) ("Run") a le même effet. 

Deuxième chose importante, pour passer en mode plein écran : cliquez simplement 
sur le bouton d'agrandissement de la fenêtre. Et pour repasser en mode fenêtré, 
commencez par revenir sous environnement Windows (par la touche Pause/Break 
du clavier), une barre apparaîtra en haut de l'écran. Cliquez sur l'icône 
tout à fait à droite "Windowed Mode". 

La deuxième icône à gauche, ![atari st steem](/emulators/steem/configure/steem_fastforward_icon.gif)
"Fast Forward", permet d'accélérer la vitesse du jeu (utile surtout pour passer 
rapidement les temps de chargement). 

La troisième icône ![atari st steem](/emulators/steem/configure/steem_reset_icon.gif)
reboote l'atari. (N'oubliez pas de rappuyer sur "Run" ensuite.) 

La quatrième icône ![atari st steem](/emulators/steem/configure/steem_save_icon.gif)
permet d'enregistrer l'état actuel de l'émulateur, vous autorisant donc à 
faire des sauvegardes n'importe quand quel que soit le jeu. Voilà pour l'interface 
principale. Voyons maintenant comment gérer les disquettes.

## Gestion des disquettes

Cliquez sur le "Disk Manager" ![atari st steem](/emulators/steem/configure/steem_disk_icon.gif), 
tout à droite. Vous devriez arriver dans le répertoire contenant vos Roms. ![atari st steem](/emulators/steem/configure/steem_disk_dialog.gif) 

Pour insérer une disquette ET redémarrer l'atari, double-cliquez sur la Rom désirée. 

Pour insérer une disquette SANS redémarrer l'ordi, soit vous faîtes glisser 
l'icône de la rom vers le cadre en haut correspondant au lecteur A, soit vous 
cliquez-droit et sélectionnez "Insert Into Drive A". 

Enfin, il peut vous être utile de créer une disquette vierge. Pour cela, 
cliquez-droit et sélectionnez "New Standard Disk Image", tout simplement. 
Voilà, vous savez tout maintenant, enfin presque!

ATARI FOREVER ;) ![atari st steem](/emulators/steem/configure/steem_abeille.gif)
---
type: guide
user: Spacewolf1
date: '2004-06-18T14:59:46.000Z'
lastmod: '2004-07-13T12:44:48.000Z'
---

# M2 ???

La version normale de Nebula est un émulateur arcade/Néo Géo. Cette version M2 est elle entièrement dédiée à la borne d'arcade Model 2 de 
Sega. Bien que les 3 plus gros hits (Daytona USA, Sega Rally Championship et Virtua Fighter 2) de cette borne ne soient pas encore émulés, 
vous pouvez tout de même jouer à dautres très bons jeux comme The House of the Dead, Sega Touring Car ou encore Virtual On...

# Configuration des répertoires des roms

Lorsque vous lancez Nebula M2 pour la première fois, celui-ci ignore où sont situées vos roms, allez donc dans _Emulation_
puis _Roms Directories_. Vous obtiendrez alors cette fenêtre:
![](/emulators/nebulam2/configure/neb-01.jpg)

La section _Main Roms directory_ est le répertoire par défaut des roms. Il s'agit en fait du sous répertoire roms 
de Nebula M2\. Néanmoins, il vous est possible de stocker vos roms autre part.  
Après avoir créé un (ou des) répertoire contenant vos roms. Vous pouvez cliquer sur l'icône d'ouverture de dossier à côté de _Alternate 
Directory 1_ (puis _Alternate Directory 2 ..._), sélectionnez alors votre répertoire contenant les roms dans l'explorateur Windows.  
Une fois tous les répertoires indiqués, cliquez sur _Close_.
![](/emulators/nebulam2/configure/neb-02.jpg)  
  
![](/emulators/nebulam2/configure/neb-03.jpg)

Maintenant, cliquez sur _Emulation_ puis sur _Load Rom ..._. Une nouvelle fenêtre va s'ouvrir, elle vous présente 
tous les jeux émulés (comme pour _Mame_). A côté de chaque jeu figure une petite puce, si celle-ci est verte, c'est que vous 
possédez la rom, sinon, la puce sera rouge. Nebula M2 ne rescannant pas toujours automatiquement vos répertoires, cliquez sur _Rescan
Roms_ pour que ce dernier scanne vos répertoires précédemment indiqués. Chaque fois que vous aurez de nouvelles roms en plus/moins, 
je vous recommande de faire un rescan.

Sous la liste des jeux figurent 2 boutons: _Add to Favorites_ et _Remove from Favorites_, ces boutons vous 
permettent (comme vous l'aurez compris) de rajouter/enlever des roms de votre liste de vos jeux favoris.  
A droite de la liste de roms, se trouve le menu _Show Romsets_ dans lequel se trouve 3 options:

* _All_ : affiche toutes les roms dans la liste, que vous les possédiez ou non (rappelez vous: rouge vous avez pas, vert vous avez)
* _Avaible Only_ : affiche toutes les roms que vous possédez (seulement les vertes)
* _Favorites_ : affiche toutes les roms qui figurent dans votre liste de vos jeux favoris (actuellement cette option n'est pas très intéressante mais elle pourrait le devenir lorsque le nombre de jeux émulés augmentera)

Enfin, vous avez la case _Show only Parents_ qui vous permet d'afficher uniquement la "version parente" d'un jeu. Concrètement, 
cela vous évite d'avoir plusieurs versions d'un même jeu dans la liste.
![](/emulators/nebulam2/configure/neb-06.jpg)

# Configuration de la vidéo et du son

Maintenant, nous allons nous occuper des paramètres vidéos.

Cliquez sur _Video_, vous aurez pourrez alors régler les paramètre pour 2 modes: _Fullscreen Mode_ et _Window Mode_, 
ces modes correspondent respectivement au mode plein écran et au mode fenêtré.  
Pour le mode _FullScreen Mode_, commencez par régler la _Resolution_. Vous avez ici 8 résolutions différentes au choix. 
Je vous conseille de prendre _Machine Resolution_ qui mettra la résolution du jeu d'origine, afin d'avoir un résultat plus proche 
de l'original. Maintenant passons aux options, cochez les options suivantes: _Fill Screen_, _Vsync_ et _Triple Buffer_.
![](/emulators/nebulam2/configure/neb-04.jpg)

Pour le mode _Window Mode_, commencez par régler la _Resolution_. Vous avez cette fois-ci 9 choix possible. J'ai entendu dire que 
les modes _Machine Resolution_ et _Double Machine Resolution_ entraînaient des bugs de fonctionnement de l'émulateur mais 
personnellement, je n'ai jamais eu de problème avec ! Sinon, à titre d'information, j'utilise la résolution 640x480\. Pour terminer, cochez 
l'option _Keep Aspect_ qui vous permettra de conserver l'aspect de l'original.

Pour le son, vérifiez uniquement que l'option _Sound Enabled_ du menu _Sound_ puis _SEGA SCSP_ est cochée.

# Et les contrôles ???

Pour pouvoir modifier vos contrôles, vous devez au préalable charger un jeu. Pour cela faite _Emulation_ puis sur 
_Load Rom... _ et double cliquez sur le jeu de votre choix. Faites alors _Game_, _Config Controls_ puis 
_Player 1_ ou _Player 2_ suivant pour qui vous voulez régler les contrôles (_Virtual On_ utilise les 
commande Player 1 _ET_ Player 2 pour 1 seul joueur).
![](/emulators/nebulam2/configure/neb-07.jpg)

Pour configurer les différentes touches, cliquez sur le nom de la touche actuellement affectée, la mention _Press a Key or Button_
apparaît alors. Pressez donc la touche que vous souhaitez utiliser (du clavier ou de votre manette).  
En bas, vous avez 4 options:

* _Save as Default Layout_ : sauvegarde en tant que commandes par défaut
* _Load Default Layout_ : charge les commandes par défaut
* _Save Layout_ : sauvegarde les commande sous un nom de votre choix
* _Load Layout_ : charger les commandes enregistrées

Ces 2 dernières options vous permettent d'éviter de reconfigurer à chaque fois vos commandes en fonction du jeu auquel vous jouez. 
Vous n'avez qu'à les rentrer une fois, puis les sauvegarder et les charger chaque fois que vous rejouerez à ce jeu.  
Une fois vos contrôles réglés, cliquez sur _Close_.

# Problème de gun ???

Nous avons les réglages pour la plupart des jeux Model 2, mais il en reste quelques uns pour lesquels un ultime réglage vous 
sera des plus utile : les shoots du type House of the Dead, GunBlade NY ou bien encore Virtua Cop (ce dernier n'étant pas encore émulé).  
En effet, il peut s'avérer que votre "gun" ne soit pas calibré lors de vos premières parties, si tel est le cas, vous devriez avoir un résultat dans ce 
genre à chacun de vos tirs:
![](/emulators/nebulam2/configure/neb-09.jpg)  

Pour remédier à cela, nous n'avons pas le choix : nous allons devoir calibrer le gun !!! Tout d'abord, après avoir chargé la rom du jeu, 
rentrez dans le _Test Mode_ grâce à la touche _Test_ (F2). Pour vous déplacez à travers ces menu, appuyez sur _Service_
(F1) et appuyez sur _Test_ (F2) pour validez vos choix. Sélectionnez _Gun Setting_ puis _Player1 Gun Adjustment_. Vous 
n'avez plus qu'à viser les 2 coins et c'est fini !!! Vous n'avez plus qu'à quitter le _Test Mode_ (Exit) et place au massacre !!!
![](/emulators/nebulam2/configure/neb-10.jpg)  
  
![](/emulators/nebulam2/configure/neb-11.jpg)  
  
![](/emulators/nebulam2/configure/neb-12.jpg)  
  
![](/emulators/nebulam2/configure/neb-13.jpg)

# Start your engines !!!

Et voilà, vous êtes enfin prêt à jouer !!! Attention toutefois, Nebula M2 n'a pas encore été optimisé et il vous faudra une bonne config pour 
pouvoir jouer. Néanmoins, une dernière option pourra peut être vous sauver: le _Turbo Mode_. Pour l'activer, cliquez simplement dessus dans 
le menu _Emulation_. Attention malgré tout, car la vitesse ainsi augmentée rendra impossible toute sélection en début de partie (choix de 
combattant, de voiture).
![](/emulators/nebulam2/configure/neb-08.jpg)

Enfin, dernier point, si vous possédez une carte graphique _ATI_ et que Nebula M2 ne marche pas (ou très mal), ouvrez le fichier
nebula.ini et cherchez la commande: _ATIClipWorkaround=0_ qui se trouve à la fin du fichier est remplacez le 0 par _1_.
---
type: guide
user: The Jedi
date: '2004-06-18T14:58:17.000Z'
lastmod: '2004-07-13T12:50:40.000Z'
---

# Geepee-t-être une idée !

Loin d'être achevé et pourtant seul programme d'émulation dans son secteur, Geepee32 est indispensable 
pour ceux n'ayant ni les moyens, ni l'envie, ni la patience d'acquérir une console au potentiel énorme.
Voici un petit tour d'horizon d'un émulateur muet mais performant.

# Pré-requis

Pour rendre ce tutorial efficace, n'hésitez pas à effectuer les manipulations en même temps que vous le lisez.
Il y a quelques fichiers indispensables à avoir :

* **GeePee32** (normal vous m'direz, c'est quand même sur lui qu'est basé le tutorial)
* **fw100k.bin** (bios coréen)
* **fw157e.bin** (bios anglais)
* quelques **jeux** (gratuits ou commerciaux)

Tous ces fichiers sont à télécharger sur **Emu Nova**.  
Décompressez le .zip de Geepee32 dans un dossier et placez les fichiers BIOS dans ce même répertoire (dans celui de 'geepee32.exe').  
Pensez à les dézipper eux aussi (sinon l'émulateur sortira une méchante erreur). Lancez maintenant l'émulateur.

# Présentation générale

L'interface de Geepee32 est des plus classiques. Elle ne devrait pas poser de problèmes.
Les menus sont toutefois découpés en plusieurs sections : _File_, _Options_, _Emu_, _Tools_, _View_ et enfin _Help_.
![geepee32 presentation screen gp32 emulator emulateur emulation](/emulators/geepee32/configure/geepee32.gif)

# Menu "Options"

Commencez donc par faire un tour dans le sous menu "Configure ...". Une nouvelle fenêtre s'ouvre devant vous.

## Onglet "keyboard"

Dans le premier menu déroulant, sélectionnez "Clavier" et dans la deuxième liste, activez le mode 'AZERTY' (sauf si votre clavier 
est américain auquel cas activez le 'QWERTY'). Pour ceux qui ne savent pas, regardez les 6 premières touches sur la troisième ligne de votre clavier.  
Assignez maintenant les touches du clavier aux boutons de la GP32\.
![](/emulators/geepee32/configure/options_keyboard.gif)

## Onglet "joystick/gamepad"

Dans le même ordre d'idée, si vous avez une manette sélectionnez là dans la première liste déroulante sinon passez à l'onglet suivant.  
Dans la deuxième liste, choisissez une manette qui ressemble le plus à la votre sinon prenez "Generic Gamepad". Dans tous les cas la 
croix directionnelle n'est pas à configurer, seulement les boutons. Essayez et testez.
![](/emulators/geepee32/configure/options_joystick.gif)

## Onglet "system"

Cet onglet affiche les caractéristiques propres à la configuration de la GP32\. Commencez tout d'abord à changer de BIOS. Dans le groupe "firmware", sélectionnez le _fw157e.bin_. Vous pouvez vous amuser à utiliser d'autres firmwares tels que Wind-Ups en lieu et place du firmware officiel de GamePark. Pratique pour tester les fichiers au lieu de risquer de griller votre GP32\.  
Le son n'étant pas encore supporté par GeePee32, la case n'est pas cochable. En revanche vous pouvez activer des modules supplémentaires, 
utilisés ou pas par les jeux, tels que le module radio (pour jouer à plusieurs) etc.
![](/emulators/geepee32/configure/options_system.gif)

N'oubliez pas de valider votre configuration en appuyant sur "OK". Le plus dur a été fait ;o)  
Enfin tant que nous sommes dans ce menu, allez dans le sous-menu "frameskip" et placez-le à 1 (pour une meilleure fluidité). Si ça rame chez vous, 
augmentez ce frameskip (moins il y a d'images à calculer, moins votre machine aura besoin de calculer).

# Comment se servir de l'émulateur pour jouer ?

Etant donné qu'il n'y a franchement rien d'autre à configurer, autant se faire plaisir et jouer. Pour cela plusieurs étapes :

## File \> Load

* __GXB/FXE/ELF/AXF ...  
pour charger des applications maisons, freewares, applications exécutables etc. C'est le plus courrant.
* _SMC ..._  
pour charger des images SMC (Smart Media Card), l'équivalent de l'ISO pour un CD. A faire pour jouer aux jeux commerciaux.

## Emu \> Resume (F5)

pour lancer le jeu. Cela revient également à cliquer sur la flèche verte 'Play'. Si aucun jeu n'a été chargé auparavant, vous
verrez l'animation du BIOS GamePark. Si un jeu ou application a été sélectionnée, elle sera lancée directement.

## Emu \> Pause (F6)

pour mettre en pause un jeu. Indispensable avant de pouvoir revenir dans le menu "Options \> Configure ..." ou changer de jeu/application.

## Tools \> Screenshot (F12)

accessoirement pour effectuer une capture d'écran. Elle sera enregistrée dans le répertoire du jeu/application actuellement lancée au format .BMP.

Je pense avoir fait le tour de la question, ce n'est pas un émulateur spécialement compliqué alors profitez-en pour découvrir 
cette portable méconnue.
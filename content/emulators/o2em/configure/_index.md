---
type: guide
user: Sigfrodi
date: '2004-06-18T15:02:57.000Z'
lastmod: '2004-07-13T12:22:56.000Z'
---

# Introduction

Machine peu connue car quelque peu éclipsée par la **VCS 2600 d'Atari**, l'**Odyssey**, ou **Philips Videopac** en Europe, en a été l'une des principales concurrentes jusqu'en 1983\. Utiliser l'émulateur **O2EM**
est à peu près aussi simple que d'utiliser la machine, surtout avec le front end. Néanmoins, un petit tutorial peut toujours vous être utile, 
notamment en ce qui concerne la configuration.

# Installation

Pour émuler l'Odyssey, vous aurez besoin :

* D'un émulateur : **O2EM** est un bon émulateur sous MS-Dos émulant convenablement les **Odyssey 1 & 2**
* D'**O2EM Launcher** qui est un front-end pour **O2EM** permettant d'exploiter l'émulateur plus confortabement sous Windows.
* Des **BIOS**, ceux-ci n'étant pas inclus dans **O2EM**. Vous trouverez sur **Emunova** un pack comprenant ceux de l'**Odyssey 2** et des **Philips Videopac+** et **G7400**.
* De **roms** bien sûr, sinon tout cela ne sert à rien! ;)

Vous trouverez tout ce petit monde sur **Emu Nova**, dans la section [émulation Odyssey²](/odyssey2/) de téléchargement.

L'installation est on ne peut plus simple. Créez un dossier pour accueillir l'émulateur (disons _c:\\emul\\odyssey_) et décompressez y 
**O2EM**. Dans le même dossier, placez **O2EM Launcher** et les **BIOS**.

Toujours dans le même dossier, créez un dossier **roms** dans lequel pour copierez vos jeux. **O2EM** ne prend pas 
en charge les fichiers zippés. Vous devrez donc les décompresser (vu leur taille, cela ne fait de toute façon pas une grande différence!).

L'émulateur est désormais installé. :) Double-cliquez sur _O2EMLauncher.exe_ pour lancer l'application. Elle ressemble à ceci :
![o2em](/emulators/o2em/configure/main.jpg)

On trouve deux onglets :

* ![o2em](/emulators/o2em/configure/roms_button.gif) : mène à l'écran sur celui où vous êtes actuellement : c'est à dire sur la liste des roms trouvées par l'émulateur. Il n'en trouve aucune pour l'instant, c'est normal.
* ![](/emulators/o2em/configure/set_button.gif) : mène à l'écran de configuration.

# Configuration

Nous allons maintenant configurer **O2EM**. Cliquez sur ![](/emulators/o2em/configure/set_button.gif). Vous arrivez sur cet écran :
![o2em](/emulators/o2em/configure/settings.jpg)

## Configuration graphique
![o2em](/emulators/o2em/configure/video.gif)

Si vous souhaitez jouer en plein-écran, cochez **Full screen**. Si vous préférez le mode fenêtré, la liste déroulante vous offre le 
choix de la taille de la fenêtre.  
Vous pouvez activer les **Scanlines** en cochant la case éponyme. Cela donnera un rendu visuel plus 
proche d'une télévision et ne consommera guère plus de ressources. Là encore, c'est en fonction de vos préférences personnelles.

---

  
## Configuration des commandes
![o2em](/emulators/o2em/configure/joy.gif)

Ici encore, c'est d'une simplicité extrême!  
Choisissez dans les listes déroulantes le type de contrôle que vous souhaitez pour chaque joueur. Si vous 
avez un joystick, il n'y a aucune configuration, **O2EM Launcher** utilisant DirectInput.  
Pas de remappage des boutons, car l'**Odyssey**
n'en n'a qu'un seul!

---

  
## Configuration des dossiers
![o2em](/emulators/o2em/configure/dir.gif)

Deux éléments sont à changer ici :

* **Games** : pointez vers le dossier où vous avez mis vos roms. Dans mon exemple, il s'agit donc de _c:\\emul\\odyssey\\roms_.
* **Rom File** : sélectionnez le BIOS que vous souhaitez utiliser. Je vous conseille _g7400rom.bin_ qui correspond à un modèle plus évolué de la gamme.

---

  
Notre émulateur est désormais configuré et prêt à être utilisé! :) Cliquez sur ![o2em](/emulators/o2em/configure/roms_button.gif) pour retourner 
à l'écran principal. Si tout va bien, vous devez normalement trouver dans le cadre de gauche la liste des roms présentes dans votre dossier _roms_. 
Si tel n'est pas le cas, vérifiez en premier lieu que vos roms sont _décompressées_.
![o2em](/emulators/o2em/configure/configok.jpg)

Pour lancer une rom, il suffit de cliquer sur son nom dans la liste (si un screenshot est disponible dans le dossier _Shots_, 
il sera affiché à droite), puis cliquez sur ![o2em](/emulators/o2em/configure/start.gif) et le jeu se lancera.

Il arrivera souvent que vous tombiez sur cet écran :
![o2em](/emulators/o2em/configure/which.gif)

La plupart des cartouches proposaient en effet plusieurs mode de jeu ou plusieurs jeux. Appuyez sur une touche de 1 à 10 sur le pavé _alphanumérique_
(celles au-dessus des lettres) et le jeu commencera. Faîtes divers essais et constatez les différences. Pour les jeux pouvant se jouer à plusieurs, c'est 
souvent aussi le moyen d'indiquer si l'on veut jouer seul ou à deux. Pour quitter le jeu, appuyez sur la touche _Echap_.

Voilà, vous avez maintenant tout les éléments pour pouvoir exploiter cette antique machine qu'est l'**Odyssey**! **Amusez-vous bien!** :)

![o2em](/emulators/o2em/configure/thawk.gif)

![o2em](/emulators/o2em/configure/ffight.gif)

![o2em](/emulators/o2em/configure/munchkin.gif)

---
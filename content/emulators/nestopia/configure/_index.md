---
type: guide
user: Sigfrodi
date: '2004-06-18T15:02:19.000Z'
lastmod: '2004-07-13T12:54:51.000Z'
---

Si vous rêvez de retrouver les joies de cette bonne vieille 
**Nintendo NES** sur votre PC, alors sans aucun doute **Nestopia**
fera votre bonheur. Avec son excellente compatibilité et sa gestion du 
**FDS** et des principaux périphériques de la console, 
cet émulateur fera votre bonheur, pour peu que votre machine soit assez 
pêchue (l'auteur recommande un _Pentium 4_ ou un _Athlon_
tout de même). En plus, notre pote **Siskoo** traduit régulièrement 
les nouvelles versions de cet émulateur : on a donc le beurre et l'argent 
du beurre, que demander de plus? (non, la fermière n'est pas disponible, 
bande de vicelards!:p )

# Installation et lancement
![nestopia](/emulators/nestopia/configure/install.gif)

L'installation est des plus simples puisqu'il suffit de dézipper l'archive contenant le programme Nestopia dans un dossier sur votre disque dur.

Pour lancer l'émulateur, il suffit de double-cliquer sur **Nestopia.exe**, surligné dans la capture d'écran ci-contre.

_Conseil :_ Pour ne pas que ce soit le bordel, vous devriez créer un dossier à part pour vos roms et un autre pour les sauvegardes.

---

# Configuration graphique

Vient maintenant le temps de la configuration, et vous allez voir que ce n'est pas difficile.
![nestopia](/emulators/nestopia/configure/video.gif)

Nous allons commencer par les options graphiques, qui se situent dans **"Options-\>Vidéo.."**.

1. Choisissez la résolution d'écran. Si une pléthore 
sont disponibles, préférez le **640x480**. 
Dans la liste à puce en dessous, choisissez **32 bit**.
2. Vous pouvez choisir d'utiliser un filtre graphique, pour améliorer 
le rendu graphique. Sachez toutefois que l'utilisation d'une telle 
option est très lourde en terme d'exploitation des ressources-systèmes. 
Si votre PC n'est pas assez puissant, n'en appliquez pas.
3. Je vous conseille de laisser la _localisation du tampon hors 
écran_ dans la **Mémoire Système**
plutôt que de la placer dans la Mémoire Vidéo. 
Si c'est moins rapide, cela évite des problèmes graphiques 
dans certains cas.
4. Conservez également la **palette interne par défaut**, 
sauf si vous disposez d'un fichier de palette spécifique pour 
un jeu, auquel cas sélectionnez **"Personnaliser"**
puis cliquez sur **"Parcourir"** pour choisir 
le fichier de palette à charger.
5. Les paramètres de couleurs vous permettent de modifier les 
couleurs à l'écran en jouant sur la luminosité, 
la saturation et la teinte des couleurs. Le bouton **"Redémarrer"**
permet d'annuler les modifications en cours. Changer ces paramètres 
est une question de goût mais personnellement je n'y touche 
pas.

Une fois tout cela terminé, cliquez sur le bouton **OK**.

---

![nestopia](/emulators/nestopia/configure/scrsz.gif)

Restent deux options à valider, toutes deux dans le menu **"Visualiser"** :

* Dans **"Taille de l'Ecran"**, choisissez 
**"Max"** afin que la fenêtre de jeu 
occupe la plus grande partie de l'écran possible en maintenant 
les proportions exactes.
* Sélectionnez ensuite l'option **"Fullscreen"** car vous préférez sûrement jouer en plein-écran plutôt que dans une fenêtre rikiki! ;)
![nestopia](/emulators/nestopia/configure/flscr.gif)

---

# Configuration sonore
![nestopia](/emulators/nestopia/configure/optsnd.png)

Les options sonores se trouvent fort logiquement 
dans **"Options-\>Son.."**. Vous n'avez normalement 
rien à modier si ce n'est à la rigueur les paramètres 
de qualité sonore. Un petit descriptif néanmoins :

1. Vérifiez que la case **"Activer"**
est cochée auquel cas l'ambiance sonore vous paraîtra 
quelque peu austère. :p 
2. Cette liste n'est utile que si vous disposez de plusieurs cartes son et vous permet de choisir celle qui générera le son. Si vous n'en n'avez qu'une, vous n'avez pas à toucher à ce paramètre.
3. Les options d'échantillonnage vous permettront de configurer 
la qualité sonore. Choisissez **44100** dans la 
liste déroulante et **16 bit** dans la liste à 
puce pour obtenir une qualité optimale.  
Si votre PC est peu puissant, **22050** permettront de 
gagner quelques images par seconde au détriment toutefois de 
la qualité sonore.
4. Veillez à ce que **toutes les cases des canaux soient 
cochées**. Dans le cas contraire, certains sons ne seraient 
pas restitués.

Une fois cela fait, cliquez sur **OK**.

---

# Configuration des contrôles
![nestopia](/emulators/nestopia/configure/ctrlopt.png)

Sans aucun doute éprouverez vous 
le besoin de configurer votre manette pour pouvoir casser du méchant 
dans _Life Force_. La configuration des contrôles se fait 
dans **"Options-\>Contrôleur.."**.

La fenêtre présente 3 espaces, avec de gauche à droite :

* Le choix du contrôleur NES : les 4 pads, le Power Pad et Général, 
ce dernier comportant quelques options d'ordre général;
* Au milieu les différents boutons du périphérique 
sélectionné à gauche. A noter la possibilité 
d'actionner un _autofire_ pour chaque pad ;
* A droite, les boutons de votre clavier ou de votre manette affiliés 
aux bontons du pad NES. Dans l'exemple ci-contre, le bouton _Start_
de la manette 1 est affilié au bouton 11 du joystick.

Pour configurer le pad :

1. Choisissez le pad à configurer dans la liste à gauche 
(dans l'image ci-contre, encadré en vert)
2. Cliquez sur **"Tout choisir"** (en jaune, ci-contre)
3. Appuyez sur les divers boutons de votre clavier/manette pour configurer 
chaque bouton du pad NES en suivant l'ordre de la colonne du milieu.

Quand vous avez terminé, cliquez sur **OK**.

---

**_Note :_** Sur la console originale, le bouton A est à droite, le bouton B est à gauche :
![nestopia](/emulators/nestopia/configure/nesadv.jpg)
![](/emulators/nestopia/configure/port.gif)

Allez maintenant dans le menu **"Machine"**.

Vérifiez que **"Sélection auto 
du contrôleur"** est coché.

Dans chaque sous-menu **"Port\[x\]"**, 
vérifiez que les bons contrôleurs sont sélectionnés.

**_Note :_** Le _zapper_ est 
le pistolet et était en général branché sur le port 2 de la console.

---

# Préférences générales

Il nous reste à définir des critères divers, afin d'assurer un fonctionnement plus confortable de l'émulateur.
![nestopia](/emulators/nestopia/configure/chemins.gif)

Rendez vous d'abord dans **"Options-\>Chemins.."** afin que nous puissions indiquer à Nestopia où trouver par défaut les différents fichiers dont il peut avoir besoin.

1. **Fichiers-images** : indique l'emplacement de vos roms.
2. **Fichiers de Batterie-Ram** : Nestopia crée 
dans le dossier spécifié les fichiers de batterie nécessaires 
au fonctionnement des cartouches disposant d'une pile de sauvegarde.
3. **Fichiers NSP** : indique à Nestopia où 
chercher les fichiers de sons au format _Nesticle_. En tout 
état de cause, il y a fort à parier que vous n'ayiez 
pas besoin de configurer cela, cette option étant peu utile.
4. **Sauvegardes d'état** : indique où Nestopia 
doit stocker les sauvegardes de vos jeux effectuées avec l'option 
de sauvegarde inclue dans l'émulateur.
5. **Fichiers IPS** : indique à Nestopia où 
se trouvent les _IPS_ (patches pouvant être appliqués 
sur une rom).

Cliquez sur le bouton **"Parcourir"**
à droite de chacune des catégories citées ci-dessus 
pour choisir un dossier (par défaut, Nestopia se réfère 
au dossier où il est installé). Cochez ensuite les cases 
qui vous semblent intéressantes puis cliquez sur **OK**.

---

![nestopia](/emulators/nestopia/configure/prefs.gif)\>

Nous devons maintenant aller dans le menu **"Options-\>Préférences.."**, 
dans lequel on distingue trois espaces :

1. Cochez dans cet espace les options que j'ai surlignées en 
jaune ci-contre.
2. Le deuxième espace sur l'image à gauche permet d'associer 
les roms NES à Nestopia. Cela permet de lancer une rom dans 
Nestopia en double-cliquant desssus dans Windows. Si cette option 
vous intéresse, cochez toutes les cases.
3. Le troisième espace permet de configurer l'enregistrement 
des fichiers internes à Nestopia. **"Paramètres"**
doit impérativement être coché, les deux autres 
sont facultatifs. 

Une fois vos préférences établies, 
cliquez sur le fatidique bouton **OK**.
![nestopia](/emulators/nestopia/configure/timing.gif)

Les options de timing nous permettront d'influer sur 
la vitesse d'émulation, et seront particulièrement utiles 
pour les petites configurations. Elles se trouvent dans le menu "Options-\>Timing..". 
Deux espaces s'offrent à nous :

1. L'espace _Timing_ permet de compenser le manque éventuel 
de puissance de votre ordinateur pour émuler la NES à 
pleine vitesse. Si la vitesse d'émulation est convenable avec 
les réglages déjà établis, laissez cochée 
**Synch. vers Taux de Rafraichi.**  
Si par contre l'émulation n'est pas assez rapide, sélectionnez 
**Saut d'image auto** et réglez le saut d'image 
avec la réglette. Il vous faudra expérimenter pour trouver 
le bon réglage. Personnellement, je préfère désactiver 
les filtres dans les options graphiques plutôt que d'activer 
le saut d'image, cela ayant souvent un impact négatif sur la 
jouabilité et la fluidité générale de l'animation.  
Laissez par contre **VSync** cochée.
2. L'espace _Vitesse_ permet de régler la vitesse _dans 
l'absolu_ de Nestopia, c'est-à-dire que l'émulateur 
tâchera le plus possible de conserver le nombre d'images par 
seconde indiqué ici. Par défaut, l'option est réglée 
sur 60fps, dans un souci de fidélité envers les consoles 
_NTSC_ et _PAL_. Si cela ne vous convient pas, vous 
pouvez accélérer ou décélérer la 
vitesse d'émulation en décochant **Utiliser les 
FPS par défaut** et en indiquant le nombre de FPS (images 
par seconde) que vous souhaitez à l'aide la réglette 
en dessous.  
_Note :_ si vous voulez retranscrire la vitesse d'une console 
française (_SECAM_), réglez la vitesse sur 50\.

# Jouer :)

![nestopia](/emulators/nestopia/configure/ouvrir.gif)  
  
![nestopia](/emulators/nestopia/configure/recent.gif)  
  
![nestopia](/emulators/nestopia/configure/save.gif)

Maintenant que nos réglages sont terminés, nous allons pouvoir jouer!

Pour lancer un jeu, allez dans le menu **"Fichier-\>Ouvrir"**. Cela appellera la fenêtre 
d'ouverture de fichier. Double-cliquez simplement sur votre rom et le 
jeu se lancera automatiquement. A noter que Nestopia prend en charge les 
fichiers zippés.

Les 10 derniers jeux auxquels vous avez joué sont 
présents dans **"Fichier-\>Fichiers récents"**. 
Vous pouvez dès lors reprendre votre partie d'un seul clic! :)

Quand vous êtes dans le jeu, appuyez sur la touche 
**Echap** pour masquer la barre de menu.

Le menu **"Fichier-\>Sauvegarde d'Etat 
Rapide"** permet de sauvegarder le jeu en cours à n'importe 
quel moment. Vous disposez de 9 slots de sauvegarde par jeu. Vous pouvez 
également sauvegarder à tout moment en appuyant sur une 
touche numérique du pâvé alphanumérique (au-dessus 
des lettres) de votre clavier. Appuyez par exemple sur 1 pour sauver dans 
le premier slot.

Le menu **"Fichier-\>Chargement d'Etat Rapide"**
vous permet de charger une partie précédemment sauvegardée. 
Vous pouvez charger un jeu en appuyant simultanément sur _Shift_
(majuscule) et un chiffre sur le pâvé alphanumérique 
du clavier. Exemple : _Shift-1_ pour charger la sauvegarde dans 
le slot 1\.

---

# Le FDS

Le _FDS_ (_Famicom Disk System_) était 
un module sorti au Japon en 1986 pour la _Famicom_ (_NES_ japonaise) 
afin de pouvoir exploiter des jeux sur disquettes. Le bidule eut un certain 
succès mais eu pour effet d'occasionner une recrudescence du piratage. 
Par ailleurs, les disquettes avaient une trop faible capacité. Quelques 
grands jeux que nous avons connus sur cartouche en Occident sont d'abord sortis 
sur disquette, parmi lesquels _Metroid_ et _Castlevania_ (aka 
_Akumajo Dracula_).

Nestopia permet d'utiliser les roms provenant de disquettes 
et qui portent l'extension "_fds_". Il vous faut pour cela 
le BIOS du FDS (**disksys.rom**) que vous devez placer dans le 
dossier de Nestopia.

Par ailleurs, _il est conseillé de dézipper vos 
roms FDS_. En effet, il arrive que le système ait besoin d'écrire 
sur les disquettes, ce que Nestopia ne peut faire quand la rom est dans un zip. 
Il vous proposera alors de réécrire le fichier modifié 
et non zippé ce qui au final est une perte de place.
![nestopia](/emulators/nestopia/configure/fdsopt.png)

Dans un premier temps, il faut configurer les options 
du FDS. Cela se passe dans le menu **"FDS-\>Options.."**.  
Cliquez sur le bouton **Parcourir** dans la zone encadrée 
en vert ci-contre et indiquez la localisation du BIOS FDS.

Ne cochez pas la case **"Disque(s) en Ecriture 
Protégé"**, cela apporte plus de problèmes 
qu'autres choses.

Cliquez sur **OK**.

---

![nestopia](/emulators/nestopia/configure/ouvrir.gif)

Ouvrez la rom normalement via le menu **"Fichier-\>Ouvrir.."**. 
Le jeu va démarrer normalement. N'oubliez pas qu'il s'agit de disquettes 
et que le temps de chargement est donc sensiblement plus long que pour 
une cartouche.

---

![nestopia](/emulators/nestopia/configure/akumajo.gif)

Il y a fort à parier que vous tombiez 
à un moment sur l'écran ci-contre, vous demandant de changer 
de disquette (ici _Akumajo Dracula_). Ne vous étonnez pas 
de ne pas avoir de fichier de disquette B. En fait, les disquettes du 
FDS étaient double-face mais le lecteur n'était que simple-face! 
En fait, le jeu vous demande de retourner la disquette dans le lecteur. ^^

Pour ce faire, allez dans le menu **"FDS-\>Face du Disque"** et cliquez sur **B**.

Une fois cela fait, appuyez sur la touche **Start**
de votre manette. Le jeu devrait continuer à se charger normalement.
![nestopia](/emulators/nestopia/configure/swap.gif)

---

# Seul c'est bien, à plusieurs c'est mieux!

Nestopia dispose d'un client _Kaillera_ intégré 
vous permettant de jouer sur Internet.
![nestopia](/emulators/nestopia/configure/net.gif)

Pour lancer un jeu en réseau, allez d'abord dans le menu **"Fichier-\>Réseau.."**.

Vous tombez alors sur la fenêtre ci-contre. Cliquez sur **Ajouter**
pour ajouter des jeux à la liste des roms auxquelles vous souhaitez 
jouer sur Kaillera. Un jeu ajouté apparaît dans la liste 
à gauche de la fenêtre. Cliquez sur un des jeux de cette 
liste puis sur **Enlever** pour l'enlever de la liste des 
jeux jouables sur Kaillera. Le bouton **Tout Vider** permet 
de vider intégralement la liste des jeux que vous proposez en réseau.

Cochez la case **Soumettre les noms de la Base de Données**
et **Jouer en Plein-Ecran** (si votre machine est suffisamment puissante).

Cliquez ensuite sur **Démarrer Kaillera**. La suite 
se passe exactement comme avec n'importe quel autre émulateur sous 
Kaillera.

---
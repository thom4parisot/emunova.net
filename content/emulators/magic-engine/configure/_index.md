---
type: guide
user: Sigfrodi
date: '2004-06-18T14:59:03.000Z'
lastmod: '2008-08-02T18:28:21.000Z'
---

![Tuto Magic Engine -  logo](/emulators/magicengine/configure/logo.gif)

Même s'il est payant, Magic Engine est incontestablement le meilleur émulateur 
PC-Engine sur le marché. Outre son excellente compatibilité avec
l'ensemble des jeux sur **Hu-Card**[1](#quote1),
il offre un excellent support du lecteur de CD-ROM (**Super CD-ROM**
et **Super CD-ROM²**). Magic Engine est également le
seul émulateur à ma connaissance capable de faire tourner, et
ce dans d'excellentes conditions, les quelques jeux conçus pour la **Supergraph'X**[2](#quote2).
Et franchement, rien que pour _Aldynes_ et _Ghouls & Ghosts_,
c'est une vraie joie!

La version de démonstration de Magic Engine ne permet
cependant d'apprécier cet émulateur que 5 courtes minutes (même
si une astuce un peu contraignante permet d'escamoter cette limite - je ne l'expliquerai
pas, mais fouillez un peu dans le fichier _readme.txt_ livré avec
l'émulateur pour le savoir. ;) Non RoM, ce n'est pas l'énigme
de la clef du Père Fouras! :p ).

Néanmoins, je ne peux que vous conseiller d'acheter
cet excellent programme qui ne coûte que 15 et qui vous donne droit
à des mises à jour gratuites et à la possibilité
de participer à un tirage au sort mensuel permettant de gagner un CD-ROM
PC Engine original!

---

# Installation

La version de démonstration de Magic Engine est disponible
dans la section[émulateurs PC Engine](/pcengine/#emulateurs) d'Emu Nova. Une fois téléchargé,
il suffit de décompresser le zip obtenu dans un dossier sur votre disque
dur.

Je vous recommande de créer un répertoire dans
le dossier où vous avez installé Magic Engine pour y loger vos
roms car dans sa configuration de base, Magic Engine est assez bordélique,
plaçant tous les fichiers qu'il génère (sauvegardes, screenshots...)
dans le dossier où il est installé!

Vous pouvez néanmoins créer un dossier spécial
pour vos sauvegardes ainsi qu'un autre pour vos screenshots. Voyez [ici](#paths).

Vous avez désormais la possibilité de lancer
l'émulateur en double-cliquant sur le fichier _PCE.exe_.

Vous tomberez alors sur le menu de la très sympathique
interface de Magic Engine, contrôlée avec le clavier (les flèches
pour naviguer, la touche _Entrée_ pour choisir une option du menu)
ou votre manette :
![Tuto Magic Engine - le menu principal](/emulators/magicengine/configure/menu.png)

---

# Configuration du joypad

Pour atteindre les options de configuration des contrôles,
il suffit de sélectionner _CONFIG_ dans le menu principal. Vous
tomberez alors sur l'écran suivant :
![Tuto Magic Engine -  configuration des commandes](/emulators/magicengine/configure/joyconf.png)

Commencez par sélectionner le pad à configurer
dans la fenêtre en haut à gauche. La PC Engine pouvait accueillir
jusqu'à 5 manettes à l'aide d'un adaptateur, ce qui permet de
franches parties de rigolade sous _Bomberman_! Une fois le pad à
configurer sélectionné, appuyez sur _Entrée_ pour
que le curseur passe dans la fenêtre principale. Vous pouvez y voir une
manette PC Engine à 6 boutons.

En vérité, la majorité des pads PC Engine
ne disposaient que de deux boutons principaux et peu de jeux ont tiré
parti des manettes à 6 boutons (_Street Fighter 2_ est le seul
à ma connaissance, en dehors des quelques adaptations Neo Geo sur **Arcade
Card**[3](#quote3)). En dehors de la croix directionnelle,
les deux boutons qui vous seront vraiment utiles sont ceux surlignés
en _bleu_ sur la capture d'écran ci-dessus, ainsi que les boutons
_Select_ et _Start_, en _rouge_.

Les interrupteurs surlignés en _jaune_ sur la
capture d'écran permettent d'affilier les autofires des boutons _I_
et _II_ à un bouton de votre manette. Il est également
possible de configurer l'interrupteur activant le ralentisseur, option qui vous
sera peu utile : Magic Engine dispose d'une fonction de contrôle des images
par seconde bien plus performante! (cf. [_raccourcis-clavier_](#keyboard))

Enfin, le bouton _MENU_ (surligné en _vert_
sur la capture) permet de configurer un bouton pour appeler l'interface de Magic
Engine à tout moment. Cela est facultatif, une simple pression de la
touche _Echap_ de votre clavier le faisant tout aussi bien.

Déplacez le curseur (peu visible) sur le bouton que
vous souhaitez configurer puis appuyez sur _Entrée_ et enfin pressez
le bouton de votre manette ou la touche du clavier que vous souhaitez utiliser.

Une fois votre manette configurée, appuyez sur _Echap_
pour sortir.

---

# Lancer un jeu Hu-Card

Par défaut, Magic Engine ne permet de ne configurer
que les contrôles, ce qui est largement suffisant pour lancer un jeu sur
cartouche!

Maintenant qu'elle est configurée, vous pouvez naviguer
dans le menu de Magic Engine à l'aide de votre manette (si vous en avez
une). Pour lancer une rom, il suffit de sélectionner l'option _LOAD
ROM_. Cela ouvrira la fenêtre suivante :
![Tuto Magic Engine -  charger une rom](/emulators/magicengine/configure/roms.png)

Si vous n'avez pas placé vos roms dans le dossier où
se trouve Magic Engine, vous ne les verrez pas à l'écran. Il faut
en effet vous déplacer dans le dossier où elles se situent sur
votre disque dur. Les dossiers sont indiqués en jaune à l'écran
(surlignés en _bleu_ sur la capture d'écran) et précédés
d'un losange. Le losange suivi de deux points permet de monter dans le dossier
supérieur. Les disques durs C, D, E et F (surlignés en _orangé_)
sont également présents, entre crochets, dans la fenêtre.
Si vous avez besoin d'accéder à des lecteurs portant une lettre
plus éloignée dans l'alphabet, veuillez vous reporter à
la section [_Modifier les options d'affichage de l'écran
de chargement des roms_](#romload).

Déplacez vous dans l'arborescence de sorte à
vous placer dans le dossier contenant vos roms. Vous verrez alors la liste de
celles-ci comme indiqué sur la capture d'écran (surlignées
en _vert_). Ne vous étonnez pas si les noms affichés ne
correspondent pas aux noms de vos fichiers : par défaut, Magic Engine
va scanner le header des roms afin d'en extraire le titre exact. Le titre d'une
rom sera parfois précédé d'une petite icône :
![Tuto Magic Engine -  US flag](/emulators/magicengine/configure/us.gif)

: indique qu'il s'agit d'une version **Turbograph'X**[4](#quote4)
du jeu, c'est-à-dire d'une version américaine.

---

![Tuto Magic Engine -  Supergraph'X](/emulators/magicengine/configure/sgx.gif)

: indique qu'il s'agit d'un jeu spécifique à la **Supergraph'X**.

---

Déplacez le curseur sur le titre du jeu auquel vous
souhaitez jouer. Si vous avez fait une capture d'écran du titire sélectionné,
celle-ci apparaîtra en miniature. Appuyez sur _Entrée_ ou
sur le bouton _I_ de la manette PC Engine pour lancer le jeu.

_Note_ : Magic Engine est capable de lire les roms zippées.

![](/emulators/magicengine/configure/aldynes.png "Aldynes (SGX)")
![](/emulators/magicengine/configure/neutop2.png "Neutopia 2")

![](/emulators/magicengine/configure/g&g.png "Ghouls & Ghosts (SGX)")
![](/emulators/magicengine/configure/pop.png "Populous")

---

# Sauver et charger un jeu

Sauver et charger un jeu est d'une simplicité enfantine.
Pendant le jeu, appelez le menu à l'aide du bouton _MENU_ que
vous avez configuré ou de la touche _Echap_ de votre clavier.

Dans le menu, sélectionnez _SAVE GAME_ si vous
souhaitez sauver le jeu ou _LOAD GAME_ si vous souhaitez reprendre un
jeu préalablement sauvegardé. Dans les deux cas, la fenêtre
qui apparaît est comparable :
![Tuto Magic Engine -  Charger et sauver un jeu](/emulators/magicengine/configure/loadmenu.png)

Par défaut, Magic Engine autorise quatre slots de sauvegarde
par jeu. Le temps indiqué à droite du numéro de la sauvegarde
indique le temps de jeu écoulé dans le jeu au moment de la sauvegarde.
Notez que ce chiffre n'est pas ramené à 0 quand vous chargez un
jeu. Cette caractéristique est en tout cas un excellent moyen de savoir
quelle est la sauvegarde la plus avancée pour le jeu en cours. En plus
de cela, un screenshot est automatiquement pris lors de la sauvegarde, celui
apparaissant dans la fenêtre de chargement d'une sauvegarde.

Pour sauver comme pour charger, déplacez le curseur
sur le slot de sauvegarde désiré puis confirmez, l'action sera
immédiatement effectuée.

---

# Raccourcis-claviers

Magic Engine propose plusieurs raccourcis-claviers bien pratiques :

* **F1**, **F2**, **F3**, **F4**
: Sauvegarder un jeu. Une touche par slot de sauvegarde.
* **F5**, **F6**, **F7**, **F8**
: Charger une sauvegarde. Une touche par slot de sauvegarde.
* **F11** : Zoom : une pression sur cette touche réduit
l'image à la moitié de l'écran. Appuyez de nouveau
pour que l'image reprenne la totalité de l'écran.
* **F12** : Applique un effet simulant une télévision à l'image.
* **Page Up/Page Down** : Ajuste le gamma. Utile si l'image
vous apparaît trop claire ou trop foncée.
* **TAB** : Active/désactive le frameskipping (saut
d'images) automatique.
* **Retour arrière** : Fait une capture d'écran.
Par défaut, les screenshots sont stockés dans le dossier de
Magic Engine, au format _PCX_.Voyez [ici](#paths) pour
changer le dossier par défaut des sauvegardes.
* **Touches 1 à 6 du pavé numérique**
: Permet de ralentir le jeu en limitant le nombre d'images par seconde.
Par défaut, les jeux tournent à 60fps. Appuyer sur 1 réduit
la vitesse à 10fps, 2 à 20fps etc.
* **0 sur le pavé numérique** : ramène
la vitesse du jeu à 60fps.

---

# Les jeux sur CD-ROM

Magic Engine offre également la possibilité de
jouer aux jeux sur CD-ROM, même si cela est un peu plus compliqué.

Vous pouvez indifféremment jouer avec des CD (gravés
ou originaux) ou avec des images-disques préalablement montées
avec un outil tel que _[DaemonTools](http://www.daemon-tools.cc/dtcc/download.php)_.

Il vous faut tout d'abord les **System Cards**[5](#quote5).
Vous pouvez les récupérer dans la section [utilitaires PC Engine](/pcengine/)
d'Emu Nova, où vous trouverez un pack rassemblant la 1, la 3 et la Game
Express Card.

La **System Card 3** sera la plus utile car elle
permet de faire fonctionner 90% des jeux sur CD-ROM classiques ainsi que certains
jeux basés sur l'**Arcade Card**. C'est celle que vous utiliserez
dans 99% des cas!

Au cas où un jeu ancien refuserait de tourner avec celle-ci,
vous pouvez vous reporter sur la **System Card 1**.

La **Game Express Card** permet de faire tourner
les jeux conçus pour la Game Express. Ils sont peu courants.

Une fois le pack de System Cards récupéré,
décompressez le dans le dossier où vous avez installé Magic
Engine.

Il nous faut maintenant éditer le fichier _pce.ini_.
Ouvrez le avec n'importe quel éditeur de texte (le bloc-notes de Windows
fera parfaitement l'affaire) et parcourez le fichier jusqu'à trouver
les lignes suivantes :

    \# ----
    \# CD-ROM settings
    \# ----
    \[cdrom\]
    ;
    ; CD-ROM drive
    ; --
    ; 0 -\> first CD-ROM drive \[default\]
    ; 1 -\> second CD-ROM drive
    ; ...
    ;
    drive=
    ;
    ; CD-ROM drive letter
    ; --
    ; (Windows 2000/XP only)
    ;
    ; D:
    ; E:
    ; ...
    ;
    drive\_letter=


![Tuto Magic Engine -  repérer les lecteurs de CD](/emulators/magicengine/configure/explorer.png)

Repérez maintenant le numéro du lecteur de CD-ROM que vous allez utiliser dans
le _Poste de Travail_. Le premier lecteur de CD-ROM est numéroté
0, le suivant 1 etc (comme il est numéroté ci-contre).
Si vous utilisez Windows 2000 ou Windows XP, il vous faut noter la lettre du
lecteur utilisé (entouré en rouge ci-contre - dans mon cas H:).
Notez que les CD-ROM PC Engine sont en général identifiés
comme des CD Audio, aussi ne vous étonnez pas du label "_Audio
CD_". ^^

Nous devons maintenant modifier fichier _pce.ini _:

* _Si vous utilisez Windows 95, 98 ou Me_ : modifiez la ligne surlignée
en _rouge_ ainsi : `drive=x` où _x_ est
le _numéro_ du lecteur utilisé.
* _Si vous utilisez Windows 2000 ou Windows XP_ : Modifiez la ligne
surlignée en _bleu_ ainsi : `drive_letter=x` où
_x_ est la _lettre_ du lecteur utilisé.

Une fois ceci fait, sauvegardez le fichier et fermez le. Si
vous n'avez pas inséré votre CD ou que vous n'avez pas monté
l'image à utiliser, faîtes-le maintenant et lancez Magic Engine.
Rendez-vous dans _BOOT CD_.

---

![Tuto Magic Engine -  le menu System Card](/emulators/magicengine/configure/cdmenu.png)

Sélectionnez ici la System Card à utiliser. Les System Cards non trouvées par
Magic Engine seront grisées et vous ne pourrez pas les utiliser.
Les **Magic System Cards** sont intégrées dans Magic
Engine et sont toujours disponibles mais elles offrent une compatibilité
très limitée et sont par là même inutiles.
Une fois la System Card choisie, le jeu se lancera tout seul!

---

![](/emulators/magicengine/configure/airz.png "Super Airzonk")

![](/emulators/magicengine/configure/gaingr.png "Gain Ground SX")

![](/emulators/magicengine/configure/sprigg.png "Spriggan")

# Utilisation avancée (_pce.ini_)

Les astuces suivantes se font en éditant le _pce.ini_,
qui comporte de nombreux paramètres.

## Modifier les options sonores

Dans le fichier _pce.ini_, recherchez la section `**[SOUND]**`.
Les lignes intéressantes sont indiquées ci-dessous avec leurs
paramètres possibles. Les paramètres notifiés par _(défaut)_
sont ceux utilisés par défaut dans Magic Engine. Placez la valeur
souhaitée après le signe = de la ligne et sauvegardez le fichier.

* `**sound**` : permet d'activer ou de désactiver
le son.
_Valeurs reconnues_ :
- y _(défaut)_
- n
* `**frequency**` : permet de modifier le taux d'échantillonnage
sonore (en Hz). Si votre PC rame, vous pouvez baisser ce chiffre au détriment
de la qualité.
_Valeurs reconnues_ :
- 8000
- 22050
- 44100 _(défaut)_
- 48000
* `**16bit**` : active/désactive le son en
16 bits.
_Valeurs reconnues_ :
- y _(défaut)_
- n : Le son est alors en 8 bits.
* `**stereo**` :active/désactive le son stéréo.
_Valeurs reconnues :_
- y _(défaut)_
- n : Le son est alors en mono.

## Modifier les options graphiques

Dans le fichier _pce.ini_, recherchez la section `**[VIDEO]**`.
Les lignes intéressantes sont indiquées ci-dessous avec leurs
paramètres possibles. Les paramètres notifiés par _(défaut)_
sont ceux utilisés par défaut dans Magic Engine. Placez la valeur
souhaitée après le signe = de la ligne et sauvegardez le fichier.

* `**windowed**` : permet de configurer Magic Engine
pour jouer en plein-écran ou en mode fenêtré.
_Valeurs reconnues_ :
- y : Magic Engine se lancera alors en mode fenêtré.
- n _(défaut)_ : Magic Engine sera alors en full screen.
* `**filtering**` : permet d'activer le _bilinear
filtering_, ce qui permet d'améliorer le rendu de l'image en
lui appliquant un lissage. Cela nécessite cependant une machine plus
puissante.
_Valeurs reconnues_ :
- y
- n _(défaut)_
* `**vsync**` : active/neutralise la synchronisation
vidéo.
_Valeurs reconnues_ :
- y
- n _(défaut)_
* `**res_256**` , `**res_320**`,
`**res_352**` : permettent de modifier la résolution
utilisée par Magic Engine dans les trois résolutions d'écran
exploitables par la PC Engine (256x224 , 320x224 et 352x224). La valeur
doit être écrite _x_,_y_ où _x_
est la largeur de l'image et _y_ la hauteur et doit être une
résolution supportée par votre carte graphique et votre écran.
Ces paramètres ne sont utilisables qu'en cas d'utilisation de Magic
Engine en plein-écran._
Valeur par défaut_ : `640,480`.
`_IMPORTANT_` : Soyez sûr
des valeurs que vous mettez! Des valeurs non supportées par votre
écran peuvent l'endommager. Le site (ou moi-même) ne saurait
être tenu responsable pour d'éventuels dysfonctionnements causés
par de mauvais réglages.
* `**win_res_256**` , `**win_res_320**`
, `**win_res_352**` : la même chose que les
paramètres précédents mais dans le cadre d'une utilisation
fenêtrée de Magic Engine.

## Modifier les options d'affichage de l'écran de chargement des roms

Dans le fichier _pce.ini_, recherchez la section `**[LOAD]**`.
Les lignes intéressantes sont indiquées ci-dessous avec leurs
paramètres possibles. Les paramètres notifiés par _(défaut)_
sont ceux utilisés par défaut dans Magic Engine. Placez la valeur
souhaitée après le signe = de la ligne et sauvegardez le fichier.

* `**drive_list**` : permet de modifier la liste
des lecteurs navigables. Ecrivez simplement les lettres de lecteur en majuscule,
les unes derrière les autres, sans caractère de séparation.
_Valeur par défaut_ : `CDEF`.
* `**use_rom_file_name**` : par défaut, Magic
Engine lit le header de chaque rom pour en extraire le nom du jeu. Activer
ce paramètre permet de forcer Magic Engine à afficher le nom
du fichier au lieu du nom de la rom.
_Valeurs reconnues_ :
- y
- n _(défaut)_

## Réglages divers

Dans le fichier _pce.ini_, recherchez la section `**[MISC]**`.
Placez la valeur souhaitée après le signe = de la ligne et sauvegardez
le fichier.

* `**nb_state_file**` : Permet de définir
le nombre de sauvegardes disponibles par jeu. Les valeurs tolérées
s'échelonnent entre 4 et 8\.
_Valeur par défaut_ : `4`.

## Réglages des chemins

Ces paramètres permettent de définir la localisation
des fichiers générés par Magic Engine ainsi que la localisation
des fichiers qui lui sont nécessaires.

Dans le fichier _pce.ini_, recherchez la section `**[PATH]**`.
Si vous ne mettez aucune valeur à ces paramètres (comme c'est
le cas par défaut), Magic Engine utilisera le dossier où il est
installé.

* `**system_card_1**` , `**system_card_2**`
, `**system_card_3**` , `**system_card_4**`
: ces paramètres permettent de définir l'emplacement des diverses
System Cards que vous souhaitez utiliser. Si vous avez placé vos
System Cards dans le dossier de Magic Engine et que vous n'avez pas renommé
ces fichiers, vous n'avez normalement pas à éditer ces paramètres.
Dans le cas contraire, indiquez le chemin complet vers celles-ci.
* `**screenshots**` : définit le dossier
où seront stockées les captures d'écran générées
par Magic Engine. Indiquez le chemin complet (par exemple : `c:\emul\nec\screenshots`).
Si le dossier n'existe pas, Magic Engine le créera automatiquement.
* `**saved_games**` : indique le dossier où
seront stockées vos sauvegardes de jeu et où Magic Engine
ira chercher les sauvegardes à charger. Indiquez le chemin complet,
comme pour le paramètre `screenshots`.

---

# Notes

**1** : Cartouches de la PC Engine, au
format proche de celui d'une carte de crédit.

**2** : Console 8/16 bits de NEC, plus
puissante que les modèles de base (**PC Engine** et **CoreGraph'X**)
mais bénéficiant d'une compatibilité ascendante. Sa grande
difficulté de programmation et des erreurs de conception en ont fait
un échec : seulement 5 jeux sont sortis pour cette machine (+1 jeu
CoreGraph'X optimisé).

**3** : System Card spécifique,
disposant notamment de plus de RAM (2Mo) que les autres. Elle a notamment
permis l'adaptation de hits issus de la **Neo Geo** de **SNK**
tels que _Art of Fighting_ ou _Fatal Fury_ sur CD-ROM. Magic
Engine dispose d'un support limité de l'Arcade Card. Celle-ci n'est
pas nécessaire, mais il faut avoir la System Card 3\.

**4** : La **TurboGraph'X16**
est la version américaine de la PC Engine.

**5** : Cartouche au format Hu-Card permettant
d'exploiter un lecteur de CD-ROM et contenant de la mémoire supplémentaire
pour la console.

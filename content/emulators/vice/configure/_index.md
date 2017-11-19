---
type: guide
user: Sigfrodi
date: '2005-10-26T17:55:48.000Z'
lastmod: '2007-07-04T18:51:27.000Z'
---

![WinVICE logo](/emulators/vice/configure/logo.jpg)

# Présentation

VICE (_VersatIle Commodore Emulator_) est comme son nom l'indique un émulateur capable de restituer l'ensemble de la gamme d'ordinateurs 8bits de Commodore. Ainsi il vous permettra d'émuler sur votre PC :

* L'ensemble de la gamme **PET** (à l'exception notable du calculateur **SuperPET 9000**)
* Le **Vic20**;
* Le **C64**;
* Le **C128**;
* Le **C+/4** (et le **C16**);
* La gamme **CBM-II**.

Émulateur abouti, notamment dans la restitution quasiment parfaite du C64 et du Vic20, VICE est également distribué sous licence GNU-GPL et est disponible pour de nombreuses plates-formes : MS Dos, RISC OS, Linux, BeOS, QNX, Solaris (x86 et SPARC) et bien entendu Windows. Nous nous contenterons ici d'examiner la version Windows et plus particulièrement dans le cadre de l'émulation du C64\. Cette machine est en effet, et de loin, la machine de Commodore qui eût le succès le plus retentissant. Vendu à plus de 18 millions d'exemplaires dans le monde, il est l'ordinateur familial qui s'est le plus vendu dans l'Histoire de l'informatique. Rassurez vous, pour les autres machines, les choses ne changent guère. ;)

# Installation

Il vous faut naturellement télécharger Vice lui-même. Vous pourrez le trouver dans la section C64 sur **Emu Nova** ou bien sur le [site officiel](http://www.viceteam.org/). Vous n'aurez pas besoin des BIOS des machines, VICE dispose déjà de tout ce qu'il faut. Naturellement, il vous faudra des images-disques de jeux. Pour le C64, elles sont aisément trouvables et un petit tour dans l'annuaire d'**Emu Nova** devrait vous permettre d'obtenir votre bonheur.

Il n'y a pas de programme d'installation, il n'y a qu'à décompresser l'archive zip de l'émulateur dans un dossier sur votre disque dur. Créez également un répertoire pour accueillir vos images-disques.

**Conseil : ** Je vous conseille _fortement_ de dézipper vos jeux. Bien que VICE soit capable de lire les fichiers zip, le lanceur automatique des jeux fonctionne de manière très aléatoire avec les jeux zippés!

Vous constaterez la présence de plusieurs exécutables (fichiers `.exe`) dans le répertoire de VICE. En fait chacun permet de lancer l'émulation d'une certaine machine supportée par VICE :

* `x64.exe` pour le C64;
* `x128.exe` pour le C128;
* `xvic.exe` pour le Vic20;
* `xpet.exe` pour le PET;
* `xcplus4.exe` pour C+/4 et le C16;
* `xcbm2.exe` pour le CBM-II.

# En français c'est mieux!

Même si cela n'est pas visible de prime abord, il est possible d'exécuter VICE en français. Pourtant aucun menu ni aucune option ne semble le permettre! Nous allons remédier à cela...

Si vous ne l'avez pas encore fait, lancez l'émulation du C64 en double-cliquant sur `x64.exe` puis allez dans le menu _Settings_ et cliquez sur _Save actual settings_. Quittez VICE. Ceci génère le fichier `vice.ini`, qui est le fichier de configuration de VICE.

Avec un éditeur de texte (comme le bloc-notes de Windows), ouvrez le fichier `vice.ini` qui se trouve dans le dossier où vous avez installé VICE et cherchez dans la section `[C64]` la ligne :  
`Language="en"`  
Remplacez la par un logique :  
`Language="fr"`.

Fermez votre éditeur de texte après avoir enregistré les modifications faites au fichier `vice.ini` puis relancez `x64.exe`. Tout est désormais dans la langue de Molière et ô miracle, un nouveau menu `Langage` est apparu! Allez savoir pourquoi, ce menu est caché quand on configure VICE en anglais... Pas bien logique ça mais bon...
![](/emulators/vice/configure/menu_lang.gif)

_Note :_ Cette modification devra être faite pour les autres machines, toujours dans le fichier `vice.ini`, dans la section correspondant à la machine souhaitée (`[C128]` pour le C128 par exemple).

# Présentation de l'interface

Examinons rapidement les principales caractéristiques de l'interface de VICE.
![Tuto WinVICE - interface](/emulators/vice/configure/interf.png)

La barre de titre (en rouge) vous indique constamment le nombre d'images par seconde. Le pourcentage indique la vitesse de l'émulation par rapport à la vitesse de la machine originale.

L'espace surligné en vert indique l'activité des lecteurs de disquette :

* Le premier chiffre (8 ou 9) identifie le lecteur, sachant que 8 est le premier lecteur de disquette ;
* Le nombre qui suit indique quelle est la piste de la disquette qui est actuellement lue ou écrite ;
* Le carré indique si des accès sont en cours sur la disquette. Si ça clignote, c'est que le lecteur accède à la disquette.

L'espace surligné en jaune indique l'activité des joysticks, le petit point au centre étant le bouton.
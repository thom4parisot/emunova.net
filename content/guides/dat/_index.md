---
title: Créer ses fichiers DAT
type: guide
user: Julio
systems:
  - MAME
  - Neo-Geo
date: '2004-06-17T09:56:23.000Z'
lastmod: '2004-07-08T15:57:39.000Z'
---
Vous avez téléchargé une ROM arcade, mais vous n'arrivez pas à la faire
fonctionner grâce à Nebula ou Kawaks ? Ce dossier vous donnera les clés pour vous
ouvrir les portes du monde merveilleux de l'arcade grâce à ces petits fichiers
magiques qui vous permettront de faire fi des ROMs erronnées !
<!--more-->
Il arrive souvent que vous récupériez une ROM qui refuse d'être reconnnue par Nebula ou Kawaks....Et là, vous vous dites :
"Je suis bon pour jeter ma ROM..." Et bien non ! Il existe un moyen simple de pouvoir utiliser votre ROM quand même :
les fichiers DAT. Ces fichiers peuvent également servir à émuler un jeu qui ne l'est pas encore. Mais tout d'abord,
voyons ce que sont ces miraculeux petits fichiers !

## Les DAT ? Kézako ???

C'est le nom qu'on donne aux fichiers portant l'extension .DAT (dat pour data=données en anglais). En fait, ces petits
fichiers ne sont rien moins que des **fichiers texte** que vous pouvez ouvrir avec n'importe quel éditeur de texte
même le plus basique, comme Bloc-Notes par exemple. Mais à quoi servent ces fichiers ? A faire reconnaître une ROM à
votre émulateur. Ces petits fichiers se mettent dans un répertoire prévu pour, et font que l'émulateur saura que votre
ROM est là, la reconnaîtra, et vous permettra de la lancer pour y jouer !

## Le rôle réel des DAT

Certains émulateurs ne savent émuler que **certains jeux bien précis**, comme Mame qui émule par exemple KOF94 mais
pas KOF2002, car il possède le **driver** de KOF94 et pas celui de KOF2002\. Un **driver** est une partie de l'émulateur
qui permet de reconnaître et de faire tourner un jeu. Une fois le programme compilé, on ne peut pas en ajouter ! (comme avec
Mame). Pour comprendre ce que signifie compiler, rendez-vous à la page située en annexe ;o)

Si on veut rajouter un driver, il faut obligatoirement l'ajouter au code source du programme, PUIS compiler.
En aucun cas vous ne pouvez faire en sorte que Mame fasse tourner KOF2002 sans rajouter le driver correspondant !
Et là où les fichiers DAT interviennent, c'est qu'ils permettent de reconnaître et de faire tourner un jeu (comme
un driver) **sans avoir à modifier le code source**, c'est-à-dire qu'il suffit d'avoir la version déjà compilée,
que vous aurez récupéré sur n'importe quel site d'émulation, Emu Nova de préférence ;o) , et de rajouter ce fichier
dans un répertoire donné de votre émulateur, et come par magie votre jeu sera émulé ! Les fichiers DAT peuvent être
considérés comme des **drivers externes** car ils jouent le même rôle qu'un driver sans toutefois être présents
dans le code source.

Les émulateurs qui acceptent ces petits fichiers si sympathiques sont Kawaks et Nebula. Dans le cas de Kawaks,
il sera nécessaire de télécharger un "loader", qui sert à charger un fichier nommé "asr.dat" que vous pourrez créer
ou télécharger, et qui contient vos DAT. Ce loader devra être lancé à la place de l'icone classique de Kawaks pour que
ceci soit effectif. Nous allons donc nous attacher à comprendre comment rédiger un DAT, au travers d'un exemple, puis
de l'élaboration d'un DAT pour un jeu non encore émulé. Vous trouverez en annexes des informations sur la compilation
d'un programme et la constitution d'une ROM arcade, ce qui vous servira à mieux comprendre les DAT. Vous trouverez aussi
des explications sur les ROMs cryptées / décryptées.

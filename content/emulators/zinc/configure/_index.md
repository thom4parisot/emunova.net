---
type: guide
user: Angel Killah
date: '2004-06-18T15:07:10.000Z'
lastmod: '2004-07-13T12:31:35.000Z'
---

Zinc est un bon émulateur de cartes sony ZN-1 & ZN-2 ainsi que la carte system 11 de Namco. L'émulation est de bonne qualité mais necessite une grosse config.

# Pré-requis

* L'émulateur (ZiNc)
* Le firmware, indispensable pour faire tourner les jeux ZN-1
* un frontend pour faciliter la configuration de l'ému (par defaut l'emulateur est dépourvue d'interface graphique). Je vous recommande ZincGUI

Ces fichiers sont disponibles en téléchargement dans la rubrique [émulateurs ZN-1/2](/zn1/#emulateurs) et 
[utilitaires ZN-1/2](/zn1/) d'Emu Nova.

# Installation

Decompressez le fichier "zinc-0.9-win32.zip" dans le repertoire de votre choix. Les roms (à laisser compresser) doivent tous être placé
dans le dossier "roms" de l'émulateur.
Decompressez le frontend "ZiNcGUI1.5.4-fr.zip" dans le répertoire de zinc.
Le firmware "firmware.zip" est à placez dans le répertoire roms, il ne faut pas le decompressez, ni le renommer.
Lancez maintenant le frontend en cliquant sur "zincguiFR.exe".

# Configuration

Vous pouvez voir sur la fenêtre du GUI, toutes les roms émulées par Zinc, vos roms reconnues par l'émulateur sont clairement visibles
avec l'icône et le champ "Correct" à _Roms Status_. Si votre rom n'est pas reconnue, assurez vous que vous avez nommé l'archive
comme indiqué dans le champ _Rom Set_.

Dans le champ en bas, sont indiquées des informations concernant la rom selectionnée : pour les roms ZN-1 & ZN-2 "Fully Supported",
toutes les roms passent sans problèmes connus.
Par contre pour toutes les roms System 11, le son n'est pas émulé.
![zn 1 2 zinc](/emulators/zinc/configure/1.jpg)

Alors, dejà cochez la case _Affichez les messages_ à droite (utile si une rom ne passe pas, le message d'erreur apparaîtra).

Maintenant cliquez sur _Parametres d'affichage_.
Cochez OpenGL si vous avez une carte video qui supporte l'OpenGL, ensuite dans _Ecran/Affichage_, configurez avec la même config
que vous avez fait pour votre bureau windows. Cochez _Plein Ecran_ pour jouer en plein écran. Et cliquez sur "sauver" pour sauvegarder
votre configuration (histoire de ne pas recommencer à chaque fois).

Maintenant passons à la configuration des touches.
Vous devrez configurez vos touches pour chaque jeu.
Pour cela sélectionnez le jeu à configurer et cliquez à droite sur _Modifier les contrôles_, allez sur l'onglet _Contrôles Joueur 1_ et là vous pourrez selectionner chaque touche d'action (dans la liste disponible) pour chaque touche, cliquez sur "appliquer" une fois vos config effectuées.
Par défaut, les config sont dejà adaptée à votre manette.
![zn 1 2 zinc](/emulators/zinc/configure/2.jpg)

Vous pouvez aussi programmez vos combos dans l'onglet _Gestion des Combos_ et leur définir une touche d'action dans
l'onglet _Contrôles Joueur 1_ en cliquant sur _Combos Joueur 1_.

Un autre petit truc avant de commencer à jouer, les cheats.
Pour les roms où l'onglet Configuration est disponible (lorsqu'il n'est pas grisé) vous pouvez activez certains cheats associé au jeu...

# Jouez

Voila maintenant vous pouvez double cliquer sur le jeu que vous voulez et jouer tranquillement.
![zn 1 2 zinc](/emulators/zinc/configure/3.jpg)

![zn 1 2 zinc](/emulators/zinc/configure/4.jpg)

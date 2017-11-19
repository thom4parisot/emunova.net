---
type: guide
user: The Jedi
date: '2004-06-18T15:06:30.000Z'
lastmod: '2004-07-13T12:18:11.000Z'
---

# Je vois un garçon qui avance

_Visual Boy Advance_ est le plus plébiscité des émulateurs Game Boy Advance et pour cause : il est gratuit et émule toutes les déclinaisons 
de la portable fétiche de Nintendo ( Game Boy, Game Boy Color, Super Game Boy 1 et 2 ) de façon quasi-parfaite !  
Pour bien suivre cette aide à la configuration, munissez vous de la version 1.6a (ou supérieure) de l'émulateur, de son BIOS et accessoirement du 
fichier de traduction française ( _VBA\_FR.dll_ ) si ce dernier n'est pas forcément inclus dans l'archive de l'émulateur.  
![visual boy advance gba language](/emulators/vba/configure/options_langue.gif)
Décompressez l'émulateur dans le répertoire de votre choix et lancez le en double-cliquant sur _VisualBoyAdvance.exe_. Avant de procéder à sa 
configuration, nous allons passer l'émulateur de l'anglais au français. Le fichier de traduction devrait se trouver dans le même répertoire que 
l'émulateur auquel cas mettez-y le. Rendez-vous de suite après dans le menu _"Options \> Language \> Other ..."_ Ajoutez le code langue _FRA_
comme sur la capture d'écran. Validez et Ô magie, c'est en français.

---

# Configuration du menu _Options_

## Sous-menu _Saut d'image_

Sélectionnez simplement la valeur "2" et veillez à ce que dans le menu complémentaire _"Accélateur ..."_ l'option cochée soit 
"Pas d'accélération". Si jamais l'émulation tourne au ralenti (constamment en dessous de 99%, chiffre indiqué dans le titre de la fenêtre), 
augmentez le saut d'image à 3 ou 4\. Plus ce chiffre augmente, plus le nombre d'images affichées diminue en conséquence ce qui donne des 
mouvements hachés à l'animation des jeux.

## Sous-menu _Vidéo_
![visual boy advance gba video](/emulators/vba/configure/options_video_rendu.gif)

Configurez ce menu comme le montre la capture d'écran ci-dessus. Ce choix vous fera jouer en _mode fenêtré double_ (soit 2 fois 
la taille de l'écran d'une GBx) en utilisant le rendu _OpenGL_ (performant et moins gourmand en ressources). Ce mode OpenGL est à 
utiliser d'office sur les petites machines, il ralentira beaucoup moins que le rendu DirectDraw ou Direct3D.  
Ceux qui n'aiment pas le mode fenêtré, et donc préfèrent plein écran, sélectionnez "Plein Ecran (800x600)" : c'est le meilleur compromis 
taille/qualité d'image à mon goût.

---

## Sous-menu _Emulateur_
![visual boy advance gba emulator](/emulators/vba/configure/options_emulateur_typesauve.gif)

La configuration de ce menu est importante car il constitue en général une question sur deux ("l'heure n'est pas conservée dans Pokémon", 
"le jeu tourne au ralenti et je l'ai pourtant bien configuré" etc.). Ouvrez donc bien vos mirettes et cochez les cases dans votre émulateur GBx 
favori comme sur l'image au-dessus de ces lignes. Pensez surtout à cocher les options _Synchroniser_, _Horloge en Temps Réel_ et 
_Flash 128K_.   
Dernier point : ajouter le BIOS. Cliquez sur "Sélectionner le fichier BIOS ..." et indiquez l'emplacement du fichier téléchargé au tout début 
du tutorial ( _gba.bios_ ). Après cette opération, n'oubliez pas de cocher l'option _Utiliser un fichier BIOS_.  
Acessoirement, vous pouvez aller dans le sous-menu "Associer ..." et tout cocher. Ainsi tous les fichiers nommés, lorsqu'ils seront double-cliqués 
lanceront leur émulation dans Visual Boy Advance. Une option spécialement dédicacée aux flemmards (dont je fais volontiers partie).  
Enfin, pour vous simplifier la tâche, modifier également le sous-menu "Répertoires ..." pour choisir où sont placées vos roms, où stocker les 
captures d'écran etc.

---

## Sous-menu _Son_
![visual boy advance gba sound](/emulators/vba/configure/options_son.gif)

A bonne configuration, bon son. Reproduisez les réglages présentés ci-dessus.

## Sous-menu _Gameboy_

Cochez les options Bordure, GBA et Couleurs Réelles. Pour ceux qui le souhaitent, le mode Super Game Boy (de préférence le 2) ajoutera une 
bordure comme l'aurait fait la cartouche spéciale Super Nintendo. Pourquoi avoir sélectionné le mode GBA ? Tout simplement car certains 
jeux Game Boy Color détectant la GBA débloquent des bonus inaccessibles si l'émulation se faisait en mode Automatique, à priori Game Boy 
Color; c'est notamment de la série des Zelda Oracles.

## Sous-menu _Priorité_

Laissez l'option "Normal" cochée.

## Sous-menu _Filtre_

L'utilisation d'un filtre n'est pas nécessaire et dépendra de la puissance de votre machine. Si cette dernière tient la route 
(vous le verrez vite si un changement de filtre fait ramer le jeu), je vous conseille le filtre _Super Eagle_, il lisse les 
contours qui donnent vite la sensation d'être découpés avec des dents plus la résolution de jeu est élevée. Après, libre à vous de tous 
les tester et de choisir celui qui vous convient le mieux.

## Sous-menu _Joypad_

Avant de jouer, configurer ses touches, que ce soit au clavier ou au joypad sera plus que pratique.  
Cliquez donc sur _"Configurer \> 1 ..."_. Pour chaque bouton de la Game Boy Advance, positionnez vous sur l'espace blanc situé 
sur la droite et appuyez sur la touche à laquelle vous voudriez voir ce bouton affecté. Une fois l'opération terminée, un petit "OK" 
fera l'affaire pour sauvegarder le tout. Pour les têtes en l'air, vérifiez que dans le sous-menu "Joypad par défaut" la valeur "1" 
soit sélectionnée. Vous pourrez donc configurer jusqu'à 4 profils de joypad.

## Sous-menu _Langue_

Et non je ne vais pas radoter car on en a déjà parlé tout en haut de cette même page ;o)

# Le menu _Fichier_

Maintenant que l'émulateur est configuré comme il se doit (enfin j'espère), quelques explications avant de vous lacher dans la nature.  
Les deux premières options vous permettront de charger un jeu (une rom). Il vous est possible de les trier par nature de fichier (tous, uniquement Game Boy Advance ou Game Boy) ou par type de console (tous, Game Boy Color, Super Game Boy ou Game Boy). Pas la peine de se prendre la tête dessus, un simple "Ouvrir" suffira.  
Enfin, la présence d'emplacements de sauvegardes rapides (jusqu'à 10 distinctes par jeu) est à repérer pour sauvegarder à tout moment, indépendamment de la sauvegarde propre au jeu (atteinte d'un point spécial etc.). Les raccourcis claviers sont également indiqués pour effectuer la sauvegarde/chargement sans passer par le menu.  
Il ne vous reste plus désormais qu'à jouer ;o)
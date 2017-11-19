---
type: guide
user: Angel Killah
date: '2004-06-18T14:58:07.000Z'
lastmod: '2004-07-13T12:36:37.000Z'
---

Final Burn émule les bornes CPS-1, CPS-2 ainsi que les bornes System 16\. Il a l'avantage de reproduire fidèlement la définition d'image 
de l'arcade.

# Installation

Decompresser le fichier "finalburn\_0.518-fr.zip" dans le répertoire de votre choix. Dans ce nouveau repertoire, creez un 
répertoire roms où vous mettres toutes vos roms.  
Pour l'exemple, je vais placez la roms Final Fight dans ce répertoire. Maintenant lancez Final Burn en cliquant sur l'icone 
"Finalburn Fr.exe".

# Configuration

Au lancement, vous voyez que l'émulateur possède quelques options interessantes pour améliorer le rendu graphique, vous pouvez 
en effet activer les _scanlines_ (servant à repoduire les lignes horizontales des écrans de télévision), le _Tampon 
Triple_, plus connu sous le nom de _Triple Buffering_ (servant à améliorer le temps de rafraîchissement), et _etirer_
pour etirer l'image.

Je vous conseille de cocher _scanlines_ et _Tampon Triple_.

Maintenant on va charger le jeu désiré, dans notre exemple, ce sera final fight. Pour cela cliquez sur _Charger_ et 
selectionner le jeu désiré dans la liste (si vous avez la roms correspondante bien sur). Je charges final fight en le selectionnant 
et je cliques sur Ok.

Le jeu a bien chargé mais il vous faut configurer les touches de votre manette (ou de votre clavier).  
Pour cela, cliquez sur _Entree_, maintenant pour configurer les touches, c'est simple, par exemple vous voulez assignez le bouton select de votre manette aux Coins (Les pièces que vous mettez dans les bornes d'arcade), cliquez sur _P1 Coin_ et pressez la touche select de votre manette, pareil si vous utilisez un clavier, pressez la touche de votre clavier pour assignez les touches à chaque action et c'est pareil pour tout le reste.  
Vous pouvez jouez à 2, même principe, on suppose que vous avez 2 manettes, avec la 1ere manette vous configurez les touches pour P1, et la 2eme manette, les touches pour P2\.  
Vous pouvez assignez une touche à _Reset_ pour relançez votre emulateur, les autres champs restant n'y touchez pas.

Voici un screen de ma config (avec un clavier), je n'ai configuré que les touches du joueur 1 :
![Screen 1](/emulators/finalburn/configure/screen1.jpg)

Ensuite, il ne vous reste plus qu'à jouer, cliquez sur _Plein Ecran_ ou sinon cliquez sur les touches Alt+Entree de 
votre clavier pour passer de mode fenêtré à mode plein écran et vice versa.
![Screen 2](/emulators/finalburn/configure/screen2.jpg)

Remarque: Vous avez du remarquez lors de la config des touches du jeu, que vous assignez des touches à des actions tres précises 
(jump, attack), en effet, pour chaque jeu, la config des touches prendra compte du jeu selectionnée.  
C'est pour cela qu'il vous faudra configurer les touches pour chaque jeu, mais rassurez vous, pour chaque jeu que vous avez 
configuré, les configurations seront sauvegardés.

Vous pouvez aussi sauvegardez/chargez votre partie, pour cela très simple, au cours du jeu, lorsque vous voulez sauvegardez, 
passez en mode fenêtré et cliquez sur la touche _Sauve_ en dessous de Etat.  
Pour charger votre partie, chargez le jeu uù vous avez une sauvegarde, et cliquez sur _Charge_ en dessous de êtat.

Vous pouvez utilisez vos codes de triche sur cet emulateur en cliquant sur _Trainer_ (à utiliser après avoir chargé le jeu).

# Allez plus loin

En cherchant bien sur le net, vous trouverez des versions non officielle de Final Burn, qui améliore les compatibilités et permet
même de jouer online via Kaillera =)  
Je vous conseille de chercher "Final Burn Alpha", qui est pour moi la meilleure version non officielle de Final Burn.

Pour les amateurs de programmation , je précise que Final Burn est un émulateur en Open Source (c'est à dire que le code source 
est est disponible pour tous).  
Vous trouver les sources de Final Burn ainsi qu'une petite aide expliquant comment compiler Final Burn sur 
[le site officiel](http://www.finalburn.com/source.html).
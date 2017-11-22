---
title: Compiler MAME
type: guide
user: Julio
systems:
  - Arcade
  - Neo-Geo
date: '2004-05-04T12:19:17.000Z'
lastmod: '2004-07-15T11:43:23.000Z'
---
Apprenez à personnaliser MAME et à créer VOTRE build ! Vous découvrirez tout d'abord ce que signifie le mot "compiler", et puis vous passerez aux travaux pratiques en comilant directement les sources ! Enfin, vous verrez quelques idées d'ordre général sur la structure de MAME et de ses drivers, structure quasi-identique pour l'émulation des systèmes de 1980 à nos jours.

<!--more-->

Sujet souvent abordé, mais peu souvent détaillé, la compilation de MAME fait couler beaucoup d'encre et mérite que l'on s'y attarde.Tout au long
de ce dossier, je vais vous expliquer comment créer votre build de MAME. J'insiste bien sur le fait que ceci est à la portée de n'importe qui,
aucune connaissance préalable n'est requise. Mais tout d'abord, je vais commencer par vous présenter cet émulateur arcade qu'est MAME, et
ensuite je m'attacherai à définir ce qu'est la compilation, comment elle s'effectue et quel est son but. Après, ce sera à vous de jouer ! ;o)

## Présentation de MAME

MAME, qui signifie _Multiple Arcade Machine Emulator_ (c'est-à-dire Emulateur de Diverses Machines d'Arcade), est un émulateur qui vit
le jour en février 1997\. Son créateur, **Nicolas Salmoria**, sortit la version 0.1, capable d'émuler plusieurs jeux d'arcade (moins d'une
dizaine). Mais très vite, la philosophie open-source du projet et le concept d'émulation multi-plateformes vont faire que l'émulateur va se
développer dans d'immenses proportions ! On en est aujourd'hui à 4752 jeux émulés, correspondant à 2679 jeux uniques (la différence venant
du fait des versions étrangères des jeux, les bootlegs ...), avec la version 0.79\. Une nouvelle version sort en moyenne tous les mois mais
il arrive qu'une seule semaine s'écoule entre deux releases.

Nicolas Salmoria veille toujours sur le développement, mais c'est aujourd'hui Aaron Giles le principal coordinateur du projet. Et il faut
être efficace pour que la centaine de personnes constituant la **Mame Team** travaille en harmonie, sans compter les dizaines de béta-testeurs
! Et le projet est loin de s'arrêter... et c'est tant mieux. Son but est de documenter tous le systèmes d'arcade ayant existé, même si la qualité
de l'émulation est moyenne. Cette politique, bien que discutable, est celle des auteurs.

Nombreux sont les jeux dont les cartes sont irrémédiablement détériorées et devraient être perdues à jamais... Mais grâce à MAME, ces jeux sont
toujours là et perdurent... MAME, c'est un peu la mémoire du monde merveilleux de l'arcade. Il émule des dizaines de systèmes, comme, pour ne
citer que les plus connus : le CPS-1, CPS-2, la Neogeo, le ST-V, les jeux Midway, Taïto, Cave et j'en passe !

## La compilation

Derrière ce mot se cache un processus qui permet à votre PC d'avoir des programmes exécutables (i.e utilisables) ! En effet, c'est bien
beau d'écrire un programme en un langage quelconque. Mais le langage utilisé est proche du langage humain, avec des mots. Ce sont des
instructions dites de **haut niveau**, que l'ordinateur ne peut comprendre. L'ordinateur ne comprend que les instructions de **bas niveau**,
différentes du langage humain et définissant de façon très fondamentale les processus à effectuer par la machine. Comment alors résoudre ce
problème et permettre à l'ordinateur de comprendre et d'exécuter un programme ?

Tout simplement par le biais de la _**compilation**_. Celle-ci s'effectue _via_ un programme appellé **compilateur** qui va
transformer le code du langage en code exécutable. En quelque sorte, la compilation est une sorte de **traduction entre le language humain et
le language machine.** Au final, compiler un programme permet de l'exécuter. Dans le cas qui nous intéresse ici, on va chercher à compiler
les sources de MAME pour pouvoir l'exécuter (et pouvoir jouer, en fait ^^) !

## Quelle est l'utilité de compiler MAME alors que les builds officiels le sont déjà et permettent directement de jouer ?

C'est une question tout à fait légitime ! Pourquoi s'ennuyer à compiler ? Pour plusieurs raisons en fait. Ca peut être d'abord pour draguer
:p mais surtout pour renommer des ROMs, rajouter des jeux non supportés, rajouter des options (dans ce cas-là, il faut sacrément s'y connaître
par contre !)... En fait, cela permet d'avoir un build personnalisé, adapté à ses ROMs, ou à ses envies.

Bon, c'est bien beau de parler de compilation, mais si on passait à l'acte maintenant ?

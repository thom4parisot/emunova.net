---
title: clipping
type: definition
abbr: null
group:
  - clipping
---
Pour les jeux en 2D, c'est la limite au-delà de laquelle le programme doit cesser de dessiner (virtuellement) les sprites et autres éléments graphiques. En gros, un algorithme de clipping indiquera au programme quand il aura atteint les bords de l'écran.
Pour les jeux en 3D, c'est un peu pareil : c'est la profondeur (la ligne virtuelle) au-delà de laquelle le programme cesse de dessiner les objets en 3D. Pour masquer cette ligne, et rendre la transition moins brusque, les programmeurs ont généralement recours à une sorte de brouillard. Par exemple, les développeurs d'Acclaim ayant mal programmé le moteur 3D de _Turok_ (sur N64), ont forcé le joueur à se perdre dans un brouillard opaque -- la ligne de clipping se trouvant à dix mètres devant le joueur.

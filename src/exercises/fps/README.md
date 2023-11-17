## Contexte
Le but de cet exercice est de réaliser un FPS (First Person Shooter) en JavaScript. Le jeu présentera des fonctionnalités basiques comme le déplacement et le tir, le tout de manière headlesss.

## Description d'une arme
Une arme devra avoir les attributs suivants
- `name` : le nom de l'arme
- `damage` : les dégâts infligés par l'arme
- `range` : la portée de l'arme
- `ammo` : le nombre de munitions propres à cette arme

## Description d'un joueur
Un joueur devra avoir les attributs suivants
- `name` : le nom du joueur
- `health` : la vie du joueur
- `weapon` : l'arme équipée par le joueur
- `position` : la position du joueur sur la carte en { x; y }

## Mais également
Une arme doit pouvoir tirer sur un joueur, pourvu que celui-ci soit à portée.
Un joueur doit avoir une méthode `canShootAt` qui prendra en paramètre un autre joueur et qui retournera `true` si le joueur peut tirer sur l'autre joueur, `false` sinon.
Un joueur doit posséder une méthode `fire` qui prendra en paramètre un autre joueur et qui lui infligera des dégâts si celui-ci est à portée.

On loggera à chaque fois les éléments du jeu.
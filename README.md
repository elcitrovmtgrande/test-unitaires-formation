## Exercice de cas pratique sur les tests unitaires

### Contexte
Réalisation d'une blockchain en locale avec des tests unitaires.

### Blockchain
Une blockchain est un ensemble de blocs qui contiennent des informations. La blockchain est une technologie de stockage et de transmission d’informations, transparente, sécurisée, et fonctionnant sans organe central de contrôle (définition de Blockchain France).

Chaque bloc possède les propriétés suivantes :
- une date de création
- un hash
- un hash précédent
- des données

Le hash est une empreinte numérique qui permet de vérifier l’intégrité du bloc. Il est calculé à partir des données du bloc et du hash du bloc précédent.
Dans le cadre de cet exercice, nous utiliserons le protocole de hachage [SHA-256](https://www.npmjs.com/package/crypto-js).

### Tests unitaires
Dans notre contexte, nous créeront deux classes, uen classe Block et une classe blockchain. La classe blockchain contiendra un tableau de blocs.
Nous effectueront des tests unitaires sur ces deux classes afin de vérifier leur conformité selon une approche TDD.

La méthode permettant de miner un block doit être une méthode publique de la classe `Blockchain`.
La méthode permettant de générer le hash d'un block doit être une méthode statique de la classe `Block`.

Chacune des propriétés et méthodes des deux classes devront être d'abord écrites à l'aide de tests unitaires. Puis, vous passerez au vert chacun des tests en créant les méthodes et propriétés nécessaires.

### API expose
- `GET /blockchain` : retourne la blockchain
- `POST /blockchain` : ajoute un bloc à la blockchain (prends en param des données) et renvoie la blockchain
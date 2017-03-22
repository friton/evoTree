# evoTree

## Comment utiliser le site ?

**Nécessite** : Connexion internet

**Fichiers nécessaires** : index.html, tree-anim.js, tree-canvas.html, dossier JSON : avec un fichier .json (arbre), dossier CSS : stylesDivArbre.css, stylesStructureSite.css, dossier images.

Lancer le fichier index.html avec un navigateur web (Firefox ou Safari)

## Comment fabriquer un arbre ?

### Algorithme de colonisation de l'espace

L'algorithme de colonisation de l'espace est un algorithme permettant de fabriquer un arbre de la Vie de manière aléatoire (comme celui visible sur le site web).

La base de l'algorithme a été écrite par Wandrille Duchemin basé sur l'article <a href ="http://algorithmicbotany.org/papers/colonization.egwnp2007.pdf">[Adam Runions, Brendan Lane, and Przemyslaw Prusinkiewicz, *Modeling Trees with a Space Colonization Algorithm*, 2007].</a>
A la base cet algorithme est conçu pour fabriquer des arbres "naturels" de manière aléatoire. Pour le projet nous l'avons donc modifié pour obtenir un arbre de la Vie (branche ne repartant pas en arrière, possibilité d'ajouter des extinction de branches, optimisation...).

***

#### Utilisation:

**Nécessite** : python2.7 (avec le package matplotlib <-- optionnel), un processeur puissant est toujours bienvenu ;)

**Fichiers nécessaires** : space.py et point3d.py

Il est possible de modifier le nombre de points d'attraction, la zone de croissance de l'arbre et de choisir les dates et les pourcentages d'extinctions, mais pour cela il faut mettre les valeurs directement dans le code.

Point d'attraction : ligne suivante : for i in range(***251101**):

Zone de croissance (x et y) : lignes suivante :  x = (random() * **38000.**) et y = (random() * **500.**)**-250**. 

Date d'extinction : variable : **PROBA_XTINCT**

Seuil d'extinction : variable : **SEUIL_XTINCT**

***

#### Ligne de commande :

```python space.py 5 30 38000```

5 : zone dans laquelle un noeud d'attraction s'éteind,
30 : zone dans laquelle un noeud branche est attiré par un noeud d'attraction
38000 : nombre d'itération

### Arbre au format JSON

**Nécessite** : python3

**Résultat de l'algorithme de colonisation de l'espace** : POINTS.txt.results.edges.txt et POINTS.txt.results.points.txt

#### Ligne de commande :

```JSON_creation.py POINTS.txt.results.edges.txt POINTS.txt.results.points.txt output.json (optionnel : scale)```











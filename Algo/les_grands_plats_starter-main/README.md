# Projet Les grands plats

## Objectifs

- Rendre fonctionnel le code selon les données issues du JSON.
- Faire deux versions du projet (créer une branche pour chaque) :
  - Commencer par une recherche **linéaire**
  - Puis faire une recherche **dichotomique** (faire un logigramme pour mieux anticiper cette recherche)

## Contraintes

- Faire le code en **POO**
- Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche
- Le code HTML et CSS pour l’interface (avec ou sans Bootstrap) devra passer avec succès le **validateur W3C**.

## Règles de gestion

Ces points doivent absolument être respectés durant le développement :

1. La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil)
2. La recherche principale se lance **à partir de 3 caractères** entrés par l’utilisateur dans la barre de recherche
3. La recherche s’actualise pour chaque nouveau caractère entré
4. La recherche principale affiche les premiers résultats le plus rapidement possible
5. Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page
6. Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.

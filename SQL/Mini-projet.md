```SQL

-- Étape 1

-- Importez la base que vous trouverez ici dans votre PHPMyAdmin.
-- Étape 2

-- Dans un fichier requests.txt vous allez noter les requêtes permettant de répondre aux demandes suivantes :

    -- 1.La liste de tous les utilisateurs ;

SELECT * FROM `users`


--    2. La liste de tous les utilisateurs rangée par noms de famille ;


SELECT * FROM `users` ORDER BY last_name ASC;


   3. Le dernier utilisateur inscrit ;

SELECT * FROM users
ORDER BY registration_date DESC
LIMIT 1


--    4. La liste de tous les utilisateurs fêtant leur anniversaire ce mois-ci ;

SELECT * FROM  users
WHERE MONTH(birthdate) = MONTH(CURRENT_TIMESTAMP)



--    5. Le nombre total d’utilisateurs ;
SELECT COUNT(*) FROM users;



--    6. La liste de tous les utilisateurs associés à leurs villes respectives ;

SELECT users.*, addresses.city
FROM users
JOIN addresses
ON users.address_id = addresses.id



--    7. La liste de tous les utilisateurs vivant à une adresse sans numéro ;


SELECT users.*,
FROM users
JOIN addresses
ON users.address_id = addresses.id
WHERE addresses.number IS NULL;

--    8. La liste de tous les produits dont le prix est supérieur à 1 000 € ;

SELECT *
FROM productsù*m
 WHERE price > 1000


--    9. La liste de tous les produits associés à leurs photos respectives ;

SELECT products.*, pictures.url
FROM products
JOIN pictures
ON products.id= pictures.product_id


--   10. La liste de tous les produits appartenant à la catégorie « Voyage » ;

SELECT *
FROM products
JOIN products_categories
ON products.id = products_categories.product_id
JOIN categories
ON products_categories.category_id = categories.id
WHERE categories.title = "voyage";


--   11. La liste de tous les utilisateurs ayant effectué plus de dix commandes ;


SELECT
   users.*,
    COUNT(orders.id)
FROM
    users
 JOIN
    orders
ON
    users.id = orders.user_id
GROUP BY
    users.id
HAVING COUNT(orders.id) > 10;



--    12. La liste de tous les produits achetés par le premier utilisateur inscrit.


SELECT products.name
FROM products
JOIN products_orders
ON products.id = products_orders.product_id
JOIN orders
ON products_orders.order_id = orders.id
JOIN users
ON orders.user_id = users.id
WHERE users.id = (
    SELECT id
    FROM users
    ORDER BY registration_date ASC
    LIMIT 1
);








-- # Exercice BONUS J5 - Des requêtes en plus sur 3WATrade

-- ## Étapes 1 : les requêtes SELECT
-- En utilisant l'onglet pour saisir directement les requêtes SQL vous allez devoir écrire des requêtes SELECT qui permettent d'obtenir les informations suivantes :

-- ### Requête 1
-- Le nom, la description et le prix de chacun des produits.

SELECT products.name, products.description, products.price
FROM products;

-- ### Requête 2

-- Le nom, la description et le prix de chacun des produits des produits de moins de 42€ du plus cher au moins cher.

SELECT products.name, products.description, products.price
FROM products
WHERE price < 42
ORDER BY price ASC;

-- ### Requête 3
-- Le nom de la ville, le code postal, le numéro de rue et l'intitulé de la rue des adresses.

SELECT city, postal_code, number, street
FROM addresses;


-- ### Requête 4
-- Le nom de la ville, le code postal, le numéro de rue et l'intitulé de la rue des adresses dont le nom de la ville commence par A.

SELECT city, postal_code, number, street
FROM addresses
WHERE city LIKE ("a%");

-- ### Requête 5
-- La liste de tous les utilisateurs


SELECT * FROM users;



-- ### Requête 6
-- La liste de tous les utilisateurs rangée par date de naissance


SELECT * FROM users ORDER BY birthdate ASC

-- ### Requête 7
-- La liste de tous les utilisateurs rangée par date de naissance de plus de 5O ans


SELECT *
FROM users
WHERE YEAR(birthdate) <= YEAR(CURRENT_DATE) - 50
ORDER BY birthdate ASC;


-- ### Requête 8
-- La liste de tous les utilisateurs rangée par date de naissance, de plus de 5O ans et en ajoutant une colonne nommé "Age" pour afficher leur âge calculé actuel

SELECT *,
YEAR(CURRENT_DATE) - YEAR(birthdate) AS age
FROM users
WHERE YEAR(birthdate) <= YEAR(CURRENT_DATE) - 50
ORDER BY birthdate ASC;
```

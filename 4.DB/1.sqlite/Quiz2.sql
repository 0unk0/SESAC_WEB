-- 1
SELECT Name, Age FROM users;

-- 2
SELECT * FROM orders ORDER BY OrderAt LIMIT 5;

-- 3
SELECT * FROM items WHERE Type="Coffee";

-- 4
SELECT * FROM stores WHERE Address LIKE "서울%";

-- 5
SELECT * FROM users WHERE Gender="Female" AND Birthdate >= "2000-01-01" ;

-- 6
SELECT Name, Max(Age) AS Age FROM users;

-- 7
SELECT Name, Max(Unitprice) FROM items;


-- 1
SELECT users.Name, COUNT(*) AS Count, SUM(items.Unitprice) AS Purchase FROM  orders 
JOIN orderItems ON orders.id = orderitems.OrderId
JOIN Items ON  orderitems.ItemId = items.Id
JOIN Users ON orders.UserId = users.id
GROUP BY orders.UserId;

-- 2
SELECT s.Type, SUM(UnitPrice) AS Sales 
FROM stores s
JOIN orders o ON s.Id = o.StoreId
JOIN orderitems oi ON o.id = oi.OrderId
JOIN items i ON oi.ItemId = i.Id
WHERE o.OrderAt LIKE "2023-09%"
GROUP BY s.Type ;

-- 3
SELECT s.Name, SUM(UnitPrice) AS Sales 
FROM stores s
JOIN orders o ON s.Id = o.StoreId
JOIN orderitems oi ON o.id = oi.OrderId
JOIN items i ON oi.ItemId = i.Id
WHERE o.OrderAt BETWEEN "2023-01-01" AND "2023-12-31"
GROUP BY s.Name 
ORDER BY Sales DESC
LIMIT 10;

-- 4
SELECT i.Name, COUNT(*), SUM(UnitPrice)
FROM items i
JOIN orderItems oi ON i.id = oi.ItemId
GROUP BY i.Name;

-- 5
SELECT u.Name, COUNT(*) AS Count, SUM(UnitPrice) AS TOTAL
FROM users u
JOIN orders o ON o.UserId = u.id
JOIN orderItems oi ON oi.OrderId = o.id
JOIN items i ON oi.ItemId = i.id
GROUP BY u.Id
ORDER BY Count DESC
LIMIT 20;

-- 6
SELECT  SUBSTR(s.Address, 1, 6) AS Place, SUM(UnitPrice) AS Sales FROM stores s
JOIN orders o ON s.Id = o.StoreId
JOIN orderitems oi ON o.id = oi.OrderId
JOIN items i ON oi.ItemId = i.Id
GROUP BY Place
ORDER BY  Sales;

    -- +3 없이 하는 방법은 없눈지,,,
    SELECT  SUBSTR(s.Address, 1, INSTR(s.Address, " ") +3) AS Place, SUM(UnitPrice) AS Sales FROM stores s
    JOIN orders o ON s.Id = o.StoreId
    JOIN orderitems oi ON o.id = oi.OrderId
    JOIN items i ON oi.ItemId = i.Id
    GROUP BY Place
    ORDER BY  Sales;

-- 7
SELECT u.Name, COUNT(*) AS Total
FROM users u
JOIN orders o ON o.UserId = u.Id
JOIN stores s ON o.StoreId = s.Id
WHERE s.Name = "스타벅스 강남1호점"
GROUP BY u.Id
ORDER BY Total DESC;

-- 8
SELECT s.Name, SUM(UnitPrice) AS Sales 
FROM stores s
JOIN orders o ON s.Id = o.StoreId
JOIN orderitems oi ON o.id = oi.OrderId
JOIN items i ON oi.ItemId = i.Id
WHERE o.OrderAt BETWEEN DATE("now", "-3 months") AND DATE("now")
GROUP BY s.Name ;
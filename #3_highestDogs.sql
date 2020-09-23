SELECT a.*
FROM Dogs a
INNER JOIN
(SELECT MAX(Height) as Height FROM Dogs GROUP BY Breed) b
ON a.Height = b.Height
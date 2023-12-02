-- Mostrar porcentagem de vitórias de times mandantes e visitantes:
SELECT
    CONCAT(FORMAT(avg(g.Win)*100,1), '%') AS Win_Percentage_Home,
    CONCAT(FORMAT((1-avg(g.Win))*100,1), '%') AS Away_Percentage_Home,
    Season
FROM Game AS g
GROUP BY g.Season
HAVING g.Season = :season;
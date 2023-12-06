-- Mostrar porcentagem de vitórias de times mandantes e visitantes:
SELECT
    FORMAT(avg(g.Win)*100,1) AS homeWinPercentage,
    FORMAT((1-avg(g.Win))*100,1) AS awayWinPercentage,
    Season
FROM Game AS g
GROUP BY g.Season
HAVING g.Season = :season;
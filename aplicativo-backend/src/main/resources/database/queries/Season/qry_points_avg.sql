-- Mostrar média de pontos por time na season em questão em ordem decrescente naquele espaço vazio cinza:
SELECT
    TeamNickname,
    Season,
    FORMAT(avg(Points),2) AS PointsAverage
FROM TeamStatistics ts
    JOIN (
        SELECT
            t.ID AS TeamID,
            t.Nickname AS TeamNickname,
            g.Season AS Season,
            g.ID AS GameID
        FROM Team as t
            INNER JOIN Game g ON t.ID = g.fk_Team_ID_Home or t.ID = g.fk_Team_ID_Away) AS Team_Game
    ON ts.fk_Team_ID = TeamID AND ts.fk_Game_ID = GameID
WHERE Season = :season
GROUP BY TeamNickname, Season
ORDER BY PointsAverage DESC;
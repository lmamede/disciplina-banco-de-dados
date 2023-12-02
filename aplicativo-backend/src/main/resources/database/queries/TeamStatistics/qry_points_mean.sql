-- Mostrar média de pontos por time na season em questão em ordem decrescente naquele espaço vazio cinza:
SELECT Nickname, Season, FORMAT(avg(Points),2) AS Media_Pontos
FROM TeamStatistics
JOIN (
    SELECT Team.ID AS Team_ID, Team.Nickname, Game.Season, Game.ID AS Game_ID
    FROM Team
    INNER JOIN Game ON Team.ID = fk_Team_ID_Home or Team.ID = fk_Team_ID_Away) AS Team_Game
ON fk_Team_ID = Team_ID AND fk_Game_ID = Game_ID
WHERE Season = :season
GROUP BY Nickname, Season
ORDER BY Media_Pontos DESC;
-- Mostrar adversário que mais perdeu para o time, em ordem decrescente, naquele espaço vazio cinza
SELECT
    count(Win) as Victories_Against,
    Adversary
FROM (
         SELECT
             Game.ID AS Game_ID,
             Date,
             Status,
             Season,
             Win,
             fk_Team_ID_Home,
             fk_Team_ID_Away,
             Team.ID AS Team_ID,
             Team.Nickname AS TeamName,
             (
                 CASE WHEN Team.ID = Game.fk_Team_ID_Home
                          THEN (
                         SELECT
                             Nickname
                         FROM Team WHERE ID = Game.fk_Team_ID_Away
                     ) ELSE (
                     SELECT
                         Nickname
                     FROM Team
                     WHERE ID = Game.fk_Team_ID_Home
                 )
                     END) AS Adversary
         FROM Game
                  INNER JOIN Team ON Team.ID = fk_Team_ID_Home OR Team.ID = fk_Team_ID_Away
         WHERE Team.Nickname = :nickname) as Game_and_Winner
WHERE fk_Team_ID_Home = Team_ID
    AND Win = 1
   OR fk_Team_ID_Away = Team_ID
    AND Win = 0
GROUP BY Adversary
ORDER BY Victories_Against DESC;

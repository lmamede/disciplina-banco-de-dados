-- Mostrar adversário que mais perdeu para o time, em ordem decrescente, naquele espaço vazio cinza
SELECT
    count(Win) as VictoriesAgainst,
    AdversaryNickname
FROM (
    SELECT
        Win,
        g.fk_Team_ID_Home AS homeTeamID,
        g.fk_Team_ID_Away AS awayTeamID,
        t.ID AS TeamID,
        (
            CASE WHEN t.ID = g.fk_Team_ID_Home
                THEN (
                    SELECT
                        Nickname
                    FROM Team WHERE ID = g.fk_Team_ID_Away
                ) ELSE (
                    SELECT
                        Nickname
                    FROM Team WHERE ID = g.fk_Team_ID_Home
                )
        END) AS AdversaryNickname
    FROM Game AS g
        INNER JOIN Team t ON t.ID = g.fk_Team_ID_Home OR t.ID = g.fk_Team_ID_Away
    WHERE t.Nickname = :team_nickname) as Game_and_Winner
WHERE (homeTeamID = TeamID AND Win = 1)
OR (awayTeamID = TeamID AND Win = 0)
GROUP BY AdversaryNickname
ORDER BY VictoriesAgainst DESC;

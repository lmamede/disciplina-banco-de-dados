-- Mostrar jogadores que, na season desse jogo, fizeram parte desse time:
SELECT
    p.ID,
    p.Name,
    (
        CASE WHEN p.Nickname is NULL
            THEN '-'
            ELSE p.Nickname
        END
    ) as nickname,
    p.Seconds_Played as secondsPlayed
FROM Player AS p
WHERE p.ID in
    (
        SELECT
            i.fk_Player_ID
        FROM Includes AS i
        WHERE Season = :season and fk_Team_ID = (
            SELECT t.ID
            FROM Team as t
            WHERE t.Nickname = :team_nickname
        )
    );


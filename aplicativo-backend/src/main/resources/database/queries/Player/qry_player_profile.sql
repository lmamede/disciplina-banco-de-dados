-- Mostrar dados do jogador selecionado:
SELECT
    p.Name,
    IFNULL(p.Nickname, '-') as Nickname,
    FORMAT(p.Seconds_Played/60, 0) as MinutesPlayed
FROM Player as p
WHERE p.Name = :player_name;






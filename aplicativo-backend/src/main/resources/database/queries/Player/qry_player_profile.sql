-- Mostrar dados do jogador selecionado:
SELECT Name, IFNULL(Nickname, '-') as Nickname, FORMAT(Seconds_Played/60, 0) as Total_Minutes_Played
FROM Player
WHERE Name = :player_name;






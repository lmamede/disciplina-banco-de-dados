-- Mostrar jogadores que, na season desse jogo, fizeram parte desse time:
SELECT Name
FROM Player
WHERE ID in
      (SELECT fk_Player_ID as Player_ID
       FROM Includes
       WHERE Season = [SEASON SELECIONADA] and fk_Team_ID = (SELECT ID FROM Team WHERE Nickname = 'NICKNAME SELECIONADO'));


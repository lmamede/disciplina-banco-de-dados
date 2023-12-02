-- Mostrar jogos de um time (como mandante) e uma season selecionados:
SELECT * FROM Game
                  LEFT JOIN Team ON Team.ID = fk_Team_ID_Home
WHERE Game.Season = :season AND Team.Nickname = :nickname;
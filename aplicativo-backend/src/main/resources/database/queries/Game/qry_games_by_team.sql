-- Mostrar jogos que são daquele time
SELECT * FROM Game
WHERE fk_Team_ID_Home = :team_id or fk_Team_ID_Away = team_id;
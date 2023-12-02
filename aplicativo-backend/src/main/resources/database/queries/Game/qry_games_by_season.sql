-- Mostrar jogos que são daquela season:
SELECT
    g.ID,
    g.Date,
    g.Season,
    g.Status,
    th.Nickname AS teamHome,
    ths.Points AS pointsHome,
    ta.Nickname AS teamAway,
    tas.Points AS pointsAway
FROM Game as g
    INNER JOIN Team AS th ON th.ID = g.fk_Team_ID_Home
    INNER JOIN TeamStatistics AS ths ON ths.fk_Team_ID = th.ID AND ths.fk_Game_ID = g.ID
    INNER JOIN Team AS ta ON ta.ID = g.fk_Team_ID_Away
    INNER JOIN TeamStatistics AS tas ON tas.fk_Team_ID = ta.ID AND tas.fk_Game_ID = g.ID
WHERE g.Season = :season
AND (ths.Points IS NOT NULL OR tas.Points IS NOT NULL);

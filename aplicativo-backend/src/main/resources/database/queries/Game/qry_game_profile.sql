-- Mostrar dados do jogo selecionado:
SELECT
    g.ID,
    g.Date,
    g.Season,
    th.Nickname AS teamHome,
    ths.Points AS pointsHome,
    ta.Nickname AS teamAway,
    tas.Points AS pointsAway,
    ths.Rebounds AS homeRebounds,
    ths.Assists AS homeAssists,
    tas.Rebounds AS awayRebounds,
    tas.Assists AS awayAssists,
    FORMAT(ths.3_Point_Percentage * 100, 1) AS Home3PointPercentage,
    FORMAT(ths.Free_Throw_Percentage * 100, 1) AS HomeFreeThrowPercentage,
    FORMAT(ths.Field_Goal_Percentage * 100, 1) AS HomeFieldGoalPercentage,
    FORMAT(tas.3_Point_Percentage * 100, 1) AS Away3PointPercentage,
    FORMAT(tas.Free_Throw_Percentage * 100, 1) AS AwayFreeThrowPercentage,
    FORMAT(tas.Field_Goal_Percentage * 100, 1) AS AwayFieldGoalPercentage
FROM Game AS g
    INNER JOIN Team th ON th.ID = g.fk_Team_ID_Home
    INNER JOIN TeamStatistics ths ON ths.fk_Team_ID = th.ID AND ths.fk_Game_ID = g.ID
    INNER JOIN Team ta ON ta.ID = g.fk_Team_ID_Away
    INNER JOIN TeamStatistics tas ON tas.fk_Team_ID = ta.ID AND tas.fk_Game_ID = g.ID
WHERE ths.Points IS NOT NULL
   OR tas.Points IS NOT NULL HAVING g.ID = :game_id
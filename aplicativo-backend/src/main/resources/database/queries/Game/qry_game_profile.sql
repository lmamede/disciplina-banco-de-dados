-- Mostrar dados do jogo selecionado:
SELECT
    G.ID AS id,
    G.Date AS date,
    G.Season AS status,
    TH.Nickname AS teamHome,
    THS.Points AS Points_Home,
    TA.Nickname AS teamAway,
    TAS.Points AS pointsAway,
    THS.Rebounds,
    THS.Assists,
    FORMAT(THS.3_Point_Percentage * 100, 1) AS Home_3_Point_Percentage,
    FORMAT(THS.Free_Throw_Percentage * 100, 1) AS Home_Free_Throw_Percentage,
    FORMAT(THS.Field_Goal_Percentage * 100, 1) AS Home_Field_Goal_Percentage
FROM Game AS G
         INNER JOIN Team AS TH ON TH.ID = G.fk_Team_ID_Home
         INNER JOIN TeamStatistics AS THS ON THS.fk_Team_ID = TH.ID AND THS.fk_Game_ID = G.ID
         INNER JOIN Team AS TA ON TA.ID = G.fk_Team_ID_Away
         INNER JOIN TeamStatistics AS TAS ON TAS.fk_Team_ID = TA.ID AND TAS.fk_Game_ID = G.ID
WHERE THS.Points IS NOT NULL
   OR TAS.Points IS NOT NULL HAVING Game_ID = :game_id
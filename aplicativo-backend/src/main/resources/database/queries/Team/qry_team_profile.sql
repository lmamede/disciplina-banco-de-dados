-- Mostrar Team Profile e porcentagens ao lado
SELECT
    Team,
    Foundation_Year,
    Total_Winning_Games,
    Total_Loosing_Games,
    Total_Games_Played,
    Percentage_Total_Wins,
    Percentage_Home_Wins,
    Team_ID
FROM (
         SELECT
             Nickname as Team,
             Foundation_Year,
             sum(Winning_Games) AS Total_Winning_Games,
             sum(Loosing_Games) AS Total_Loosing_Games,
             sum(Games_Played) AS Total_Games_Played,
             CONCAT(FORMAT(sum(Winning_Games) / sum(Games_Played) * 100,1), '%') AS Percentage_Total_Wins,
             Team_ID
         FROM (
                  SELECT
                      Season_ID,
                      max(Winning_Games) AS Winning_Games,
                      max(Loosing_Games) AS Loosing_Games,
                      max(Games_Played) AS Games_Played,
                      fk_Team_ID AS Team_ID
                  FROM SeasonStatistics
                  GROUP BY Season_ID, fk_TEAM_ID
              ) AS Victories_By_Season
                  INNER JOIN Team ON Team_ID = ID
         GROUP BY Team_ID HAVING Team = :nickname
     ) as tbl1
         NATURAL JOIN (
    SELECT
        Team.Nickname as Team,
        CONCAT(FORMAT(avg(Win) * 100,1), '%') as Percentage_Home_Wins,
        Team.ID as Team_ID
    FROM Team
             INNER JOIN Game ON Team.ID = fk_Team_ID_Home
    GROUP BY Team.ID HAVING TEAM = :nickname
) as tbl2;

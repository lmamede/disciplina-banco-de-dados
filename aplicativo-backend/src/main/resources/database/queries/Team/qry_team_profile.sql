-- Mostrar Team Profile e porcentagens ao lado
SELECT
    TeamNickname,
    Foundation_Year,
    TotalWinningGames,
    TotalLoosingGames,
    TotalGamesPlayed,
    TotalWinsPercentage,
    HomeWinsPercentage,
    TeamID
FROM (
         SELECT
             t.Nickname as TeamNickname,
             t.Foundation_Year,
             sum(WinningGames) AS TotalWinningGames,
             sum(LoosingGames) AS TotalLoosingGames,
             sum(GamesPlayed) AS TotalGamesPlayed,
             FORMAT(sum(WinningGames) / sum(GamesPlayed) * 100,1) AS TotalWinsPercentage,
             TeamID
         FROM (
                  SELECT
                      ss.Season_ID,
                      max(ss.Winning_Games) AS WinningGames,
                      max(ss.Loosing_Games) AS LoosingGames,
                      max(ss.Games_Played) AS GamesPlayed,
                      ss.fk_Team_ID AS TeamID
                  FROM SeasonStatistics AS ss
                  GROUP BY ss.Season_ID, ss.fk_TEAM_ID
              ) AS Victories_By_Season
                  INNER JOIN Team t ON t.ID = TeamID
         WHERE t.Nickname = :team_nickname
         GROUP BY TeamID
     ) as tbl1
         NATURAL JOIN (
            SELECT
                t1.Nickname as TeamNickname,
                FORMAT(avg(Win) * 100,1) as HomeWinsPercentage,
                t1.ID as Team_ID
    FROM Team AS t1
             INNER JOIN Game ON t1.ID = fk_Team_ID_Home
    WHERE t1.Nickname = :team_nickname
    GROUP BY t1.ID
) as tbl2;


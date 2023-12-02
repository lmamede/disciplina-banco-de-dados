-- Mostrar todos os times
SELECT
    t.ID,
    t.Abbreviation,
    t.City,
    t.Nickname,
    t.Maximum_Year AS maxYear,
    t.Minimum_Year AS minYear,
    t.Foundation_Year AS foundationYear,
    t.Name,
    t.fk_Arena_Name as arenaName
FROM Team AS t
ORDER BY t.Nickname
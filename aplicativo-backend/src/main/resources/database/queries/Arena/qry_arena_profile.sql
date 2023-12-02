-- Mostrar informações da arena (Nome, Capacidade, Dono e Cidade):
SELECT
    a.Name,
    a.Capacity,
    t.Nickname,
    t.City
FROM Team as t
INNER JOIN Arena a ON t.fk_Arena_Name = a.Name
WHERE a.Name = :arena_name;
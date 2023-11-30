package com.nbastats.aplicativobackend.repository;

import com.nbastats.aplicativobackend.model.entities.Arena;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository
public class NBAStatsRepository {

    public List<Arena> getArenas()
    {
        Arena arenaTest = new Arena(16888, "Hawks");

        return Collections.singletonList(arenaTest);
    }

    public List<Arena> getGames() {
        return Collections.emptyList();
    }

    public List<Arena> getPlayers() {
        return Collections.emptyList();
    }

    public List<Arena> getSeasons() {
        return Collections.emptyList();
    }

    public List<Arena> getTeams() {
        return Collections.emptyList();
    }
}

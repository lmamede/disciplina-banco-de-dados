package com.nbastats.aplicativobackend.controller;

import com.nbastats.aplicativobackend.model.entities.Arena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.nbastats.aplicativobackend.service.NBAStatsService;

import java.util.List;

@RestController
@RequestMapping(path = "/nba")

public class NBAStatsController {
    @Autowired
    private NBAStatsService nbaStatsService;

    @GetMapping(path = "/arenas")
    public List<Arena> fetchArenas()
    {
        return nbaStatsService.fetchArenas();
    }

    @GetMapping(path = "/games")
    public List<Arena> fechGames()
    {
        return nbaStatsService.fetchGames();
    }

    @GetMapping(path = "/players")
    public List<Arena> fetchPlayers()
    {
        return nbaStatsService.fetchPlayers();
    }

    @GetMapping(path = "/seasons")
    public List<Arena> fetchSeasons()
    {
        return nbaStatsService.fetchSeasons();
    }

    @GetMapping(path = "/teams")
    public List<Arena> fetchTeams()
    {
        return nbaStatsService.fetchTeams();
    }

}

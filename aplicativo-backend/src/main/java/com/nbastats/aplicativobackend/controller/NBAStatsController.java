package com.nbastats.aplicativobackend.controller;

import com.nbastats.aplicativobackend.model.dto.*;
import com.nbastats.aplicativobackend.model.entities.Arena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nbastats.aplicativobackend.service.NBAStatsService;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/nba")

public class NBAStatsController {
    @Autowired
    private NBAStatsService nbaStatsService;

    @GetMapping(path = "/arenas")
    public List<Arena> fetchArenas() throws IOException {
        return nbaStatsService.fetchArenas();
    }

    @GetMapping(path = "/arenas/profile/{arena_name}")
    public List<ArenaProfileDTO> fetchArenaProfile(@PathVariable String arena_name) throws IOException {
        return nbaStatsService.fetchArenaProfile(arena_name);
    }

    @PostMapping(path = "/games",  consumes = {"application/json"})
    public List<GameDTO> fetchHomeTeamSeasonGames(@RequestBody Map<String, String> data) throws IOException {

        if(!data.get("season").isEmpty() && !data.get("team_nickname").isEmpty()){
            return nbaStatsService.fetchHomeTeamSeasonGames(Integer.parseInt(data.get("season")), data.get("team_nickname"));
        } else if (!data.get("season").isEmpty() && data.get("team_nickname").isEmpty()){
            return nbaStatsService.fetchSeasonGames(Integer.parseInt(data.get("season")));
        } else{
            return nbaStatsService.fetchTeamGames(data.get("team_nickname"));
        }
    }

    @GetMapping(path = "/games/profile/{game_id}")
    public List<GameProfileDTO> fetchGameProfile(@PathVariable int game_id) throws IOException {
        return nbaStatsService.fetchGameProfile(game_id);
    }

    @PostMapping(path = "/players")
    public List<PlayerDTO> fetchSeasonPlayers(@RequestBody Map<String, String> data) throws IOException {
        return nbaStatsService.fetchSeasonPlayers(Integer.parseInt(data.get("season")),data.get("team_nickname"));
    }

    @GetMapping(path = "/players/profile/{player_name}")
    public List<PlayerProfileDTO> fetchSeasonPlayers(@PathVariable String player_name) throws IOException {
        return nbaStatsService.fetchPlayerProfile(player_name);
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

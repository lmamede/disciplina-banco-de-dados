package com.nbastats.aplicativobackend.service;

import com.nbastats.aplicativobackend.model.dto.*;
import com.nbastats.aplicativobackend.model.entities.Arena;
import com.nbastats.aplicativobackend.repository.NBAStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class NBAStatsService {
    @Autowired
    private NBAStatsRepository nbaStatsRepository;

    public List<Arena> fetchArenas() throws IOException {
        return nbaStatsRepository.getArenas();
    }

    public List<GameDTO> fetchHomeTeamSeasonGames(int season, String team_nickname) throws IOException {
        return nbaStatsRepository.getHomeTeamSeasonGames(season, team_nickname);
    }

    public List<PlayerDTO> fetchSeasonPlayers(int season, String teamNickname) throws IOException {
        return nbaStatsRepository.getSeasonPlayers(season, teamNickname);
    }

    public List<SeasonDTO> fetchSeasons() throws IOException {
        return nbaStatsRepository.getSeasons();
    }

    public List<Arena> fetchTeams() {
        return nbaStatsRepository.getTeams();
    }

    public List<ArenaProfileDTO> fetchArenaProfile(String arena_name) throws IOException {
        return nbaStatsRepository.getArenasProfile(arena_name);
    }

    public List<GameDTO> fetchSeasonGames(int season) throws IOException {
        return nbaStatsRepository.getSeasonGames(season);
    }

    public List<GameProfileDTO> fetchGameProfile(int game_id) throws IOException {
        return nbaStatsRepository.getGameProfile(game_id);
    }

    public List<GameDTO> fetchTeamGames(String teamNickname) throws IOException {
        return nbaStatsRepository.getTeamGames(teamNickname);
    }

    public List<PlayerProfileDTO> fetchPlayerProfile(String playerName) throws IOException {
        return nbaStatsRepository.getPlayerProfile(playerName);
    }

    public List<SeasonTeamPointsDTO> fetchSeasonPointsStats(int season) throws IOException {
        return nbaStatsRepository.getSeasonPointsStats(season);
    }

    public List<SeasonVictoriesDTO> fetchSeasonWinStats(int season) throws IOException {
        return nbaStatsRepository.getSeasonWinStats(season);
    }
}

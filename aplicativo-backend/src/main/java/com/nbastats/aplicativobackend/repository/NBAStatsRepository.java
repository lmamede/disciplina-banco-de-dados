package com.nbastats.aplicativobackend.repository;

import com.google.common.io.Resources;
import com.nbastats.aplicativobackend.model.dto.*;
import com.nbastats.aplicativobackend.model.entities.Arena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository
public class NBAStatsRepository {
    private final String ARENA_QUERIES_PATH = "database/queries/Arena/";
    private final String GAME_QUERIES_PATH = "database/queries/Game/";
    private final String PLAYER_QUERIES_PATH = "database/queries/Player/";
    private final String SEASON_QUERIES_PATH = "database/queries/Season/";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    public List<Arena> getArenas() throws IOException {
        URL path = Resources.getResource(ARENA_QUERIES_PATH+"qry_all_arenas.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, (SqlParameterSource)  null,BeanPropertyRowMapper.newInstance(Arena.class)).toList();
    }

    public List<GameDTO> getHomeTeamSeasonGames(int season, String team_nickname) throws IOException {
        URL path = Resources.getResource(GAME_QUERIES_PATH+"qry_games_by_hometeam_season.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("season", season, "team_nickname", team_nickname),BeanPropertyRowMapper.newInstance(GameDTO.class)).toList();
    }

    public List<PlayerDTO> getSeasonPlayers(int season, String teamNickname) throws IOException {
        URL path = Resources.getResource(PLAYER_QUERIES_PATH+"qry_players_by_season_game.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("season", season, "team_nickname", teamNickname),BeanPropertyRowMapper.newInstance(PlayerDTO.class)).toList();
    }

    public List<SeasonDTO> getSeasons() throws IOException {
        URL path = Resources.getResource(SEASON_QUERIES_PATH+"qry_all_seasons.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, (SqlParameterSource)  null,BeanPropertyRowMapper.newInstance(SeasonDTO.class)).toList();
    }

    public List<Arena> getTeams() {
        return Collections.emptyList();
    }

    public List<ArenaProfileDTO> getArenasProfile(String arena_name) throws IOException {
        URL path = Resources.getResource(ARENA_QUERIES_PATH+"qry_arena_profile.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("arena_name", arena_name),BeanPropertyRowMapper.newInstance(ArenaProfileDTO.class)).toList();
    }

    public List<GameDTO> getSeasonGames(int season) throws IOException {
        URL path = Resources.getResource(GAME_QUERIES_PATH+"qry_games_by_season.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("season", season),BeanPropertyRowMapper.newInstance(GameDTO.class)).toList();
    }

    public List<GameProfileDTO> getGameProfile(int game_id) throws IOException {
        URL path = Resources.getResource(GAME_QUERIES_PATH+"qry_game_profile.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("game_id", game_id),BeanPropertyRowMapper.newInstance(GameProfileDTO.class)).toList();
    }

    public List<GameDTO> getTeamGames(String teamNickname) throws IOException {
        URL path = Resources.getResource(GAME_QUERIES_PATH+"qry_games_by_hometeam.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("team_nickname", teamNickname),BeanPropertyRowMapper.newInstance(GameDTO.class)).toList();
    }

    public List<PlayerProfileDTO> getPlayerProfile(String playerName) throws IOException {
        URL path = Resources.getResource(PLAYER_QUERIES_PATH+"qry_player_profile.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("player_name", playerName),BeanPropertyRowMapper.newInstance(PlayerProfileDTO.class)).toList();
    }

    public List<SeasonTeamPointsDTO> getSeasonPointsStats(int season) throws IOException {
        URL path = Resources.getResource(SEASON_QUERIES_PATH+"qry_points_avg.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("season", season),BeanPropertyRowMapper.newInstance(SeasonTeamPointsDTO.class)).toList();
    }

    public List<SeasonVictoriesDTO> getSeasonWinStats(int season) throws IOException {
        URL path = Resources.getResource(SEASON_QUERIES_PATH+"qry_victory_percentage.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, Map.of("season", season),BeanPropertyRowMapper.newInstance(SeasonVictoriesDTO.class)).toList();
    }
}

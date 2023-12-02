package com.nbastats.aplicativobackend.repository;

import com.google.common.io.Resources;
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

@Repository
public class CatalogueRepository {
    private final String ARENA_QUERIES_PATH = "database/queries/Arena/";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    public List<Arena> getArenas() throws IOException {
        URL path = Resources.getResource(ARENA_QUERIES_PATH+"qry_all_arenas.sql");
        String sql = Resources.toString(path, StandardCharsets.UTF_8);

        return jdbcTemplate.queryForStream(sql, (SqlParameterSource)  null,BeanPropertyRowMapper.newInstance(Arena.class)).toList();
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

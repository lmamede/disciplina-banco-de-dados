package com.nbastats.aplicativobackend.repository;

import com.nbastats.aplicativobackend.model.entities.Arena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository
public class NBAStatsRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    public List<Arena> getArenas()
    {
        String sql = " SELECT a.Name AS name, a.Capacity AS capacity" +
                " FROM Arena a ";

        return jdbcTemplate.queryForStream(sql, (SqlParameterSource) null,BeanPropertyRowMapper.newInstance(Arena.class)).toList();
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

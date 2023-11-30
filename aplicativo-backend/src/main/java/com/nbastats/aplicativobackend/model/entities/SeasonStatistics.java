package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonStatistics {
    private Season season;
    private double winPercentage;
    private int winningGames;
    private int loosingGames;
    private int gamesPlayed;
    private String conference;
    private Team team;
}

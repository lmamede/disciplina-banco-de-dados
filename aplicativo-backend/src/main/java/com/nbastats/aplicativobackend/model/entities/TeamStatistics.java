package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeamStatistics {
    private int rebounds;
    private int assists;
    private double percentage3point;
    private double percentageFreeThrow;
    private double percentageFieldGoal;
    private int points;
    private Team team;
}

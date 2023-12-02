package com.nbastats.aplicativobackend.model.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonTeamPointsDTO {
    private int season;
    private String teamNickname;
    private double pointsAverage;
}

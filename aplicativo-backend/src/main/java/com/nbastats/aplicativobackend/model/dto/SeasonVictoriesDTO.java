package com.nbastats.aplicativobackend.model.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonVictoriesDTO {
    private int season;
    private double homeWinPercentage;
    private double awayWinPercentage;
}

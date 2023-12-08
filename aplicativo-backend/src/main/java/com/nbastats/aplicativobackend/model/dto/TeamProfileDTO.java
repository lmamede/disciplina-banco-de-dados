package com.nbastats.aplicativobackend.model.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeamProfileDTO {
    private int teamID;
    private String teamNickname;
    private int foundationYear;
    private int totalWinningGames;
    private int totalLoosingGames;
    private int totalGamesPlayed;
    private double totalWinsPercentage;
    private double homeWinsPercentage;
}

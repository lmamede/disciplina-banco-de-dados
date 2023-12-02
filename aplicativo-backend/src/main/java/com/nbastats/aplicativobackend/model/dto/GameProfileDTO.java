package com.nbastats.aplicativobackend.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class GameProfileDTO {
    private int id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate date;
    private String status;
    private int season;
    private int pointsHome;
    private int pointsAway;
    private String teamHome;
    private String teamAway;
    private int homeRebounds;
    private int homeAssists;
    private int awayRebounds;
    private int awayAssists;
    private String home3PointPercentage;
    private String homeFreeThrowPercentage;
    private String homeFieldGoalPercentage;
    private String away3PointPercentage;
    private String awayFreeThrowPercentage;
    private String awayFieldGoalPercentage;

}

package com.nbastats.aplicativobackend.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
public class GameDTO {
    private int id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;
    private String status;
    private int season;
    private int pointsHome;
    private int pointsAway;
    private String teamHome;
    private String teamAway;
}

package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Game {
    private  int id;
    private Date date;
    private String status;
    private Season season;
    private Boolean win;
    private Team teamHome;
    private Team teamAway;


}

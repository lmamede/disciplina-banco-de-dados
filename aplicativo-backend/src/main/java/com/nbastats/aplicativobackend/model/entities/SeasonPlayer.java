package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonPlayer {
    private Player player;
    private Team team;
    private Season season;

}

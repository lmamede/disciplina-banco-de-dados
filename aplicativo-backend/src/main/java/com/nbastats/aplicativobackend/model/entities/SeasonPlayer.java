package com.nbastats.aplicativobackend.model.entities;


import com.nbastats.aplicativobackend.model.dto.PlayerDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeasonPlayer {
    private PlayerDTO player;
    private Team team;
    private Season season;

}

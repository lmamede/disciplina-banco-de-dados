package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Player {
    private int id;
    private String name;
    private String nickname;
    private int secondsPlayed;
}

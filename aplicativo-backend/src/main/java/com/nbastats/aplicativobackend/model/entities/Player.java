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

    public Player(int id, String name, String nickname, int secondsPlayed) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.secondsPlayed = secondsPlayed;
    }
}

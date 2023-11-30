package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Team {
    private int id;
    private String abbreviation;
    private String city;
    private String nickname;
    private int maxYear;
    private int minYear;
    private int foundationYear;
    private String name;
    private Arena arena;
}

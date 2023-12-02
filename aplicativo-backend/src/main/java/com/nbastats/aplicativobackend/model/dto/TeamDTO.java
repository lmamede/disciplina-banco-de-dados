package com.nbastats.aplicativobackend.model.dto;


import com.nbastats.aplicativobackend.model.entities.Arena;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeamDTO {
    private int id;
    private String abbreviation;
    private String city;
    private String nickname;
    private int maxYear;
    private int minYear;
    private int foundationYear;
    private String name;
    private String arenaName;
}

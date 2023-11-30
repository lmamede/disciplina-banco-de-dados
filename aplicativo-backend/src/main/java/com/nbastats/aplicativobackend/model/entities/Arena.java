package com.nbastats.aplicativobackend.model.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Arena {
    private int capacity;
    private String owner;

    public Arena(int capacity, String owner) {
        this.capacity = capacity;
        this.owner = owner;
    }
}

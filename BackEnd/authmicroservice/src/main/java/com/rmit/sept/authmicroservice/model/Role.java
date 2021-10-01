package com.rmit.sept.authmicroservice.model;

import javax.persistence.*;

@Entity
@Table(name = "ROLES")
public class Role {
    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    
    /*
    CONSTRUCTOR
     */
    
    public Role() {

    }
    
    public Role(String name) {
        this.name = name;
    }

    /*
    GETTERS AND SETTERS
     */

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
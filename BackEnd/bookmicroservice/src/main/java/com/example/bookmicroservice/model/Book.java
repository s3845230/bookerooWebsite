package com.example.bookmicroservice.model;


import javax.persistence.*;
import java.util.Date;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String number;
    

    private Date created_date;
    private Date updated_date;
    
    @PrePersist
    protected void onCreate() {
        this.created_date = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_date = new Date();
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String name) {
        this.title = name;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }
    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }
    public void setUpdated_date(Date updated_date) {
        this.updated_date = updated_date;
    }
}

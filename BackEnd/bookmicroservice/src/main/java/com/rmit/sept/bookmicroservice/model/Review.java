package com.rmit.sept.bookmicroservice.model;

import com.rmit.sept.bookmicroservice.helper.Base64Helper;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private int score;

    @Column(length = 4000)
    private String body;

    // https://stackoverflow.com/questions/52004135/spring-boot-jpa-how-to-implement-foreign-key-between-users-and-authorities-table
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book.bookId")
    private Book book;

    private Date created_at;
    private Date updated_at;

    @PrePersist
    protected void onCreation(){
        this.created_at = new Date();
    }
    protected void onUpdate(){
        this.updated_at = new Date();
    }
}

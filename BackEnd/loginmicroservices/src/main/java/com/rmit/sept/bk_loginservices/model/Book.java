package com.rmit.sept.bk_loginservices.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    //this probably needs @min @max if isbn has a set size
    @NotBlank(message = "Book requires isbn")
    private String isbn;

    @NotBlank(message = "Book requires title")
    private String title;

    @NotBlank(message = "Book requires author")
    private String author;

    @NotBlank(message = "Book requires genre")
    private String genre;

    @NotBlank(message = "Book requires synopsis")
    private String synopsis;

    private Date created_at;
    private Date updated_at;

    public Long getId() {return bookId;}
    public void setId(Long bookId) {this.bookId = bookId;}

    public String getIsbn() {return isbn;}
    public void setIsbn(String isbn) {this.isbn = isbn;}

    public String getTitle() {return title;}
    public void setTitle(String title) {this.title = title;}

    public String getAuthor() {return author;}
    public void setAuthor(String author) {this.author = author;}

    public String getGenre() {return genre;}
    public void setGenre(String genre) {this.genre = genre;}

    public String getSynopsis() {return synopsis;}
    public void setSynopsis(String synopsis) {this.synopsis = synopsis;}

    @PrePersist
    protected void onCreation(){
        this.created_at = new Date();
    }
    protected void onUpdate(){
        this.updated_at = new Date();
    }
}

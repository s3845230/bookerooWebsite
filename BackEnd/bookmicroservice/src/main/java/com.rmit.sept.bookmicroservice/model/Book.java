package com.rmit.sept.bookmicroservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Book {

    // Type of book listing
    enum Type {
        PERSONAL,
        NEW,
        SECONDHAND
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    //this probably needs @min @max if isbn has a set size
//    @NotBlank(message = "Book requires isbn")
    private String isbn;

//    @NotBlank(message = "Book requires title")
    private String title;

//    @NotBlank(message = "Book requires author")
    private String author;

//    @NotBlank(message = "Book requires genre")
    private String genre;

//    @NotBlank(message = "Book requires type")
    private Type type;

//    @NotBlank(message = "Book requires price")
    private Double price;

//    @NotBlank(message = "Book requires genre")
    private String publisher;

//    @NotBlank(message = "Book requires publicationDate")
    private Date publicationDate;

//    @NotBlank(message = "Book requires tagline")
    private String tagLine;

//    @NotBlank(message = "Book requires tableOfContents")
    private String tableOfContents;

//    @NotBlank(message = "Book requires blurb")
    private String blurb;

//    @NotBlank(message = "Book requires imageHash")
    private String imageHash;

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

    public Type getType() {return type;}
    public void setType(Type type) {this.type = type;}

    public Double getPrice() {return price;}
    public void setPrice(Double price) {this.price = price;}

    public String getPublisher() {return publisher;}
    public void setPublisher(String publisher) {this.publisher = publisher;}

    public Date getPublicationDate() {return publicationDate;}
    public void setPublicationDate(Date publicationDate) {this.publicationDate = publicationDate;}

    public String getTagLine() {return tagLine;}
    public void setTagLine(String tagLine) {this.tagLine = tagLine;}

    public String getTableOfContents() {return tableOfContents;}
    public void setTableOfContents(String tableOfContents) {this.tableOfContents = tableOfContents;}

    public String getBlurb() {return blurb;}
    public void setBlurb(String blurb) {this.blurb = blurb;}

    public String getImageHash() {return imageHash;}
    public void setImageHash(String imageHash) {this.imageHash = imageHash;}

    @PrePersist
    protected void onCreation(){
        this.created_at = new Date();
    }
    protected void onUpdate(){
        this.updated_at = new Date();
    }
}

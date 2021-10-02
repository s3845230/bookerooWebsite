package com.rmit.sept.bookmicroservice.model;

import com.rmit.sept.bookmicroservice.helper.Base64Helper;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "books")

public class Book {
    
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
    private String type;

    private String bookSeller;

    //    @NotBlank(message = "Book requires price")
    private Double price;

    //    @NotBlank(message = "Book requires genre")
    private String publisher;

    //    @NotBlank(message = "Book requires publicationDate")
    private Date publicationDate;

    //    @NotBlank(message = "Book requires tagline")
    private String tagline;

    //    @NotBlank(message = "Book requires tableOfContents")
    @Column(length = 4000)
    private String tableOfContents;

    //    @NotBlank(message = "Book requires blurb")
    @Column(length = 4000)
    private String blurb;

    //    @NotBlank(message = "Book requires imageHash")
    
    private String imageType;

    @Lob
    private byte[] imageBlob;

    private Date created_at;
    private Date updated_at;

    // https://stackoverflow.com/questions/52004135/spring-boot-jpa-how-to-implement-foreign-key-between-users-and-authorities-table
    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, orphanRemoval = false)
    private List<Review> listReviews = new ArrayList<>();

    @Transient
    private String imageData;

    /*
    Getters & Setters
     */

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

    public String getType() {return type;}
    public void setType(String type) {this.type = type;}

    public Double getPrice() {return price;}
    public void setPrice(Double price) {this.price = price;}

    public String getPublisher() {return publisher;}
    public void setPublisher(String publisher) {this.publisher = publisher;}

    public Date getPublicationDate() {return publicationDate;}
    public void setPublicationDate(Date publicationDate) {this.publicationDate = publicationDate;}

    public String getTagline() {return tagline;}
    public void setTagline(String tagLine) {this.tagline = tagLine;}

    public String getTableOfContents() {return tableOfContents;}
    public void setTableOfContents(String tableOfContents) {this.tableOfContents = tableOfContents;}

    public String getBlurb() {return blurb;}
    public void setBlurb(String blurb) {this.blurb = blurb;}

    public String getImageType() {
        return imageType;
    }
    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public byte[] getImageBlob() {return imageBlob;}
    public void setImageBlob(byte[] imageBlob) {this.imageBlob = imageBlob;}

    public String getImageData() {
        return imageData;
    }
    public void setImageData(String imageData) {
        this.imageData = imageData;
    }

    @PrePersist
    protected void onCreation(){
        this.created_at = new Date();
    }
    protected void onUpdate(){
        this.updated_at = new Date();
    }



}
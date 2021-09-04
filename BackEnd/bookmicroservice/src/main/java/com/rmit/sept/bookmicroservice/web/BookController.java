package com.rmit.sept.bookmicroservice.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bookmicroservice.model.Book;
import com.rmit.sept.bookmicroservice.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.xml.bind.DatatypeConverter;
import java.text.FieldPosition;
import java.text.ParseException;
import java.text.ParsePosition;
import java.util.Date;
import java.text.DateFormat;



@RestController
@CrossOrigin
@RequestMapping("/api/book/")
public class BookController {

    @Autowired
    private BookService bookService;

//    @PostMapping("/new")
//    public ResponseEntity<Book> createNewPerson(@RequestBody Book book) {
//
//        System.out.println(book);
//        System.out.println(book.getImageData());
//
//        bookService.saveOrUpdateBook(book);
//
//        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
//    }

    @PostMapping("/new")
    public ResponseEntity<Object> createNewPerson(@RequestBody String data) throws JsonProcessingException, ParseException {
        
        // Create empty book object
        Book book = new Book();

        // Import JSON data as jsonNode
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(data);

        // Separate jsonNode imageData into imageType and imageBlob
        String imageData = jsonNode.get("imageData").asText();
        String[] imageDataSplit = imageData.split(",");
        String imageType = imageDataSplit[0];
        byte[] imageBlob = DatatypeConverter.parseBase64Binary(imageDataSplit[1]);

        // Write jsonNode data to book object
        book.setTitle(jsonNode.get("title").asText());
        book.setAuthor(jsonNode.get("author").asText());
        book.setIsbn(jsonNode.get("isbn").asText());
        book.setGenre(jsonNode.get("genre").asText());
        book.setType(jsonNode.get("type").asText());
        book.setPrice(jsonNode.get("price").asDouble());
        book.setPublisher(jsonNode.get("publisher").asText());

        // TODO: PARSE JSON DATE AS JAVA DATE, NOT JUST INSERT STRING INTO DATABASE
        book.setPublicationDate(jsonNode.get("publicationDate").asText());

        book.setTagline(jsonNode.get("title").asText());
        book.setTableOfContents(jsonNode.get("title").asText());
        book.setBlurb(jsonNode.get("title").asText());
        book.setImageType(imageType);
        book.setImageBlob(imageBlob);

        bookService.saveOrUpdateBook(book);

        return new ResponseEntity<Object>(book, HttpStatus.CREATED);
    }

}
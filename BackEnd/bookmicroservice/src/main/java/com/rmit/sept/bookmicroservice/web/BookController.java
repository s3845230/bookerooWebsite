package com.rmit.sept.bookmicroservice.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bookmicroservice.helper.Base64Helper;
import com.rmit.sept.bookmicroservice.helper.DateHelper;
import com.rmit.sept.bookmicroservice.model.Book;
import com.rmit.sept.bookmicroservice.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/book/")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/new")
    public ResponseEntity<Object> createNewBook(@RequestBody String data) throws JsonProcessingException, ParseException {
        
        // Create empty book object
        Book book = new Book();

        // Import JSON data as jsonNode
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(data);

        // Separate jsonNode imageData into imageType and imageBlob

        String imageType = Base64Helper.base64ToDataType(jsonNode.get("imageData").asText());
        byte[] imageBlob = Base64Helper.base64ToByteStream(jsonNode.get("imageData").asText());

        // Convert JSON date to Java Date object
        Date publicationDate = DateHelper.stringToDate(jsonNode.get("publicationDate").asText());

        // Write jsonNode data to book object
        book.setTitle(jsonNode.get("title").asText());
        book.setAuthor(jsonNode.get("author").asText());
        book.setIsbn(jsonNode.get("isbn").asText());
        book.setGenre(jsonNode.get("genre").asText());
        book.setType(jsonNode.get("type").asText());
        book.setPrice(jsonNode.get("price").asDouble());
        book.setPublisher(jsonNode.get("publisher").asText());
        book.setPublicationDate(publicationDate);
        book.setTagline(jsonNode.get("tagline").asText());
        book.setTableOfContents(jsonNode.get("title").asText());
        book.setBlurb(jsonNode.get("title").asText());
        book.setImageType(imageType);
        book.setImageBlob(imageBlob);
        book.setImageData(jsonNode.get("imageData").asText());

        bookService.saveOrUpdateBook(book);
        return new ResponseEntity<Object>(book, HttpStatus.CREATED);
    }

    @GetMapping("/search")
    private List<Book> getAllBook() {
        return bookService.getAllBook();
    }

    @GetMapping("/search/{search}")
    private List<Book> getBook(@PathVariable("search") String search) {
        return bookService.getBookBySearch(search);
    }

    @GetMapping("/searchbyid/{id}")
    private Book getBookByID(@PathVariable("id") Long id) {
        System.out.println(bookService.getBookByID(id));
        return bookService.getBookByID(id);
    }
}
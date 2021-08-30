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
    public ResponseEntity<Object> createNewPerson(@RequestBody String data) throws JsonProcessingException {

//        System.out.println(data);

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(data);
        
        System.out.println(jsonNode.get("imageData"));
        
        
//        Book book = objectMapper.readValue(data, Book.class);
//        System.out.println(book.getImageData());

//        System.out.println(book);
//        System.out.println(book.getImage64());
//
//        bookService.saveOrUpdateBook(book);

//        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
        return null;
    }

}
package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/person")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book) {
        Book book1 = bookService.saveOrUpdateBook(book);
        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
    }
}

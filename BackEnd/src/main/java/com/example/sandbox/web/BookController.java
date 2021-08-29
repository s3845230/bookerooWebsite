package com.example.sandbox.web;


import com.example.sandbox.model.Book;
import com.example.sandbox.service.BookService;
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

    @PostMapping("/new")
    public ResponseEntity<Book> createNewPerson(@RequestBody Book book) {
        Book book1 = bookService.saveOrUpdateStudent(book);
        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
    }

}

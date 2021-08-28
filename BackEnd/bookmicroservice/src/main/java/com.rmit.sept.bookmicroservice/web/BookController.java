
package com.rmit.sept.bookmicroservice.web;

import com.rmit.sept.bookmicroservice.model.Book;
import com.rmit.sept.bookmicroservice.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/book/")
public class BookController {

    @Autowired
    private BookService bookService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/uploadBook")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book) {
        Book book1 = bookService.saveOrUpdateBook(book);
        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
    }

}

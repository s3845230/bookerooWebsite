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
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:8080") // authmicroservice
@RequestMapping("/api/book/")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/new")
    public ResponseEntity<Object> createNewBook(@RequestBody String data) throws JsonProcessingException, ParseException {
//        System.out.println(data);
        
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
        book.setBlurb(jsonNode.get("blurb").asText());
        book.setImageType(imageType);
        book.setImageBlob(imageBlob);
        book.setImageData(jsonNode.get("imageData").asText());
        book.setBookSeller(jsonNode.get("bookSeller").asText());

        bookService.saveOrUpdateBook(book);
        return new ResponseEntity<Object>(book, HttpStatus.CREATED);
    }

//    @GetMapping("/search")
//    private List<Book> getAllBook() {
//        return bookService.getAllBook();
//    }
    @GetMapping("/search")
    private ResponseEntity<Object> getAllBook() {
        return new ResponseEntity<Object>(bookService.getAllBook(), HttpStatus.OK);
  }

//    @GetMapping("/search/{search}")
//    private List<Book> getBook(@PathVariable("search") String search) {
//        return bookService.getBookBySearch(search);
//    }
    @GetMapping("/search/{search}")
    private ResponseEntity<Object> getBook(@PathVariable("search") String search) {
        return new ResponseEntity<Object>(bookService.getBookBySearch(search), HttpStatus.OK);
    }

    @GetMapping("/searchbyid/{id}")
    private ResponseEntity<Object> getBookByID(@PathVariable("id") Long id) {
        System.out.println("bookmicroservice.BookController.getBookByID(" + id + ")");
        // need if() for null return
        return new ResponseEntity<Object>(bookService.getBookByID(id).get(), HttpStatus.OK);
    }

    @PutMapping("/updateBook")
    public ResponseEntity<Object> updatePatientRecord(@RequestBody Book book) throws Exception {
        if (book == null || book.getBookId() == null) {
            throw new IllegalArgumentException("Book or BookID must not be null!");
        }
        Optional<Book> optionalBook = bookService.getBookByID(book.getBookId());
        if (optionalBook.isPresent() == false) {
            throw new IllegalArgumentException("Book with ID " + book.getBookId() + " does not exist.");
        }
        Book existingBook = optionalBook.get();

        bookService.saveOrUpdateBook(book);
        return new ResponseEntity<Object>(book, HttpStatus.CREATED);
    }
}
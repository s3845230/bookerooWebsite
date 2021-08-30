package com.rmit.sept.bookmicroservice.service;

import com.rmit.sept.bookmicroservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rmit.sept.bookmicroservice.model.Book;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;
    
    public Book saveOrUpdateBook(Book book) {

        return bookRepository.save(book);
    }

}

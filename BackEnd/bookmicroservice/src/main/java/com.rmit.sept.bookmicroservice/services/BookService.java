package com.rmit.sept.bookmicroservice.services;

import com.rmit.sept.bookmicroservice.model.Book;
import com.rmit.sept.bookmicroservice.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book saveOrUpdateBook(Book book) {
        return bookRepository.save(book);
    }
}

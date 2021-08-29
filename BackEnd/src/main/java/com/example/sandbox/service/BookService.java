package com.example.sandbox.service;

import com.example.sandbox.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.sandbox.model.Book;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;
    
    public Book saveOrUpdateStudent(Book book) {

        // TODO: BUSINESS LOGIC

        return bookRepository.save(book);
    }

}

package com.rmit.sept.bookmicroservice.service;

import com.rmit.sept.bookmicroservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rmit.sept.bookmicroservice.model.Book;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;
    
    public Book saveOrUpdateBook(Book book) {

        return bookRepository.save(book);
    }

    public List<Book> getBookBySearch(String search) {
        List<Book> books = new ArrayList<>();
        List<Book> uniqueBooks = new ArrayList<>();
        Book currentBook;
        //needs to avoid doubling up
        bookRepository.findByTitleContaining(search).forEach(book -> books.add(book));
        bookRepository.findByAuthorContaining(search).forEach(book -> books.add(book));
        bookRepository.findByTaglineContaining(search).forEach(book -> books.add(book));
        bookRepository.findByBlurbContaining(search).forEach(book -> books.add(book));
        bookRepository.findByPublisherContaining(search).forEach(book -> books.add(book));
        bookRepository.findByIsbnContaining(search).forEach(book -> books.add(book));
        for (int i = 0; i < books.size(); i++) {
            boolean newBook = true;
            currentBook = books.get(i);
            for (int j = 0; j < uniqueBooks.size(); j++) {
                if (currentBook.getId() == uniqueBooks.get(j).getId()) {
                    newBook = false;
                }
            }
            if (newBook) {
                uniqueBooks.add(currentBook);
            }
        }
        return uniqueBooks;
    }

    public List<Book> getAllBook() {
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(book -> books.add(book));
        return books;
    }

}

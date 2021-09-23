package com.rmit.sept.bookmicroservice.service;

import com.rmit.sept.bookmicroservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rmit.sept.bookmicroservice.model.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

        //finds all books containing the search phrase
        bookRepository.findByTitleContainingIgnoreCase(search).forEach(book -> books.add(book));
        bookRepository.findByAuthorContainingIgnoreCase(search).forEach(book -> books.add(book));
        bookRepository.findByTaglineContainingIgnoreCase(search).forEach(book -> books.add(book));
        bookRepository.findByBlurbContainingIgnoreCase(search).forEach(book -> books.add(book));
        bookRepository.findByPublisherContainingIgnoreCase(search).forEach(book -> books.add(book));
        bookRepository.findByIsbnContainingIgnoreCase(search).forEach(book -> books.add(book));

        //this section is just to block books from being counted twice, for example:
        //if a book had the author's name in the title, it would be counted twice
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

    public Optional<Book> getBookByID(Long search) {
        return bookRepository.findById(search);
    }

}

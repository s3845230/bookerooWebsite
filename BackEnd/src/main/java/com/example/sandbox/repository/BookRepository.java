package com.example.sandbox.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.sandbox.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);
    
}

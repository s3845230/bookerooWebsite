package com.example.bookmicroservice.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.bookmicroservice.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);
    
}

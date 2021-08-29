package com.rmit.sept.bookmicroservice.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sept.bookmicroservice.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);
    
}

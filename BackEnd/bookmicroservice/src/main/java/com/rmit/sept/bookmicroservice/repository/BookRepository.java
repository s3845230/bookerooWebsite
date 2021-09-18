package com.rmit.sept.bookmicroservice.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sept.bookmicroservice.model.Book;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);

    List<Book> findByTitleContainingIgnoreCase(String search);
    List<Book> findByAuthorContainingIgnoreCase(String search);
    List<Book> findByTaglineContainingIgnoreCase(String search);
    List<Book> findByBlurbContainingIgnoreCase(String search);
    List<Book> findByPublisherContainingIgnoreCase(String search);
    List<Book> findByIsbnContainingIgnoreCase(String search);
}

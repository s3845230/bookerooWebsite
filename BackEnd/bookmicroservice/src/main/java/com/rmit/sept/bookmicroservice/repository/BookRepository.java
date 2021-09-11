package com.rmit.sept.bookmicroservice.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sept.bookmicroservice.model.Book;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);

    List<Book> findByTitleContaining(String search);
    List<Book> findByAuthorContaining(String search);
    List<Book> findByTaglineContaining(String search);
    List<Book> findByBlurbContaining(String search);
    List<Book> findByPublisherContaining(String search);
    List<Book> findByIsbnContaining(String search);
}

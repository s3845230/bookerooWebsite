package com.rmit.sept.bookmicroservice.Repositories;

import com.rmit.sept.bookmicroservice.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    Book findByBookId(Long bookId);
}

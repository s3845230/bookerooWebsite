package com.rmit.sept.bookmicroservice.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sept.bookmicroservice.model.Review;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {

    @Override
    Iterable<Review> findAllById(Iterable<Long> iterable);
}

package com.rmit.sept.bookmicroservice.service;

import com.rmit.sept.bookmicroservice.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rmit.sept.bookmicroservice.model.Review;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveOrUpdateReview(Review review) {
        return reviewRepository.save(review);
    }
}

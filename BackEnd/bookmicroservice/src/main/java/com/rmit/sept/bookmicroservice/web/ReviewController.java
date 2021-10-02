package com.rmit.sept.bookmicroservice.web;

import com.rmit.sept.bookmicroservice.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:8080") // authmicroservice
@RequestMapping("/api/review/")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

}

package com.rmit.sept.authmicroservice.web;

import com.rmit.sept.authmicroservice.security.SecurityConstant;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

/*
This class acts as a REST request relay between the FrontEnd and bookmicroservice. It has been implemented this way to allow authmicroservice to perform any authorisation actions before allowing the api requests to be sent to the bookmicroservice. This means that no user authorisation has to be performed in bookmicroservice.
 */

@RestController
@CrossOrigin(origins = SecurityConstant.FRONT_END_URL) // FRONTEND URL
@RequestMapping("/api/book/")
public class BookController {
    
    String bookmicroserviceUrl = "http://localhost:8081/api/book"; // BOOKMICROSERVICE API URL
    RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/new")
    public String createNewBook(@RequestBody String data){
        System.out.println("authmicroservice.BookController.createNewBook()");

        String uri = bookmicroserviceUrl + "/new";

        return restTemplate.postForObject(uri, data, String.class);
    }

    @GetMapping("/search")
    private String getAllBook() {
        System.out.println("authmicroservice.BookController.getAllBook()");

        String uri = bookmicroserviceUrl + "/search";

        return restTemplate.getForObject(uri, String.class);
    }

    @GetMapping("/search/{search}")
    private String getBook(@PathVariable("search") String search) {

        String uri = bookmicroserviceUrl + "/search/{search}";
        
        return restTemplate.getForObject(uri, String.class, search);
    }

    @GetMapping("/searchbyid/{id}")
    private String getBookByID(@PathVariable("id") Long id) {
        System.out.println("authmicroservice.BookController.getBookByID(" + id + ")");

        String uri = bookmicroserviceUrl + "/searchbyid/{id}";

        return restTemplate.getForObject(uri, String.class, id);
    }

    @PutMapping("/updateBook")
    public void updateBook(@RequestBody String data) {
        System.out.println("authmicroservice.BookController.updateBook()");

        String uri = bookmicroserviceUrl + "/updateBook";

        restTemplate.put(uri, data, String.class);
    }
}
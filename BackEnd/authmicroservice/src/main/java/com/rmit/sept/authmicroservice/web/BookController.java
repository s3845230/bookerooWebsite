package com.rmit.sept.authmicroservice.web;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

/*
This class acts as a REST request relay between the FrontEnd and bookmicroservice. It has been implemented this way to allow authmicroservice to perform any authorisation actions before allowing the api requests to be sent to the bookmicroservice. This means that no user authorisation has to be performed in bookmicroservice.
 */

@RestController
@CrossOrigin("http://localhost:3000") // FRONTEND URL
@RequestMapping("/api/book/")
public class BookController {
    
    String bookmicroserviceUrl = "http://localhost:8081/api/book"; // BOOKMICROSERVICE API URL

    @PostMapping("/new")
    public String createNewBook(@RequestBody String data){
        System.out.println("authmicroservice.BookController.createNewBook()");
        System.out.println();
//        System.out.println(data);
        String uri = bookmicroserviceUrl + "/new";
        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.postForObject(uri, data, String.class);
    }

    @GetMapping("/search")
    private String getAllBook() {
        String uri = bookmicroserviceUrl + "/search";
        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(uri, String.class);
    }

    @GetMapping("/search/{search}")
    private String getBook(@PathVariable("search") String search) {
        String uri = bookmicroserviceUrl + "/search/{search}";
        RestTemplate restTemplate = new RestTemplate();
        
        return restTemplate.getForObject(uri, String.class, search);
    }

    @GetMapping("/searchbyid/{id}")
    private String getBookByID(@PathVariable("id") Long id) {
        System.out.println("authmicroservice.BookController.getBookByID(" + id + ")");

        String uri = bookmicroserviceUrl + "/searchbyid/{id}";
        RestTemplate restTemplate = new RestTemplate();
        
//        System.out.println(restTemplate.getForObject(uri, String.class, id));

        return restTemplate.getForObject(uri, String.class, id);
    }
}
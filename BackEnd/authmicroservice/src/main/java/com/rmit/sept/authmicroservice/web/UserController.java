package com.rmit.sept.authmicroservice.web;

import com.rmit.sept.authmicroservice.security.SecurityConstant;
import com.sun.org.apache.xpath.internal.operations.String;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
This class provides the REST API mappings for all User Database CRUD Requests:
1. addUser(): YET TO BE IMPLEMENTED
2. editUser(): YET TO BE IMPLEMENTED
3. deleteUser(): YET TO BE IMPLEMENTED
 */

@RestController
@CrossOrigin(origins = SecurityConstant.FRONT_END_URL)
@RequestMapping("/api/user/")
public class UserController {
    
    // TEST API
    @GetMapping("/test")
    public java.lang.String test() {
        java.lang.String s = "TEST GET SUCCESS";
        return s;
    }
    
}

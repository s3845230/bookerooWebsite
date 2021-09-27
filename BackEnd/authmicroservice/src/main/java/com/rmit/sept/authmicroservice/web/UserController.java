package com.rmit.sept.authmicroservice.web;

import com.rmit.sept.authmicroservice.model.User;
import com.rmit.sept.authmicroservice.security.SecurityConstant;
import com.rmit.sept.authmicroservice.service.UserService;
import com.sun.org.apache.xpath.internal.operations.String;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @Autowired
    private UserService userService;
    
    // TEST API
    @GetMapping("/test")
    public java.lang.String test() {
        java.lang.String s = "TEST GET SUCCESS";
        return s;
    }

    @GetMapping("/approval/unapprovedList")
    private List<User> getUnapprovedUserList() {
        return userService.getUnapprovedUserList();
    }

    @PutMapping("/approval/approveUser")
    public ResponseEntity<Object> updateUser(@RequestBody Long id) throws Exception {
        if (id == null) {
            throw new IllegalArgumentException("Id must not be null!");
        }
        Optional<User> optionalUser = userService.getUserByID(id);
        if (optionalUser.isPresent() == false) {
            throw new IllegalArgumentException("User with ID " + id + " does not exist.");
        }
        User existingUser = optionalUser.get();
        existingUser.setApproved(true);

        userService.saveOrUpdateUser(existingUser);
        return new ResponseEntity<Object>(existingUser, HttpStatus.CREATED);
    }
}

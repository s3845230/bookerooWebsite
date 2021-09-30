package com.rmit.sept.authmicroservice.web;

import com.rmit.sept.authmicroservice.model.User;
import com.rmit.sept.authmicroservice.security.SecurityConstant;
import com.rmit.sept.authmicroservice.service.UserService;
import com.sun.org.apache.xpath.internal.operations.String;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
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

    @GetMapping("/allUser")
    private List<User> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping("/userById/{id}")
    private User getUserById(@PathVariable("id") Long id){
        return userService.getUserByID(id).get();
    }

    @PutMapping("/updateUser")
    public ResponseEntity<Object> editUser(@RequestBody User user) throws Exception {
        if (user == null || user.getId() == null){
            throw new IllegalArgumentException("User or UserID must not be null! ");
        }
        Optional<User> optionalUser = userService.getUserByID(user.getId());
        if(optionalUser.isPresent() == false){
            throw new IllegalArgumentException("User with ID " + user.getId() + " does not exist.");
        }
        User extUser = optionalUser.get();
        extUser.setUsername(user.getUsername());
        extUser.setAccountRole(user.getAccountRole());
        extUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        extUser.setFullName(user.getFullName());


        userService.saveOrUpdateUser(extUser);
        return new ResponseEntity<Object>(extUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<Long> deleteUserById(@PathVariable("id") Long id){
        boolean isRemoved = userService.deleteUserById(id);
        if (!isRemoved){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}

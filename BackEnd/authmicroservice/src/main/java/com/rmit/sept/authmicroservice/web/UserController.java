package com.rmit.sept.authmicroservice.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.authmicroservice.model.Role;
import com.rmit.sept.authmicroservice.model.User;
import com.rmit.sept.authmicroservice.security.SecurityConstant;
import com.rmit.sept.authmicroservice.service.MapValidationErrorService;
import com.rmit.sept.authmicroservice.service.UserService;
import com.rmit.sept.authmicroservice.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

/*
This class provides the REST API mappings for all User Database CRUD Requests:
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
        return "TEST GET SUCCESS";
    }

    @Autowired
    private MapValidationErrorService mapValidationErrorService;
    @Autowired
    private UserService userService;
    @Autowired
    private UserValidator userValidator;

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody String data, BindingResult result) throws JsonProcessingException {
        System.out.println("UserController.newUser()");
        
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User user = new User();

        // IMPORT JSON DATA AS JsonNode
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(data);

        user.setUsername(jsonNode.get("username").asText());
        user.setFullName(jsonNode.get("fullName").asText());
        user.setPassword(jsonNode.get("password").asText());
        user.setConfirmPassword(jsonNode.get("confirmPassword").asText());
        user.setAddress(jsonNode.get("address").asText());
        user.setSuburb(jsonNode.get("suburb").asText());
        user.setState(jsonNode.get("state").asText());
        user.setPostcode(jsonNode.get("postcode").asText());
        user.setPhoneNumber(jsonNode.get("phoneNo").asText());
        user.setAbn(jsonNode.get("ABN").asText());
        user.addRole(new Role(jsonNode.get("accountRole").asText()));

        // AUTOMATICALLY APPROVE USER
        user.setApproved(true);

        // VALIDATE THAT PASSWORDS MATCH
        userValidator.validate(user,result);

        userService.saveUser(user);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    
}

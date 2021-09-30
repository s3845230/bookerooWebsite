
package com.rmit.sept.authmicroservice.web;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.rmit.sept.authmicroservice.repository.UserRepository;
import com.rmit.sept.authmicroservice.model.User;
import com.rmit.sept.authmicroservice.payload.JWTLoginSucessReponse;
import com.rmit.sept.authmicroservice.payload.LoginRequest;
import com.rmit.sept.authmicroservice.security.JwtTokenProvider;
import com.rmit.sept.authmicroservice.service.MapValidationErrorService;
import com.rmit.sept.authmicroservice.service.UserService;
import com.rmit.sept.authmicroservice.validator.UserValidator;
import com.rmit.sept.authmicroservice.security.SecurityConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.validation.Valid;

import static com.rmit.sept.authmicroservice.security.SecurityConstant.TOKEN_PREFIX;


/*/
This class receives the API Requests for User Authentication:
1. registerUser(): Registering a user (inserting new user details into database)
2. authenticateUser(): Logging them in (providing them with a JWT).
 */

@RestController
@CrossOrigin(origins = SecurityConstant.FRONT_END_URL)
@RequestMapping("/api/auth/")
public class AuthenticationController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;
    @Autowired
    private UserService userService;
    @Autowired
    private UserValidator userValidator;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) throws JsonProcessingException {
        // Validate passwords match
        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User newUser = userService.saveUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    @Autowired
    private JwtTokenProvider tokenProvider;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }
        
        /*
        User Login Approval Validation
        Author: Roman O'Brien

        This simple method ensures that a non-approved user is not able to log in, by having the Spring Security AuthenticationManager fail to find a user with the same username (as we've appended a nonsense string to it).

        Yes, this is not an elegant solution, but it fulfils the core requirement of this system - which is to not provide a non-approved user with a valid JWT. Otherwise this would give them an annoying attack vector, and we'd have to do a check on every single authorisation request to check whether the user is valid or not. Alternatively, we may be able to override the Spring Security AuthenticationProvider and have it reject based on the value of user.isApproved().
         */

        User user = userRepository.findByUsername(loginRequest.getUsername());
        String isApproved = "";
//        if (!user.isApproved()) {
//            System.out.println("LOGIN REJECTED - USER NOT APPROVED");
//            isApproved = "NotApproved";
//        }
        
        System.out.println(loginRequest.getUsername());
        System.out.println(loginRequest.getPassword());
        
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername() + isApproved,
                        loginRequest.getPassword()
                )
        );
        
        // GENERATE JWT
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);

        // CREATE AND SEND RESPONSE
        JWTLoginSucessReponse response = new JWTLoginSucessReponse(true, jwt);
        return ResponseEntity.ok(response);
    }
}
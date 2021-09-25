
package com.rmit.sept.loginmicroservice.web;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.rmit.sept.loginmicroservice.Repositories.UserRepository;
import com.rmit.sept.loginmicroservice.model.User;
import com.rmit.sept.loginmicroservice.payload.JWTLoginSucessReponse;
import com.rmit.sept.loginmicroservice.payload.LoginRequest;
import com.rmit.sept.loginmicroservice.security.JwtTokenProvider;
import com.rmit.sept.loginmicroservice.services.MapValidationErrorService;
import com.rmit.sept.loginmicroservice.services.UserService;
import com.rmit.sept.loginmicroservice.validator.UserValidator;
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

import static com.rmit.sept.loginmicroservice.security.SecurityConstant.TOKEN_PREFIX;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

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
        System.out.println("loginRequest: " + loginRequest);
        System.out.println("result: " + result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) {
            System.out.println("errorMap: " + errorMap);
            return errorMap;
        }

        System.out.println("CODE REACH ERRORMAP");

        // REJECT REQUEST IF USER IS NOT APPROVED
//        User user = userRepository.findByUsername(loginRequest.getUsername());
//        if (!user.isApproved()) {
//            System.out.println("LOGIN REJECTED - USER NOT APPROVED");
//            return null;
//        }

        System.out.println("CODE REACH pre-AUTH");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        System.out.println("CODE REACH post-AUTH");
        
        System.out.println("authentication: " + authentication);

        // GENERATE JWT
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);

        // CREATE AND SEND RESPONSE
        JWTLoginSucessReponse response = new JWTLoginSucessReponse(true, jwt);
        System.out.println("response: " + response);
        return ResponseEntity.ok(response);
    }
}

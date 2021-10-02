package com.rmit.sept.authmicroservice.service;

import com.rmit.sept.authmicroservice.repository.UserRepository;
import com.rmit.sept.authmicroservice.exception.UsernameAlreadyExistsException;
import com.rmit.sept.authmicroservice.model.Role;
import com.rmit.sept.authmicroservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){
        /*  newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            Username has to be unique (exception)
            Make sure that password and confirmPassword match
            We don't persist or show the confirmPassword
            return userRepository.save(newUser);
        */
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            // Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match

            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");

            return userRepository.save(newUser);

        }
        catch (Exception e) {
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }
    }
}

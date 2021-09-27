package com.rmit.sept.authmicroservice.service;

import com.rmit.sept.authmicroservice.repository.UserRepository;
import com.rmit.sept.authmicroservice.exception.UsernameAlreadyExistsException;
import com.rmit.sept.authmicroservice.model.Role;
import com.rmit.sept.authmicroservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

            // Only automatically approve CUSTOMER users
            newUser.setApproved(newUser.getAccountRole() == Role.AccountRole.valueOf("CUSTOMER"));
            
            return userRepository.save(newUser);

        }
        catch (Exception e) {
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }
    }

    public List<User> getUnapprovedUserList() {
        List<User> unapprovedUsers = new ArrayList<>();

        //finds all users not currently approved
        userRepository.findByApprovedContainingIgnoreCase("false").forEach(user -> unapprovedUsers.add(user));

        return unapprovedUsers;
    }

    public Optional<User> getUserByID(Long id) {
        return userRepository.findById(id);
    }

    public User saveOrUpdateUser(User user) {
        return userRepository.save(user);
    }
}

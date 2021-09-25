package com.rmit.sept.loginmicroservice.services;

import com.rmit.sept.loginmicroservice.Repositories.UserRepository;
import com.rmit.sept.loginmicroservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user==null) {
            System.out.println("CustomerUserDetailsService.loadUserByUsername(): USER NOT FOUND");
            new UsernameNotFoundException("User not found");
        }
        return user;
    }

    @Transactional
    public User loadUserById(Long id){
        User user = userRepository.getById(id);
        if (user==null) {
            System.out.println("CustomerUserDetailsService.loadUserById(): USER NOT FOUND");
            new UsernameNotFoundException("User not found");
        }
        return user;

    }
}

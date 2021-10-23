package com.rmit.sept.authmicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

// Main class for Login Microservice
@SpringBootApplication
public class ms_auth extends SpringBootServletInitializer {

    private static final Logger LOGGER = LogManager.getLogger(ms_auth.class);

    public static void main(String[] args) {
        SpringApplication.run(ms_auth.class, args);
        LOGGER.info("Info level log message");
        LOGGER.debug("Debug level log message");
        LOGGER.error("Error level log message");
    }
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

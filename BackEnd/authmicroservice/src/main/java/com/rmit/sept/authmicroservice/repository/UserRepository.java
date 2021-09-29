package com.rmit.sept.authmicroservice.repository;

import com.rmit.sept.authmicroservice.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    User getById(Long id);

    @Override
    Iterable<User> findAllById(Iterable<Long> iterable);

    List<User> findByApprovedContainingIgnoreCase(String bool);
}

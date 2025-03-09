package com.example.userdb.Data;

import jakarta.validation.Valid;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User save(@Valid User user);

    List<User> findAll();

    Optional<User> findById(String id);

    Optional<User> findByEmail(String email);
}

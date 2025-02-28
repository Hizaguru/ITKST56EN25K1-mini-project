package com.example.userdb.Controller;

import com.example.userdb.Data.User;
import com.example.userdb.Data.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepo;

    public UserController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userRepo.findById(id);
    }

    @GetMapping("/name/{name}")
    public List<User> getUsersByName(@PathVariable String name) {
        return userRepo.findByName(name);
    }

    @GetMapping("/email/{email}")
    public Optional<User> getUserByEmail(@PathVariable String email) {
        return userRepo.findByEmail(email);
    }

    @GetMapping("/age/{age}")
    public List<User> getUsersByAge(@PathVariable int age) {
        return userRepo.findByAgeGreaterThanEqual(age);
    }

    @GetMapping("/role/{role}")
    public List<User> getUsersByRole(@PathVariable String role) {
        return userRepo.findByRole(role);
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userRepo.deleteById(id);
    }

    @DeleteMapping("/name/{name}")
    public void deleteUserByName(@PathVariable String name) {
        userRepo.deleteByName(name);
    }
}

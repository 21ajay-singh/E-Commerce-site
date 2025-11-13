package com.ecomerce.site.services;



// import java.lang.foreign.Linker.Option;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.ecomerce.site.models.user;
import com.ecomerce.site.repository.userRepo;
// import com.google.common.base.Optional;

import java.util.HashMap;
// import java.util.ArrayList;
import java.util.Map;


@Service
public class userService {
    
    @Autowired
    private userRepo repo;

    public String findbyEmail(String email){
        user existingUser = repo.findByEmail(email);
        if(existingUser != null){
            return "User with this email already exists";
        }
        return null;
    }

    public void registerUser(user user){
        user.setAccountStatus(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setSession(LocalDateTime.now().plusHours(1));
        repo.save(user);
    }

    public boolean isSessionExpired(String email) {
        user user = repo.findByEmail(email);
        if (user == null) return true;
        return LocalDateTime.now().isAfter(user.getSession());
    }

    public Map<String,Object> loginUser(Map<String,String> loginData){
        String email = loginData.get("email");
        String password = loginData.get("password");

        user user = repo.findByEmail(email);
        Map<String, Object> response = new HashMap<>();

    if (user != null && user.getPassword().equals(password)) {
        response.put("success", true);
        response.put("message", "Login successful!");
        response.put("user", user);
        return response;
    } else {
        response.put("success", false);
        response.put("message", "Invalid email or password");
        return response;
    }
    }

 }
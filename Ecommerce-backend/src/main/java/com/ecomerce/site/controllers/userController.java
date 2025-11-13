package com.ecomerce.site.controllers;







// import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ecomerce.site.models.user;
import com.ecomerce.site.services.userService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:5173")
public class userController {
    
    @Autowired
    private userService service;

    @PostMapping("/signup")
    public String registerUser(@RequestBody user user){
        if(service.findbyEmail(user.getEmail()) !=null){
            return "User with this email already exists";
        }
        service.registerUser(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Map<String, String> loginData){
        Map<String,Object> response=service.loginUser(loginData);
        return ResponseEntity.ok(response);
    }
    
    
}

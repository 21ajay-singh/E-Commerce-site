package com.ecomerce.site.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecomerce.site.repository.userRepo;
import com.ecomerce.site.models.UserPrinciple;
import com.ecomerce.site.models.user;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private userRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        
        user user=repo.findByEmail(username);

        if(user==null){
            System.out.println("user not found");
            throw new UsernameNotFoundException("user not found");
        }

        
        return new UserPrinciple(user);
    }
}

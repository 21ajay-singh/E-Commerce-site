package com.ecomerce.site.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.site.models.user;
// import java.util.Optional;





@Repository
public interface userRepo extends JpaRepository<user, Long> {
    user findByEmail(String email);
    // user findByEmail(String username);
}
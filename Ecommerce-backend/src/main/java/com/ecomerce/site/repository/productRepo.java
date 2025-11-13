package com.ecomerce.site.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomerce.site.models.product;

@Repository
public interface productRepo extends JpaRepository<product, Long> {
    
}

package com.ecomerce.site.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomerce.site.models.product;
import com.ecomerce.site.repository.productRepo;
import java.util.List;

@Service
public class productService {
    
    @Autowired
    private productRepo repo;

    public List<product> getAll(){
        return repo.findAll();
    }

    public product addProduct(product product){
        return repo.save(product);
    }
}

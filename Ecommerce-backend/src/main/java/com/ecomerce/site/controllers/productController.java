package com.ecomerce.site.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomerce.site.services.productService;
import com.ecomerce.site.models.product;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins ="http://localhost:5173" )
public class productController {
    
    @Autowired
    private productService service;

    @GetMapping("/All")
    public List<product> getAllProducts(){
        return service.getAll();
    }

    @PostMapping("/addProduct")
    public product addProduct(@RequestBody product product){
        return service.addProduct(product);
    }
}

package com.example.myfirstspringboot.Services;

import com.example.myfirstspringboot.Entites.Product;

import java.util.List;

public interface ProductServiceI{
    Product addProduct(Product p);
    boolean deleteProduct(Product p);
    boolean deleteProduct(long id);
    Product modifyProduct(Product p);
    List<Product> getAllProducts();
    void updatePromo(Long id);
}
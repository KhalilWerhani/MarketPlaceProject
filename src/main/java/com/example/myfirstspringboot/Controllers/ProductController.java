package com.example.myfirstspringboot.Controllers;


import com.example.myfirstspringboot.Entites.Product;
import com.example.myfirstspringboot.Services.ProductServiceI;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController("/product")
public class ProductController {
    ProductServiceI productService;

    public ProductController(ProductServiceI productService) {
        this.productService = productService;
    }


    @PostMapping("/add")
    public void add(@ModelAttribute Product p){
        productService.addProduct(p);
    }


    @DeleteMapping("/delete")
    public void delete(@ModelAttribute Product p ){
        productService.deleteProduct(p);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id ){
        productService.deleteProduct(id);
    }
    @GetMapping("all")
    public List<Product> listProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/updatePromo/{id}")
    public void updatePromotion(@PathVariable Long id) {
        try {
            productService.updatePromo(id);
        } catch (Exception e) {
            System.out.println("error");
        }
    }






}
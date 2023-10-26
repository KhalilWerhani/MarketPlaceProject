package com.example.myfirstspringboot.Services;

import com.example.myfirstspringboot.Entites.Product;
import com.example.myfirstspringboot.Repositories.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService implements ProductServiceI{
    ProductRepo productRepo;

    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }
    @Override
    public Product addProduct(Product p) {
        return productRepo.save(p);
    }
    @Override
    public boolean deleteProduct(Product p) {
        if (productRepo.existsById(p.getId())){
            productRepo.delete(p);
            return true;
        }
        return false;
    }
    @Override
    public boolean deleteProduct(long id) {
        if (productRepo.existsById(id)){
            productRepo.deleteById(id);
            return true;
        }
        return false;
    }
    @Override
    public Product modifyProduct(Product p) {
        return productRepo.save(p);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public void updatePromo(Long id) {
        var p= productRepo.findById(id).get();
        p.setPromotion(!p.isPromotion());
        productRepo.save(p);
    }

}

package com.example.myfirstspringboot.Repositories;


import com.example.myfirstspringboot.Entites.Product;
import com.example.myfirstspringboot.Entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
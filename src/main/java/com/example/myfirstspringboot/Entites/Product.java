package com.example.myfirstspringboot.Entites;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String image;

    private double price;

    private boolean promotion;

    private String description;

    private Long available;




}

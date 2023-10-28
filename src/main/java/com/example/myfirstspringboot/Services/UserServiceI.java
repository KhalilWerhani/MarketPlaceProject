package com.example.myfirstspringboot.Services;

import com.example.myfirstspringboot.Entites.User;

import java.util.List;


public interface UserServiceI{
    User addUser(User u);
    boolean deleteUser(User u);
    boolean deleteUser(long id);
    User modifyUser(User u);
    List<User> getAllUsers();

}

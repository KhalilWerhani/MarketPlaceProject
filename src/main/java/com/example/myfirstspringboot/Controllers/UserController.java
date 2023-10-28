

package com.example.myfirstspringboot.Controllers;


import com.example.myfirstspringboot.Entites.User;
import com.example.myfirstspringboot.Services.UserServiceI;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController("/user")
public class UserController {
    UserServiceI userService;

    public UserController(UserServiceI userService) {

        this.userService = userService;

    }


    @PostMapping("/adduser")
    @ResponseBody
    public void add(@RequestBody User u){
        System.out.println(u.getUsername());
        userService.addUser(u);
    }


    @DeleteMapping("/deleteuser")
    public void delete(@ModelAttribute User u ){
        userService.deleteUser(u);
    }
    @DeleteMapping("/delete/{userId}")
    public void delete(@PathVariable Long userId ){
        userService.deleteUser(userId);
    }


    @GetMapping("/allusers")
    public List<User> listUsers(){
        return userService.getAllUsers();
    }


}


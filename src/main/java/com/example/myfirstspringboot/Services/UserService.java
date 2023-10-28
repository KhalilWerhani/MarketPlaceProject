package com.example.myfirstspringboot.Services;


import com.example.myfirstspringboot.Entites.User;
import com.example.myfirstspringboot.Repositories.UserRepo;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public class UserService implements UserServiceI {

    UserRepo userRepo ;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User addUser(User u) {
        return userRepo.save(u);
    }

    @Override
    public boolean deleteUser(User u) {
        if (userRepo.existsById(u.getUserId())){
            userRepo.delete(u);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteUser(long id) {
        if (userRepo.existsById(id)){
            userRepo.deleteById(id);
            return true;
        }
        return false;
    }


    @Override
    public User modifyUser(User u) {
        return userRepo.save(u);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceNew} from "../services/ProductServiceNew";
import {UserService} from "../services/UserService";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userFormGroup!:FormGroup;

  constructor(private fb :FormBuilder , private userService:UserService) {

  }

  ngOnInit():void {
    this.userFormGroup=this.fb.group({
      image:this.fb.control(null,[Validators.required ]),
      username:this.fb.control(null,[Validators.required , Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.required ]),
      password:this.fb.control(null,),
      location:this.fb.control(null,[Validators.required ,Validators.minLength(5)]),
      phone:this.fb.control(null,[Validators.required , Validators.minLength(7)]),
    })
  }
  handleAddUser() {
    let user=this.userFormGroup.value;
    user.roles="";
    user.userId=null;
    this.userService.addUser(user);
  }
}

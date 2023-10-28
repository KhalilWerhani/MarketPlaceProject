import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/UserService";
import {AppUser} from "../../model/user.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  user!:Array<AppUser>;
  users! : Array<AppUser>;
  errorMessage! : string ;
  searchFormGroup! : FormGroup;
  constructor(private userService : UserService ,private fb : FormBuilder ,
              public authService : AuthentificationService , private router : Router ,) {
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(data) =>{
        this.user=data;
        console.log(data)
      },
      error : (err)=> {
        this.errorMessage=err;
      }
    })
    this.searchFormGroup=this.fb.group( {keyword : this.fb.control(null)});

  }
  handleSearchProduct() {
    let keyword=this.searchFormGroup.value.keyword;
    this.userService.seachUser(keyword).subscribe( {
      next :(data)=> {
        this.user=data;
      }
    })
  }

  handleDeleteUser(u: AppUser) {
     {

      let conf=   Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteUser(u);
          this.user=this.user.filter(stay=>stay.userId!=u.userId);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }

  }

  handleEditUser(u: AppUser) {
    this.router.navigateByUrl('/admin/edituser/'+u.userId);

  }
}



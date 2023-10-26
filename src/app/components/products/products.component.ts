import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/product.model";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2';
import {AuthentificationService} from "../../services/authentification.service";
import {ProductServiceNew} from "../../services/ProductServiceNew";
import {Router} from "@angular/router";

// CommonJS

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  product!:Array<Product>;
  products! : Array<Product>;
  errorMessage! : string ;
  searchFormGroup! : FormGroup;
constructor(private productService : ProductService ,private productServiceNew : ProductServiceNew ,private fb : FormBuilder ,
            public authService : AuthentificationService , private router : Router ,
            ) { }

  ngOnInit(): void {
    this.productServiceNew.getProducts().subscribe({
      next:(data) =>{
        this.product=data;
        console.log(data)
      },
      error : (err)=> {
        this.errorMessage=err;
      }
    })
  this.searchFormGroup=this.fb.group( {keyword : this.fb.control(null)});

}

  handleDeleteProduct(p: Product) {

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
    this.productServiceNew.deleteProduct(p);
    this.product=this.product.filter(stay=>stay.id!=p.id);
     Swal.fire(
       'Deleted!',
       'Your file has been deleted.',
       'success'
     )
   }
 })                                                                 //confirm("Are you sure?");
   // if (!conf) return ;

  }

  handleEditProduct(p:Product) {

    this.router.navigateByUrl('/admin/editproduct/'+p.id);

  }

    handleSetPromotion(p: Product) {
      p.promotion=!p.promotion;
      this.productServiceNew.updatePromotion(p.id);
    }
  handleSearchProducts() {
    let keyword=this.searchFormGroup.value.keyword;
    this.productService.seachProducts(keyword).subscribe( {
      next :(data)=> {
        this.products=data;
      }
    })
  }
}

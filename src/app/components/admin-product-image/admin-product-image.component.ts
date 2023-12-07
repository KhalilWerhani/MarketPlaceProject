import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {FormBuilder} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Product} from "../../model/product.model";
import {ProductServiceNew} from "../../services/ProductServiceNew";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-product-image',
  templateUrl: './admin-product-image.component.html',
  styleUrls: ['./admin-product-image.component.css']
})
export class AdminProductImageComponent implements OnInit{

  product!:Array<Product>;
  errorMessage!: string;

  public index!:Product;
  constructor(private productService : ProductService , private fb : FormBuilder , private productServiceNew : ProductServiceNew ,
              public authService : AuthentificationService , private router:Router
  ) {

  }

  ngOnInit(): void {
    this.productServiceNew.getProducts().subscribe(
      {
      next: (data) => {
        this.product = data;
        console.log(data)
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }


  public products : Array<Product>=this.productService.products;



 // sendToEdit(i: Product) {
   // let index = i;
  //}
    sendToEdit(i:Product) {

    }

  handleNewProduct() {
    this.router.navigateByUrl('/admin/newproduct')
  }
}

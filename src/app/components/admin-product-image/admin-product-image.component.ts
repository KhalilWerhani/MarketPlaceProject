import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {FormBuilder} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-admin-product-image',
  templateUrl: './admin-product-image.component.html',
  styleUrls: ['./admin-product-image.component.css']
})
export class AdminProductImageComponent  {



public index!:Product;
  constructor(private productService : ProductService , private fb : FormBuilder ,
              public authService : AuthentificationService
  ) {
  }


  public products : Array<Product>=this.productService.products;


 // sendToEdit(i: Product) {
   // let index = i;
  //}
    sendToEdit(i:Product) {

    }
}

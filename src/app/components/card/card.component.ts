import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AdminProductImageComponent} from "../admin-product-image/admin-product-image.component";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produit!:Product;
 // constructor(private Admin : AdminProductImageComponent){
   //   this.produit=this.Admin.index;
 // }

}

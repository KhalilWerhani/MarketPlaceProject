import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AdminProductImageComponent} from "../admin-product-image/admin-product-image.component";
import {Product} from "../../model/product.model";
import {ProductServiceNew} from "../../services/ProductServiceNew";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produit!: Product;



  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

  }
}






import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {ProductServiceNew} from "../services/ProductServiceNew";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup!:FormGroup;

  constructor(private fb :FormBuilder , private productServiceNew:ProductServiceNew) {

  }
  ngOnInit():void {
    this.productFormGroup=this.fb.group({
      image:this.fb.control(null,[Validators.required ]),
      name:this.fb.control(null,[Validators.required , Validators.minLength(4)]),
      price:this.fb.control(null,[Validators.required ]),
      promotion:this.fb.control(null,),
      available:this.fb.control(null,[Validators.required ,Validators.minLength(1)]),
      description:this.fb.control(null,[Validators.required , Validators.minLength(4)]),
    })
  }

  handleAddProduct() {
    let product=this.productFormGroup.value;
    product.promotion=false;
    product.id=null;
    this.productServiceNew.addProduct(product);
  }
}

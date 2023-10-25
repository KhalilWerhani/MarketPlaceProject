import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup!:FormGroup;

  constructor(private fb :FormBuilder , private prodService:ProductService) {

  }
  ngOnInit():void {
    this.productFormGroup=this.fb.group({
      image:this.fb.control(null,[Validators.required ]),
      name:this.fb.control(null,[Validators.required , Validators.minLength(4)]),
      price:this.fb.control(null,[Validators.required ]),
      promotion:this.fb.control(null,),
      Available:this.fb.control(null,[Validators.required ,Validators.minLength(1)]),
      description:this.fb.control(null,[Validators.required , Validators.minLength(4)]),
    })
  }

  handleAddProduct() {


    let product=this.productFormGroup.value;
    this.prodService.addNewProdct(product).subscribe({
      next:(data:Product)=>{
        alert("Products added successfully")
        this.productFormGroup.reset();
      }, error : err => {
        console.log(err);
      }
    })

    // console.log(this.productFormGroup.value);
  }
}

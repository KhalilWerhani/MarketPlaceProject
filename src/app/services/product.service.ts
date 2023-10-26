import {Injectable, OnInit} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../model/product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  public products! : Array<Product>;
  constructor() {

  }
  public deleteProduct(id : number) : Observable<boolean> {
   this.products=this.products.filter(p=>p.id!=id);
   return of(true);
  }

  public setPromotion(id :number) :Observable<boolean> {
    let product = this.products.find(p=>p.id==id);
    if(product !=undefined) {
      product.promotion=!product.promotion;
      return of(true);
    } else return throwError(()=>new Error("product not found"));
  }
  public seachProducts(keyword :string) :Observable<Product[]> {
    let products =this.products.filter(p=>p.name.includes(keyword));
    return of(products);
}
public addNewProdct(product : Product):Observable<Product>{
    this.products.push(product);
    return of(product);
}

  ngOnInit(): void {
  }
}

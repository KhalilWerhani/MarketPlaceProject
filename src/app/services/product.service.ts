import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products! : Array<Product>;
  constructor() {
    this.products=[
      {id:1 , name : "Computer" , price : 6500, promotion:true,image:"assets/img/tanji.jpg",description:"Anime Picture",Available:10},
      {id:1 , name : "Computer" , price : 6500, promotion:true,image:"assets/img/tanji.jpg",description:"Anime Picture",Available:10},
      {id:1 , name : "Computer" , price : 6500, promotion:true,image:"assets/img/tanji.jpg",description:"Anime Picture",Available:10},

    ];
    for(let i=0; i<10 ; i++) {
      this.products.push({id: 1, name: "Computer", price: 6500, promotion: true, image: "assets/img/tanji.jpg",description:"Anime Picture",Available:10},
      );
      this.products.push({id: 1, name: "Computer", price: 6500, promotion: true, image: "assets/img/tanji.jpg",description:"Anime Picture",Available:10},
      );
      this.products.push({id: 1, name: "Computer", price: 6500, promotion: true, image: "assets/img/tanji.jpg",description:"Anime Picture",Available:10},
      );
    } }
  public getAllProducts() : Observable <Product[]>{
    let rnd=Math.random();
    if(rnd<0.1) return throwError(()=>new Error("Internet connexion error"));
    else return of([...this.products]);
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
}

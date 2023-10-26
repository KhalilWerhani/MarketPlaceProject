import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
@Injectable({
  providedIn: 'root'
})


export class ProductServiceNew {
  private baseUrl = "http://localhost:8888";


  constructor(private http:HttpClient) {
  }
  getProducts():Observable<Product[]>{
   return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }

  updatePromotion(id: number): void {
    const url = `${this.baseUrl}/updatePromo/${id}`;

    this.http.get<void>(url)
      .subscribe(
        () => {
          console.log('Promotion updated successfully');
        },
        (error) => {
          console.error('Error updating promotion:', error);
        }
      );
  }
  deleteProduct(p:Product){
    return this.http.delete(`${this.baseUrl}/delete/${p.id}`).subscribe(
      () => {
        console.log('Promotion updated successfully');
      },
      (error) => {
        console.error('Error updating promotion:', error);
      }
    );
  }
  addProduct(product: Product): void{
     this.http.post<void>(`${this.baseUrl}/add`, product)
      .subscribe(
      () => {
        console.log('Promotion updated successfully');
      },
      (error) => {
        console.error('Error updating promotion:', error);
      }
    );

  }

}

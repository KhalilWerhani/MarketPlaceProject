import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
import {AppUser} from "../model/user.model";
@Injectable({
  providedIn: 'root'
})

// product! : Array<Product>;


export class UserService {
  private baseUrl = "http://localhost:8888";

  private user!: Array<AppUser>;


  constructor(private http: HttpClient) {
  }

  getUser(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.baseUrl}/allusers`);
  }


  deleteUser(a: AppUser) {
    return this.http.delete(`${this.baseUrl}/deleteuser/${a.userId}`).subscribe(
      () => {
        console.log('user deleted successfully');
      },
      (error) => {
        console.error('Error deleting :', error);
      }
    );
  }

  addUser(appuser: AppUser): void {
    this.http.post<void>(`${this.baseUrl}/adduser`, appuser)
      .subscribe(
        () => {
          console.log('User added successfully');
        },
        (error) => {
          console.error('Error adding :', error);
        }
      );
  }

  seachUser(keyword: string): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.baseUrl}/allusers`);
  }
}

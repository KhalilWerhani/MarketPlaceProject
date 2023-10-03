import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ImageProductsComponent} from "./image-products/image-products.component";

const routes: Routes = [

  {path : "login" , component : LoginComponent} ,
  {path : "" , component : LoginComponent},
  {path : "admin" , component : AdminTemplateComponent ,canActivate:[AuthenticationGuard], children : [
      {path : "products" ,  component : ProductsComponent},
      {path : "customers" , component : CustomersComponent},
      {path : "image-products " , component:ImageProductsComponent},

    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

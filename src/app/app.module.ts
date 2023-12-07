import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { AdminProductImageComponent } from './components/admin-product-image/admin-product-image.component';
import {NgOptimizedImage} from "@angular/common";
import { CardComponent } from './components/card/card.component';
import {EditproductComponent} from "./editproduct/editproduct.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import {CloudinaryModule, CloudinaryConfiguration} from "@cloudinary/angular-5.x";

import { Cloudinary } from 'cloudinary-core';
import {ImageComponent} from "./components/image/image.component";
import {MatInputModule} from "@angular/material/input";
import {MaterialFileInputModule} from "ngx-mat-file-input";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    LoginComponent,
    AdminTemplateComponent,
    AdminProductImageComponent,
    CardComponent,
    EditproductComponent,
    NewProductComponent,
    ProfileComponent,
    SignupComponent,
    EdituserComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,



    //CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dtrngrnbh' } as CloudinaryConfiguration),


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private cloudinary: Cloudinary) {
  //   const clConfig: CloudinaryConfiguration = {
  //     cloud_name: 'dtrngrnbh',
  //     api_key: '423337956949437',
  //     api_secret: 'ZNUVucBGGvdivmRfz8ZzXFIEFh8',
  //   };
  //   // @ts-ignore
  //   cloudinary.config(clConfig);
  // }

}

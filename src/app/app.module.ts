import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';

import { LoginComponent } from './login/login.component'
import { AccountService } from 'src/services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForm1Component,

    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

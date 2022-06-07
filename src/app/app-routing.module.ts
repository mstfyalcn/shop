import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product-add-1', component: ProductAddForm1Component, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product/category/:categoryId', component: ProductComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

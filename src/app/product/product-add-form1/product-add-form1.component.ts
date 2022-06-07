import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category/category';
import { product } from '../product';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.css'],
  providers: [ProductService]
})
export class ProductAddForm1Component implements OnInit {

  categories: Category[] = [];
  model: product = new product();

  constructor(private http: HttpClient,
    private productService: ProductService,
    private alertifyService: AlertifyService) { }
  path = "http://localhost:3000/categories"

  ngOnInit(): void {
    this.http.get<Category[]>(this.path).subscribe(data => {
      this.categories = data
    })


  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe()
    this.alertifyService.success("Ürün başarıyla eklendi")
  }



}

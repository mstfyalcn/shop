import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from 'src/services/alertify.service';
import { ProductService } from 'src/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category/category';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {



  }
  title = "Ürün Listesi";
  filterText:string = "";
  products: product[];
  path = "http://localhost:3000/products/"


  providers: [ProductService]


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params["categoryId"]);
    }

    )


  }


  addToChart(product: product) {
    this.alertifyService.success(product.name + " Sepete eklendi")
  }


  getProducts(categoryId: number) {

    let newPath = this.path
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }

    this.http.get<product[]>(newPath).subscribe(data => {
      this.products = data
    })
  }


}

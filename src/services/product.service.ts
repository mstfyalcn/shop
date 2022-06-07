import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/product/product';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient,) { }
  path = "http://localhost:3000/products/"

  addProduct(product: product): Observable<product> {
    return this.http.post<product>(this.path,product)

  }



}

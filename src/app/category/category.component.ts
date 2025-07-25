import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories"
  categories: Category[] = [];


  ngOnInit(): void {
    this.http.get<Category[]>(this.path).subscribe(data => {
      this.categories = data
    })


  }





}

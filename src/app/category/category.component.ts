import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  category:Category[]=[
    {id:1, name:"Elektronik" },
    {id:2, name:"Giyim"}
  ]

  ngOnInit(): void {
    
    
  }
  


  

}

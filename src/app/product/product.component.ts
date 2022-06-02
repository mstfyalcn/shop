import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
 


  }
  title = "Ürün Listesi";
  filterText="";
  product: product[] = [
    { id: 1, name: "Laptop", categoryId: 1, unitPrice: 1500, description: "Asus Laptop", imageUrl:"https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    { id: 2, name: "Mouse", categoryId: 2, unitPrice: 1300, description: "A4 tech",imageUrl:"https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    { id: 2, name: "abc", categoryId: 2, unitPrice: 1300, description: "A4 tech",imageUrl:"https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    { id: 2, name: "bvc", categoryId: 2, unitPrice: 1300, description: "A4 tech",imageUrl:"https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    
  ];

  ngOnInit(): void {
  }

}

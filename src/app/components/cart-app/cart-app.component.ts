import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];

  constructor ( private _service:ProductService ){}

  ngOnInit(): void {

    this.products = this._service.findAll();
    console.log( this.products )

  }



}

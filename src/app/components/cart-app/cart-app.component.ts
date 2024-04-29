import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [ProductCardComponent,CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];
  items: CartItem[] =[];
  total:number = 0;

  constructor ( private _service:ProductService ){}

  ngOnInit(): void {

    this.products = this._service.findAll();
    this.getTotal();

  }

  onAddCart( product:Product ){
    const hasItem = this.items.find( item =>{
      return item.product.id === product.id
    } )

    if (hasItem) {
      this.items = this.items.map( item => {
        if( item.product.id === product.id ){
          return {
            ...item,
            quantity: item.quantity +1
          }
        }
        return item;
      })
    }else{
      this.items = [...this.items, { product:{...product}, quantity: 1 } ];
    }
    this.getTotal();
  }

  onDeleteCart( id:number ){
    this.items = this.items.filter( item => item.product.id != id );
    this.getTotal();  
  }

  getTotal(  ):void{
    this.total = this.items.reduce( (accumulator, item) => (accumulator + (item.quantity * item.product.price)) , 0 )
  }

}

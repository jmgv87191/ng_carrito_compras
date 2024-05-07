import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() items: CartItem[] = [];
  @Output() openEventEmitter = new EventEmitter();
  showCart:boolean = false;


  openCart(): void {
    this.showCart = !this.showCart
    this.openEventEmitter.emit();
  }


}

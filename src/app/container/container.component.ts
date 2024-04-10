import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  addToCart: number = 0;
  product = {
    image:'assets/images/iphone.png',
    name: "iPhone X",
    price: 789,
    color: "Black",
    discount: 8.5,
    inStock: 5
  }


  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){
    //this.name = event.target.value; 
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
   searchText: string = '';
  listOfString: string[] = ['Jesse', 'Anjorin', 'Steve', 'Joel'];
  
  setSearchText(value: string){
    this.searchText = value;
  }
 name: string = 'mark';
// addToCart = 0;

//  product = {
//   name: 'iphone',
//   color: 'green',
//  price: 999,
//  discount: 5,
//  inStock: 10,
//  pImage:'../../assets/images/images.jpg'
//  }

// getDiscountPrice(){
//   return this.product.price - ( this.product.price * this.product.discount / 100)
// }

  onNameChange(event:any)
{
   this.name = event.target.value;
 }

// onChange(event:any)
// {
//   this.name =event.target.value
 
// }
// decreament()
// {
//    if(this.addToCart > 0){
//       this.addToCart --;
//    }
//  }
 updateSearchText(event: any){
  this.searchText = event.target.value
 }
  constructor() { }

  ngOnInit(): void {
  }

}

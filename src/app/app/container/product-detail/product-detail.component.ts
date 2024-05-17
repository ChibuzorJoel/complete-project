import { Component, OnInit, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../modules/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  getDiscountPrice(){
    return this.product.price - ( this.product.price * this.product.discount / 100)
  }
@Input() productListComp: ProductListComponent = undefined;
product :Product;
constructor() { }

  ngOnInit(): void {
    this.product =this.productListComp.selectedProduct;
  }

}

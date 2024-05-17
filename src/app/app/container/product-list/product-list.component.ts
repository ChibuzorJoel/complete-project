import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../modules/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
selectedProduct : Product;
  // Dummy products array
  Product = [
  
    {
      id: 1,
      name: 'Nike',
      description: 'Description for Product 3',
      brand: 'iphone',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: true,
      items_left: 0,
      imageURL: '../../../../assets/images/download.jpeg',
      slug: 'product-1',
      },
    {
      id: 2,
      name: 'Nike',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: false,
      items_left: 0,
      imageURL: '../../../../assets/images/download (2).jpeg',
      slug: 'product-2',
      },
    {
      id: 3,
      name: 'iphone',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: true,
      items_left: 0,
      discount:10.5,
      imageURL: '../../../../assets/images/images.jpeg',
      slug: 'product-3',
      },
    {
      id: 4,
      name: 'iphone',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: false,
      items_left: 0,
      imageURL: '../../../../assets/images/download.jpeg',
      slug: 'product-4',
      },
    {
      id: 5,
      name: 'iphone',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: true,
      discount:5,
      items_left: 0,
      imageURL: '../../../../assets/images/download (2).jpeg',
      slug: 'product-5',
      },
    {
      id: 6,
      name: 'Nike',
      description: 'Description for Product 3',
      brand: 'samsung',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: false,
      items_left: 0,
      imageURL: '../../../../assets/images/download.jpeg',
      slug: 'product-6',
      },
    {
      id: 7,
      name: 'Nike',
      description: 'Description for Product 3',
      brand: 'samsung',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: true,
      discount:20,
      items_left: 0,
      imageURL: '../../../../assets/images/images.jpeg',
      slug: 'product-7',
      },
    {
      id: 8,
      name: 'Nike',
      description: 'Description for Product 3',
      brand: 'samsung',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: false,
      items_left: 0,
      imageURL: '../../../../assets/images/download.jpeg',
      slug: 'product-8',
      },
    {
      id: 9,
      name: 'samsung',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      is_in_inventory: true,
      items_left: 0,
      imageURL: '../../../../assets/images/images.jpeg',
      slug: 'product-9',
      },
    {
      id: 10,
      name: 'samsung',
      description: 'Description for Product 3',
      brand: 'Brand C',
      gender: 'Unisex',
      category: 'Accessories',
      size: 'One Size',
      color: ['Black', 'Red', 'Yellow', 'Green'],
      price: 19.99,
      discount:10,
      is_in_inventory: false,
      items_left: 0,
      imageURL: '../../../../assets/images/download.jpeg',
      slug: 'product-10',
      },
    ];


  totalProductCount = this.Product.length;
totalProductInStock = this.Product.filter(p => p.is_in_inventory === true).length;
totalProductOutOfStock = this.Product.filter(p => p.is_in_inventory === false).length;

@Input()
searchText: string = 'all'
selectedFilterRadioButton: string = 'all';

onFilterChanged(value: string){
  
  this.selectedFilterRadioButton = value;
 
}

  constructor() { }

  ngOnInit(): void {
  }

}

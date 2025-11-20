import { Component, OnInit } from '@angular/core';
import { TheVanityVaultData } from '../the-vanity-vault-data';

export class Product {
  _id!: string;
  productName!: string;
  brand!: string;
  category!: string;
  shadeColour!: string;
  rating!: number;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.html',
  styleUrls: ['./home-list.css']
})
export class HomeList implements OnInit {
  constructor(private theVanityVaultData: TheVanityVaultData) { }

  products: Product[] = [];

  private getProducts(): void {
    this.theVanityVaultData
      .getProducts()
      .then(foundProducts => {
        this.products = foundProducts;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        this.products = []; // Fallback to empty array
      });
  }

  ngOnInit() { 
    this.getProducts();
  }

  getStars(rating: number): { filled: boolean }[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push({ filled: i <= rating });
    }
    return stars;
  }
}
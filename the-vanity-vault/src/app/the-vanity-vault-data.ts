import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './home-list/home-list';

@Injectable({
  providedIn: 'root'
})
export class TheVanityVaultData {
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getProducts(): Promise<Product[]> {
    const url: string = `${this.apiBaseUrl}products`;
    return this.http
      .get<Product[]>(url)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
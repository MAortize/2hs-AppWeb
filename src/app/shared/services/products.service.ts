import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts( filename : string ) {
    return this.http.get(`assets/mock/${filename}.json`);
  }
}

import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  @Output() productsInCarrito: EventEmitter<any> = new EventEmitter();

  constructor() { }
}

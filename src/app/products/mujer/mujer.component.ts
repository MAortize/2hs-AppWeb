import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/shared/services/data-transfer.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {

  infoCards: any[] = [
    {
      id: '1',
      img: '../../../assets/products-images/mujer/IMG_7292.jpg',
      title: 'Be different - $69.000',
      price : 79.000
    },
    {
      id: '1',
      img: '../../../assets/products-images/mujer/IMG_7486.jpg',
      title: 'Long Beach Women - $79.000',
      price : 79.000
    },
    {
      id: '1',
      img: '../../../assets/products-images/mujer/IMG_7505.jpg',
      title: 'Hova Women - $79.000',
      price : 79.000
    },
    {
      id: '1',
      img: '../../../assets/products-images/mujer/IMG_7582.jpg',
      title: 'Tupac Women - $79.000',
      price : 79.000
    },
  ]

  
  constructor(private transfer: DataTransferService) { }

  

  ngOnInit(): void {
    
  }

  sendToCarrito(object: any) {
    this.transfer.productsInCarrito.emit({
      data: object
    })
  }

}

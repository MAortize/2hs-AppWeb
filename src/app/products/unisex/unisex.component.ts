import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/shared/services/data-transfer.service';

@Component({
  selector: 'app-unisex',
  templateUrl: './unisex.component.html',
  styleUrls: ['./unisex.component.css']
})
export class UnisexComponent implements OnInit {


  infoCards: any[] = [
    {
      id: '1',
      img: '../../../assets/products-images/IMG_7288.jpg',
      title: 'Long Beach & Hova',
    },
    {
      id: '1',
      img: '../../../assets/products-images/IMG_7334.jpg',
      title: 'Juicy & Be different',
    }
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

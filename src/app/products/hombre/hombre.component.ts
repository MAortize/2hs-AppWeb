import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {

  
  infoCards:any[] = [
    {
      img: '../../../assets/products-images/hombre/IMG_7364.jpg',
      title:'Long Beach - $79.000'
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7406.jpg',
      title:'Juicy - $79.000'
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7529.jpg',
      title:'Tupac - $79.000'
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7556.jpg',
      title:'Hova - $79.000'
    },
    
  ] 

  constructor(private transfer: DataTransferService) { }

  ngOnInit(): void {
  }


  sendToCarrito(object:any){
    // console.log(this.infoCards);
    this.transfer.productsInCarrito.emit({
      data:object
    })

    // this.transfer.productsInCarrito.emit(this.infoCards)
    
  }

}

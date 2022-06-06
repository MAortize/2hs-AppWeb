import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { DataTransferService } from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {

  
  
  
  @Input() product : any;
  constructor(private transfer: DataTransferService, private productService: ProductsService) { }

  products : any = [];

  ngOnInit(): void {
    this.productService.getProducts('products').subscribe((data: any)=> {
      console.log(data)
      this.products = data;
    }, (err: any) => {
      console.log(err)
    })
  }


  sendToCarrito(object:any){
    // console.log(this.infoCards);
    this.transfer.productsInCarrito.emit({
      data:object
    })

    // this.transfer.productsInCarrito.emit(this.infoCards)
    
  }

}

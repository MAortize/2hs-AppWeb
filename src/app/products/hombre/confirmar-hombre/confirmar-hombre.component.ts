import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTransferService } from 'src/app/shared/services/data-transfer.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ModalPersonalizarComponent } from './modal-personalizar/modal-personalizar/modal-personalizar.component';

@Component({
  selector: 'app-confirmar-hombre',
  templateUrl: './confirmar-hombre.component.html',
  styleUrls: ['./confirmar-hombre.component.css'],
})
export class ConfirmarHombreComponent implements OnInit {
  
  
  
  infoCards: any[] = [
    {
      img: '../../../assets/products-images/hombre/IMG_7364.jpg',
      title: 'Long Beach - $79.000',
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7406.jpg',
      title: 'Juicy - $79.000',
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7529.jpg',
      title: 'Tupac - $79.000',
    },
    {
      img: '../../../assets/products-images/hombre/IMG_7556.jpg',
      title: 'Hova - $79.000',
    },
  ];
  
  
  constructor(private transfer: DataTransferService, private productService: ProductsService, private activatedRoute: ActivatedRoute, private modal: NgbModal) {}

  products : Array<any> = [];
  singleProduct : any;

  ngOnInit(): void {


    let id = 0;

    this.activatedRoute.paramMap.subscribe(( data : any) => {
      console.log("Data is: ", data)
      id = data.params.id
  
    this.productService.getProducts('products').subscribe((res: any) => {
      this.products = res
      this.products = this.products.filter((data: any) => data.id == id);
      this.singleProduct = this.products[0];
      console.log(this.singleProduct);
    }, (error: any) => {
      console.log(error)
    })
  })
}

  sendToCarrito(object: any) {
    // console.log(this.infoCards);
    this.transfer.productsInCarrito.emit({
      data: object,
    });
  }

  openModal() {
    this.modal.open(ModalPersonalizarComponent, {size: 'm' , scrollable: false });

  }

  void() {
    
  }
}

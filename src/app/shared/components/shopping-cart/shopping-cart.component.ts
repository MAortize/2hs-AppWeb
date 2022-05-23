import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {



  @Input() listaCompra: Array<any> = []
  listaUnica: Array<any> = []
  count: number = 0

  constructor(private transfer: DataTransferService) { }

  ngOnInit(): void {
    this.addToCarrito()
  }

  addToCarrito() {
    this.transfer.productsInCarrito.subscribe(data => {
      this.insertOrUpdate(data.data)

    })
  }

  insertOrUpdate(elemento: any) {
    const i = this.listaCompra.findIndex(e => e.title === elemento.title);
    if (i > -1) {
      this.listaCompra[i] = elemento;
      elemento.id++
    }
    else this.listaCompra.push(elemento);

  }

  deleteElement(elemento: any) {
    const i = this.listaCompra.findIndex(e => e.title === elemento.title);
    if (i > -1) {
      elemento.id--
    }
  }


  cleanAll() {
    this.listaCompra.splice(0, this.listaCompra.length)
  }
}


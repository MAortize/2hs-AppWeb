import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../../services/data-transfer.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {



  @Input() listaCompra: Array<any> = []
  listaUnica: Array<any> = []
  count!: number;
  flag!: boolean;

  constructor(private transfer: DataTransferService, private router: Router) { }

  ngOnInit(): void {
    this.addToCarrito()
    console.log("xd",this.listaCompra.length);
    
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
      localStorage.setItem('products', JSON.stringify(this.listaCompra))
    }
    else {
      this.listaCompra.push(elemento);
      console.log(this.listaCompra.length);
      localStorage.setItem('products', JSON.stringify(this.listaCompra))
    }
  }

  deleteElement(elemento: any) {
    const i = this.listaCompra.findIndex(e => e.title === elemento.title);
    if (i > -1) {
      elemento.id--
      localStorage.setItem('products', JSON.stringify(this.listaCompra))
      if (elemento.id === 0) {
        let xd = this.listaCompra.findIndex(e => e.title === elemento.title)
        this.listaCompra.splice(xd, 1)
        localStorage.setItem('products', JSON.stringify(this.listaCompra))
      }
    }
  }


  cleanAll() {
    this.listaCompra.splice(0, this.listaCompra.length)
    localStorage.clear()
  }

  goToPay() {
    this.router.navigateByUrl('checkout')
  }



}


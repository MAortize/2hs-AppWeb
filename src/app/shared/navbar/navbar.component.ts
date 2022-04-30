import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() photo!: string;
  @Input() loggedIn: boolean = false;
  listaCompra:Array<any>=[]

  constructor(public auth: AuthService, private modal: NgbModal, private transfer: DataTransferService) {
    // this.photo = this.auth.photo
    // this.loggedIn = this.auth.loggedIn
  }

  ngOnInit(): void {
    this.transfer.productsInCarrito.subscribe(data =>{
      console.log('Recibiendo data....', data);
      this.listaCompra.push(data)
      console.log(this.listaCompra);
    })
  }

  openModal() {
    const modalRef = this.modal.open(ShoppingCartComponent, {size: 'xl' , scrollable: true });
    modalRef.componentInstance.listaCompra = this.listaCompra;
  }


  toggle() {
    var sidebar = document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

}

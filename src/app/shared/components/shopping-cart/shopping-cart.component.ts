import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  
  
  @Input() listaCompra:Array<any>=[]

  constructor(private transfer: DataTransferService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

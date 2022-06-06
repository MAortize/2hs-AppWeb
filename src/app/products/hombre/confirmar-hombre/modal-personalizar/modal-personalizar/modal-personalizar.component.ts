import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-modal-personalizar',
  templateUrl: './modal-personalizar.component.html',
  styleUrls: ['./modal-personalizar.component.css']
})
export class ModalPersonalizarComponent implements OnInit {

  @Input() product : any;
  constructor(private modal: NgbModal, private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  products : Array<any> = [];
  singleProduct : any;

  ngOnInit(): void {
    
  }

  close() {
    this.modal.dismissAll()
  }

}

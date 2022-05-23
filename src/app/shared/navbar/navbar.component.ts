import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() photo: string;
  loggedIn: boolean = false;
  listaCompra:Array<any>=[]

  constructor(public auth: AuthService, private transfer: DataTransferService) {

    this.photo = localStorage.getItem('urlPhoto')!
    console.log(this.auth.photo);    
    this.loggedIn = this.auth.estaAutenticado()
    console.log(this.loggedIn);
    
  }
  
  ngOnInit(): void {
    
    
  }


  toggle() {
    var sidebar = document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

}

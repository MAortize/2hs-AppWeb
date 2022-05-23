import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AnimationState, fade } from '../animations/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  @Input() loggedIn!: boolean;

  constructor(public auth: AuthService) { }



  ngOnInit(): void {
    this.loggedIn=this.auth.estaAutenticado()
  }

  logOut(){
    this.auth.logout()
  }
  
  toggle() {
    var sidebar =  document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

  

}

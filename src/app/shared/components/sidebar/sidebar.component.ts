import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AnimationState, fade } from '../animations/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedIn: boolean = false

  constructor(private auth: AuthService) { }



  ngOnInit(): void {
    this.loggedIn=this.auth.loggedIn
    
  }

  logOut(){
    this.auth.logOut()
  }
  
  toggle() {
    var sidebar =  document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

  

}

import { Component, OnInit } from '@angular/core';
import { AnimationState, fade } from '../animations/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() { }

  toggle() {
    var sidebar =  document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

  

}

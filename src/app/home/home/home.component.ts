import { Component, Input, OnInit } from '@angular/core';
import { AnimationState, fade } from '../../shared/components/animations/animations';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: fade
})
export class HomeComponent implements OnInit{

  path : string = '../../../assets/icons/';
  photo!: string;
  loggedIn: boolean = false;
  

  arrayImages = [
    `${this.path}image1.jpeg`,
    `${this.path}image2.jpeg`,
    `${this.path}image3.jpeg`,
    `${this.path}image4.jpeg`,
    `${this.path}image5.jpeg`
  ]

  image : string = `${this.path}image1.jpeg`;

  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.photo=this.auth.photo
    
    this.loggedIn=this.auth.loggedIn
  }
  
  state = AnimationState.IN;
  private count: number = 0;

  onDone(){
    this.toggleState();
  }

  toggleState(){
    this.state = 
    this.state === AnimationState.IN ? AnimationState.OUT : AnimationState.IN;
    if (this.state === AnimationState.IN) {
      this.changeToNextImage
    }
  }

  changeToNextImage() {
    if (this.count != this.arrayImages.length) 
    this.image = this.arrayImages[this.count];
    this.count++;
  }

  toggle() {
    var sidebar =  document.querySelector("#sidebar")
    var container = document.querySelector(".my-container")
    sidebar?.classList.toggle("active-nav")
    container?.classList.toggle("active-cont")
  }

  


  

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label!: string;
  @Input() type = 'text'; //set default type be text
  @Input() idName!: string;
  @Input() placeholder!: string;


  focused!: boolean;


  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  

}

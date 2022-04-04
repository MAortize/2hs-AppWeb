import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})



export class InputDateComponent  {

  @Input() label!: string;
  @Input() type = 'Date'; //set default type be text
  @Input() value: any;

  focused = true;
  
  

  
  // maxDate = { day: this.date.getUTCDay(), month: this.date.getUTCMonth()+1, year: this.date.getUTCFullYear()};

  maxDate: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  datePickerId = new Date()

  
  constructor() {
    
  }


  onBlur(event: any) {
    const value = event.target.value;

    if (value) {
      this.focused = false;
    }
  }

}

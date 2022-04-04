import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { Usuario } from '../../shared/models/Usuario';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario
  
  

  constructor( private auth: AuthService,
              private router: Router ) { 
    this.usuario = new Usuario()
   }

  ngOnInit(): void {
    
  }

  

  

  lookForm(form: NgForm){
    console.log(form);
    
  }


  
}

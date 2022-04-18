import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { Usuario } from '../../shared/models/Usuario';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})  
export class RegistroComponent implements OnInit {

  usuario!: Usuario
  
  

  constructor( private auth: AuthService,
              private router: Router ) { 
    
   }

  ngOnInit(): void {
    this.usuario = new Usuario()
  }

  onSubmit(form: NgForm){

    


    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });

    Swal.showLoading();

    this.auth.registrarNuevoUsuario(this.usuario).subscribe(resp=>{

      console.log(resp);
      Swal.close();
      // if (this.recordar) {
      //   localStorage.setItem('email',this.usuario.email);
      // }
      this.router.navigateByUrl('home')
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Usuario Creado'
      });

    }, (err)=>{
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'error al autenticar',
        text: err.error.error.message
      });
      
    })
    
    
    
  }

  



  
}

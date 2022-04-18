import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../shared/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new Usuario();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email')!;
    }
  }

  login(form: NgForm) {
    

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor',
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('home');
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'error al autenticar',
          text: err.error.error.message,
        });
      }
    );
  }
}

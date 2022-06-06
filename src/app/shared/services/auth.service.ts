import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, GoogleAuthProvider, OAuthCredential } from 'firebase/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/'
  private apikey = 'AIzaSyBOg4fCgVOYr5rVSoWyd3qc-cPBgijX3Ag'

  @Output() photo!: string;
  @Output() loggedIn!: boolean;

  private userToken!: string;

  //Crear un nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Entrar con usuario
  ///https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private router: Router) {
    this.leerToken();

  }

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  logOut() {
    this.afAuth.signOut()
  }

  facebookAuth() {
    return this.authLogin(new FacebookAuthProvider());
  }

  //Auth logic to run auth providers
  async authLogin(provider: any) {
    try {
      const result = await this.afAuth
        .signInWithPopup(provider);
      const credential = result.credential as OAuthCredential;
      if (credential.providerId == 'google.com') {
        this.photo = result.user?.photoURL!;
      } else if (credential.providerId == 'facebook.com') {
        this.photo = result.user?.photoURL + "?height=500&access_token=" + credential.accessToken;
      }    
      console.log('You have been successfully logged in!');
      this.guardarTokenSocials(credential.accessToken!, this.photo)      
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  login(usuario: Usuario) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map((resp: any) => {
        console.log("entro en el map del rxjs");

        this.guardarToken(resp['idToken']);
        return resp;
      })
    );


  }

  registrarNuevoUsuario(usuario: Usuario) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map((resp: any) => {
        console.log("entro en el map del rxjs");

        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  private guardarTokenSocials(idToken: string, photo: string) {
    this.userToken = idToken;
    sessionStorage.setItem('token', idToken)
    sessionStorage.setItem('urlPhoto', photo)
    this.router.navigateByUrl('home').then(()=>{
      window.location.reload()
    })
    let hoy = new Date();
    hoy.setSeconds(3600);
    sessionStorage.setItem('expira', hoy.getTime().toString());
  }

  private guardarToken(idToken: string) {

    this.userToken = idToken;
    sessionStorage.setItem('token', idToken)
    console.log(this.userToken);
    console.log('Este es el token entrante', idToken);



    let hoy = new Date();
    hoy.setSeconds(3600);

    sessionStorage.setItem('expira', hoy.getTime().toString());


  }

  leerToken() {
    if (sessionStorage.getItem('token')) {
      this.userToken = sessionStorage.getItem('token')!;
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      this.loggedIn = false;
      return false
    }

    const expira = Number(sessionStorage.getItem('expira'));
    const hoy = new Date();

    hoy.setTime(expira);

    if (hoy > new Date()) {
      this.loggedIn = true;
      return true;
    } else {
      this.loggedIn = false;
      return false
    }

  }
}
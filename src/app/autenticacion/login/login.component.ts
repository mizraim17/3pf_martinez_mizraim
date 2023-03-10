import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    let controles: any = {
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      esAdmin: new FormControl('true', [Validators.required]),
    };

    this.formulario = new FormGroup(controles);
  }

  emailFormControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   usuario: new FormControl(),
    //   contrasena: new FormControl(),
    //   esAdmin: new FormControl(true),
    // });
  }

  login() {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };
    this.loginService.login(usuario);
    this.router.navigate(['/cursos/list']);
    console.log('usuario', usuario);
  }
}

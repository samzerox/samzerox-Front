import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  correo: string;

  constructor(   private router: Router,
                private _us: UsuarioService ) { }

  ngOnInit() {
  }

  ingresar( forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.correo, forma.value.password);

    this._us.login( usuario )
                  .subscribe(correcto => this.router.navigate( [ '/home' ] ) );

  }

}

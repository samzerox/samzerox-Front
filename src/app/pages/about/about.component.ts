import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  usuario: any[] = [];

  constructor(  public _us: UsuarioService ) {
  }

  ngOnInit() {
    this.cargarUsuarios();

  }

  cargarUsuarios() {


    this._us.cargarUsuario( )
          .subscribe( (resp: any) => {
            this.usuario = resp;
            console.log( this.usuario);
          });
  }

}

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
  cargando: Boolean = true;

  constructor(  public _us: UsuarioService ) {
    this.cargarUsuarios();
    this.cargando = false;

    // setTimeout(() => {
    //   this.cargando = false;
    // }, 1000);
  }

  ngOnInit() {


  }

  cargarUsuarios() {


    this._us.cargarUsuario( )
          .subscribe( (resp: any) => {
            this.usuario = resp;
          });
  }

}

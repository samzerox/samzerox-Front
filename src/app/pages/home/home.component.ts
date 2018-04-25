import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  usuarios: any[] = [];
  cargando: Boolean = true;

  constructor(  public _us: UsuarioService ) {
    this.cargarUsuarios();
  }

  ngOnInit() {


  }

  cargarUsuarios() {


    this._us.cargarUsuarios( )
          .subscribe( (resp: any) => {
            this.usuarios = resp;
            this.cargando = false;
          });
  }

}

import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  token: string = this._us.token;
  constructor( private _us: UsuarioService) {
  }
}

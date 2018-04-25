import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [`.container { margin : 50px auto; }`]
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = [];
  cargando: Boolean = true;

  constructor( public _ps: ProyectoService,
                public router: Router) {
    this.cargarProyecto();
   }

  ngOnInit() {
  }

  cargarProyecto() {
    this._ps.cargarProyectos()
                .subscribe( (resp: any) => {
                  this.proyectos = resp;
                  this.cargando = false;
                });
  }

}

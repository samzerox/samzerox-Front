import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

// Models
import { Ventana } from '../../models/ventana.model';

// services
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { VentanaService } from '../../services/ventana/ventana.service';
import { Proyecto } from '../../models/proyecto.model';

declare var swal: any;


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {

  proyecto: any[] = [];
  cargando: Boolean = true;

  constructor(public _us: UsuarioService,
              public _ps: ProyectoService,
              public _vs: VentanaService,
              public activatedRoute: ActivatedRoute) {

                this.cargarProyecto();

  }

  ngOnInit() { }

  cargarProyecto( ) {

    this.activatedRoute.params.subscribe( params => {

      let id = params['id'];


      this._ps.cargarProyecto( id )
      .subscribe( (resp: any) => {
        this.proyecto = resp;
        this.cargando = false;
      });
    });
  }

  crearVentana( forma: NgForm, id: string) {
    if (forma.invalid) {
      return;
    }

    let ventana = new Ventana(forma.value.titulo, forma.value.descripcion);

    this._vs.crearVentana( ventana )
                  .subscribe(correcto => {
                    this.actualizarProyecto(this.proyecto, correcto._id);
                    } );

  }

  actualizarProyecto(proyecto, idVentana) {


      this._ps.actualizarProyecto( proyecto, idVentana )
              .subscribe(resp => {
                this.cargarProyecto();
              });

  }

  borrarventana( ventana: Ventana ) {

    swal({
      title: 'Estas seguro?',
      text: 'Esta a punto de borrar el proyecto ' + ventana.titulo,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
        this._vs.borrarVentana( ventana._id)
                  .subscribe( borrado => {
                    this.cargarProyecto();
                  });
      }
    });

  }






}

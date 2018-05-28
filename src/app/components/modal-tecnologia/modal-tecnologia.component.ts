import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { TecnologiaService } from '../../services/tecnologia/tecnologia.service';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto/proyecto.service';

@Component({
  selector: 'app-modal-tecnologia',
  templateUrl: './modal-tecnologia.component.html',
  styles: []
})
export class ModalTecnologiaComponent implements OnInit {

  tecnologias: any[] = [];

  constructor( private _modalUploadService: ModalUploadService,
              private _ps: ProyectoService,
                private _ts: TecnologiaService) {
                  this.cargarTecnologias();
                }

  ngOnInit() {}

  cargarTecnologias() {
    this._ts.cargarTecnologias()
                .subscribe( (resp: any) => {
                  this.tecnologias = resp;
                });
  }

  cargarProyecto() {
      this._ps.cargarProyecto( this._modalUploadService.proyecto._id )
      .subscribe( (resp: any) => { 
        this._modalUploadService.notificacion.emit( resp );
        this._modalUploadService.proyecto = resp;
       });
  }


  agregarTecnologia( idTecnologia, proyecto: Proyecto) {

    this._ts.actualizarTecnologia( idTecnologia, proyecto )
                  .subscribe(correcto => {
                    this.cargarProyecto();
                    } );

  }


  eliminarTecnologia( idTecnologia, proyecto: Proyecto) {

    this._ts.eliminarTecnologia( idTecnologia, proyecto )
                  .subscribe(correcto => {
                    this.cargarProyecto();
                    } );

  }


  cerrarTecnologias() {

    this._modalUploadService.ocultarTecnologias();
  }

}

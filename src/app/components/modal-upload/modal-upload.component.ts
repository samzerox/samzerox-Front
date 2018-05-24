import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';




declare var swal: any;

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _sas: SubirArchivoService,
    public _modalUploadService: ModalUploadService,
  ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.imagenSubir = null;
    this.imagenTemp = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionImagen( archivo: File) {
    if ( !archivo ) {
      this.imagenSubir = null;
        return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
     this.imagenSubir = archivo;

     let reader = new FileReader();
     let urlImagenTemp = reader.readAsDataURL( archivo );

     reader.onloadend = () => { this.imagenTemp = reader.result; };

  }

  subirImagen() {

    this._sas.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
              .then( resp => {

                this._modalUploadService.notificacion.emit( resp );
                this.cerrarModal();
              })
              .catch (err => {
                console.log('Error en la carga...');

              });
  }

}
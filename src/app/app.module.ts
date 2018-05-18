import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { LoginComponent } from './pages/login/login.component';

// Services
import { UsuarioService } from './services/usuario/usuario.service';
import { ProyectoService } from './services/proyecto/proyecto.service';
import { VentanaService } from './services/ventana/ventana.service';

// Pipes
import { ImagenPipe } from './pipes/imagen.pipe';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NopagefoundComponent,
    HomeComponent,
    ProyectosComponent,
    AboutComponent,
    ProyectoComponent,
    ImagenPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ProyectoService,
    VentanaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

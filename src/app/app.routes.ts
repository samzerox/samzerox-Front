import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { AboutComponent } from './pages/about/about.component';



const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, data: {titulo: 'Home'} },
    {path: 'proyectos', component: ProyectosComponent, data: {titulo: 'Proyectos'} },
    {path: 'about', component: AboutComponent, data: {titulo: 'Sobre mi'} },
    // { path: '**', component: NopagefoundComponent }
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

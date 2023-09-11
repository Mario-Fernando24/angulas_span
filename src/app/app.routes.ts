import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesDetalleComponent } from './components/heroes-detalle/heroes-detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

 
export const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroesDetalle/:id', component: HeroesDetalleComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
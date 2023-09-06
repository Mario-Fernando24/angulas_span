import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
 
export const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'otra-ruta', component: OtraComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
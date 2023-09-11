import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
 import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


//Routes
import { APP_ROUTERS } from './app.routes'; // Asegúrate de que la ruta sea correcta

//Servicios
import { HeroesServiceTsService } from './servicios/heroes.service.ts.service';
import { HeroesDetalleComponent } from './components/heroes-detalle/heroes-detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({


  declarations: [
    AppComponent,
    NavbarComponent,
     HomeComponent,
     AboutComponent,
     HeroesComponent,
     HeroesDetalleComponent,
     BuscadorComponent
  ],
  imports: [
    //RUTAS
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTERS), // Importa las rutas aquí
  ],
  providers: [
    //TODOS NUESTROS SERVICIOS
    HeroesServiceTsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

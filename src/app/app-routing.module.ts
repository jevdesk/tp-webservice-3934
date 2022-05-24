import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'pelicula', component: PeliculasComponent },
{ path: 'traductor', component: TraductorComponent },
{ path: 'divisa', component: DivisasComponent },
{ path: 'musica', component: MusicaComponent },

{ path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

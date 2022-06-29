import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { MusicaComponent } from './components/musica/musica.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { QrappComponent } from './components/qrapp/qrapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    TraductorComponent,
    PeliculasComponent,
    DivisasComponent,
    MusicaComponent,
    QrappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { environment } from './../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';

import { AuthService } from './auth/services/auth.service';

import { CanEncaGuard } from './auth/guards/can-enca.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanAlumGuard } from './auth/guards/can-alumn.guard';

//firebase
import{AngularFireDatabaseModule} from '@angular/fire/database';
//componentes
import { RegSituaAlumComponent } from './components/reg-situa-alum/reg-situa-alum.component';
import { RegSugAlumComponent } from './components/reg-sug-alum/reg-sug-alum.component';
import { RegNotifPadreComponent } from './components/reg-notif-padre/reg-notif-padre.component';
import { RegRegTerceroComponent } from './components/reg-reg-tercero/reg-reg-tercero.component';
import { SituaAlumComponent } from './components/situa-alum/situa-alum.component';
import { SugAlumComponent } from './components/sug-alum/sug-alum.component';
import { NotifPadreComponent } from './components/notif-padre/notif-padre.component';
import { TerceroComponent } from './components/tercero/tercero.component';


//servicios
import {NotifPadreService} from './services/notif-padre.service';
import {SituaAlumService} from './services/situa-alum.service';
import {SugAlumService} from './services/sug-alum.service';
import {TerceroService} from './services/tercero.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{FormsModule} from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { EntradahoyComponent } from './components/entradahoy/entradahoy.component';

import { HistorialsalidaComponent } from './components/historialsalida/historialsalida.component';
import { HistorialentradaComponent } from './components/historialentrada/historialentrada.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { InscipcionComponent } from './components/inscipcion/inscipcion.component';
import { ListinscripcionComponent } from './components/listinscripcion/listinscripcion.component';





@NgModule({
 
  declarations: [
    AppComponent,
    NavbarComponent,
    RegSituaAlumComponent,
    RegSugAlumComponent,
    RegNotifPadreComponent,
    RegRegTerceroComponent,
    SituaAlumComponent,
    SugAlumComponent,
    NotifPadreComponent,
    TerceroComponent,
    ErrorComponent,
    EntradahoyComponent,
    
    HistorialsalidaComponent,
    HistorialentradaComponent,
    FooterComponent,
    ImagenComponent,
    InscipcionComponent,
    ListinscripcionComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    
    

  ],
  providers: [
    AuthService, 
    CanEncaGuard, CanAdminGuard, CanAlumGuard,NotifPadreService,SituaAlumService,SugAlumService,TerceroService,appRoutingProviders
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

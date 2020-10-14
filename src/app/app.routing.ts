import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEncaGuard } from './auth/guards/can-enca.guard';
import { CanAdminGuard} from './auth/guards/can-admin.guard';
import { CanAlumGuard} from './auth/guards/can-alumn.guard';




import {RegRegTerceroComponent } from './components/reg-reg-tercero/reg-reg-tercero.component';
import { NotifPadreComponent} from './components/notif-padre/notif-padre.component';
import { RegNotifPadreComponent} from './components/reg-notif-padre/reg-notif-padre.component';
import {RegSituaAlumComponent } from './components/reg-situa-alum/reg-situa-alum.component';
import {RegSugAlumComponent } from './components/reg-sug-alum/reg-sug-alum.component';
import { SituaAlumComponent} from './components/situa-alum/situa-alum.component';
import { SugAlumComponent} from './components/sug-alum/sug-alum.component';
import { TerceroComponent} from './components/tercero/tercero.component';
import { ErrorComponent} from './components/error/error.component';
import { EntradahoyComponent} from './components/entradahoy/entradahoy.component';
import { HistorialentradaComponent} from './components/historialentrada/historialentrada.component';
import { HistorialsalidaComponent} from './components/historialsalida/historialsalida.component';
import { InscipcionComponent} from './components/inscipcion/inscipcion.component';

//Array de rutas
const appRoutes: Routes = [
   
   {path:'regtercero', canActivate:[CanEncaGuard], component: RegRegTerceroComponent }, 
   {path:'regnotipadre',canActivate:[CanEncaGuard], component:NotifPadreComponent },
   {path:'notifpadre',canActivate:[CanAdminGuard], component:RegNotifPadreComponent},
   {path:'regsituaalumn',canActivate:[CanAlumGuard], component:RegSituaAlumComponent},
   {path:'regsugalum',canActivate:[CanAlumGuard], component:RegSugAlumComponent},
   {path:'situaalum',canActivate:[CanAdminGuard], component:SituaAlumComponent},
   {path:'sugalum',canActivate:[CanAdminGuard], component:SugAlumComponent},
   {path:'tercero',canActivate:[CanAdminGuard], component:TerceroComponent},
   {path:'entradahoy',canActivate:[CanEncaGuard], component:EntradahoyComponent},
   {path:'historialentrada',canActivate:[CanEncaGuard], component:HistorialentradaComponent},
   {path:'historialsalida',canActivate:[CanEncaGuard], component:HistorialsalidaComponent},
   {path:'inscripcion',canActivate:[CanAdminGuard], component:InscipcionComponent},
   {path:'**', component: ErrorComponent}
];

//Aqui exportare el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
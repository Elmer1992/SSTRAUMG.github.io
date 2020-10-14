import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEncaGuard } from './auth/guards/can-enca.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanAlumGuard } from './auth/guards/can-alumn.guard';


const routes: Routes = [
  {
path: '',
redirectTo: '/home',
pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule), /*canActivate:[CanAdminGuard],*/ },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[CanAdminGuard], },
 


  { path: 'encargado', loadChildren: () =>  import('./encargado/encargado.module').then(m => m.EncargadoModule),canActivate: [CanEncaGuard],},
  
   { path: 'alumno', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule),canActivate: [CanAlumGuard], },
  { path: 'ayuda', loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaModule) },
  { path: 'mision', loadChildren: () => import('./mision/mision.module').then(m => m.MisionModule) },
  { path: 'vision', loadChildren: () => import('./vision/vision.module').then(m => m.VisionModule) }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
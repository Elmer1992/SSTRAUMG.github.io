import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CanAlumGuard implements CanActivate {
  constructor(private authSvc:AuthService){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return this.authSvc.user$.pipe(
      take(1),
      map ((user) => user && this.authSvc.isAlumno(user)),
      tap(CanEncaGuard => {
        if(!CanEncaGuard){
         // window.alert('Acceso denegado, tu no eres un alumno')
          Swal.fire({
            icon: 'error',
            position: 'center',
            title: 'ACCESO DENEGADO',
            text: 'Accede como alumno',
            timer: 1000,
            showConfirmButton: false,
            })
        }
      })
    )
  }
  
}

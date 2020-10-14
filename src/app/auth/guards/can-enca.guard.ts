import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CanEncaGuard implements CanActivate {
  constructor(private authSvc:AuthService){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return this.authSvc.user$.pipe(
      take(1),
      map ((user) => user && this.authSvc.isEncargado(user)),
      tap(CanEncaGuard => {
        if(!CanEncaGuard){
        //  window.alert('Acceso denegado, tu no eres un encargado')
          Swal.fire({
            icon: 'error',
            position: 'center',
            title: 'ACCESO DENEGADO',
            text: 'Accede como encargado',
            timer: 1000,
            showConfirmButton: false,
            })
        }
      })
    )
  }
  
}

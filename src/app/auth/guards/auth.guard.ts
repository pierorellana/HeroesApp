import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //   if( this.authService.auth.id ){
    //     return true;
    //   }
    //   return false;

    return this.authService.verificar().pipe(
      tap((autenticado) => {
        if (!autenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    //   if( this.authService.auth.id ){
    //     return true;
    //   }
    //   return false;

    return this.authService.verificar().pipe(
      tap((autenticado) => {
        if (!autenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}

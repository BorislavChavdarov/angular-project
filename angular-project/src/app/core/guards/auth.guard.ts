import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn();
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
 
      
 
 
       return this.authService.isLoggedIn().pipe(
         map(res => {
          if (res) {
            return true;
          }
          return this.router.createUrlTree(['/login'], {
            queryParams: {
              'redirect-to': '/' + route.url.map(f => f.path).join('/')
            }
          });
        }))
  }

}

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LoginGuard implements CanActivate {

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
}

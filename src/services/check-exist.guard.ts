import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CheckExistGuard implements CanActivate {
  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.dataService.getAnimeById(route.params['id'])) {
      this.router.navigateByUrl('/page-not-found').then();
      return false;
    }
    return true;
  }

}

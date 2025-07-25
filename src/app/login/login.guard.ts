import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "src/services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn()
        if (logged) {

            return true
        }
        this.router.navigate(["login"])
        return false
    }


}
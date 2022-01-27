import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem("userToken") != null) {
   
      // var payLoad = JSON.parse(
      //   window.atob(localStorage.getItem("userToken").split(".")[1])
      // );

      // var userRole = payLoad.Department;
      // localStorage.setItem("department", userRole);
      
      // let roles = next.data["department"] as Array<string>;
      // if (roles) {
      //   if (this.roleMatch(roles)) return true;
      //   else {
      //     this.router.navigateByUrl("/authentication/404");
      //     return false;
      //   }
      // }
      return true;
    } else {
      this.router.navigateByUrl("/authentication/login");
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (localStorage.getItem("userToken") != null) {
   
      // var payLoad = JSON.parse(
      //   window.atob(localStorage.getItem("userToken").split(".")[1])
      // );
      // var userRole = payLoad.Department;
      // localStorage.setItem("department", userRole);
      // let roles = next.data["department"] as Array<string>;
      // if (roles) {
      //   if (this.roleMatch(roles)) return true;
      //   else {
      //     this.router.navigateByUrl("/authentication/404");
      //     return false;
      //   }
      // }
      return true;
    } else {
      this.router.navigateByUrl("/authentication/login");
      return false;
    }
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(
      window.atob(localStorage.getItem("userToken").split(".")[1])
    );
    //change to Array Of Roles
    var userRole = payLoad.Department;
    allowedRoles.forEach((element) => {
      ;
      if(Array.isArray(userRole)){
        if (userRole.find(x=>x==element) != null ) {
          isMatch = true;
          return false;
        }
      }else{
        if (userRole == element ) {
          isMatch = true;
          return false;
        }
      }
    });
    return isMatch;
  }
}

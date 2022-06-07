import { Injectable } from '@angular/core';
import { User } from 'src/app/login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedin = false;


  login(user: User): boolean {
    if (user.userName == "mustafa" && user.password == "1234") {
      
      this.loggedin = true
      localStorage.setItem("isLogged", user.userName)
      return true;
    }
    return false;

  }

  isLoggedIn(){
    return this.loggedin
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedin=false;
  }
}

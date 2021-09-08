import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  authStateChange: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  superSecretPassword="L3tme!n"

  constructor() {
    this.authStateChange.next(false);
  }


  updateLogin(password: string): boolean {
    if (password === this.superSecretPassword) {
      this.authStateChange.next(true);
      return true
    } else {
      this.authStateChange.next(false);
      return false
    }
  }
}

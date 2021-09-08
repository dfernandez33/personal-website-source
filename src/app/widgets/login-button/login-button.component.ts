import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.sass']
})
export class LoginButtonComponent implements OnInit {
  showModal = false;
  showWrongPassword = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  showLogin() {
    this.showModal = !this.showModal;
  }

  attemptLogin(password: string) {
    const success = this.auth.updateLogin(password);
    if (success) {
      this.showModal = false;
      this.showWrongPassword = false;
    } else {
      this.showWrongPassword = true;
    }
  }

}

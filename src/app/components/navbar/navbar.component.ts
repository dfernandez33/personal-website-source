import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbarBurger') burger!: ElementRef<HTMLAnchorElement>;
  centerText = "David Jose Fernandez"
  showMenu = false;
  isMobile = false;

  constructor(public auth: AuthenticationService) {
    this.auth.authStateChange.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.centerText = "Admin Mode"
      } else {
        this.centerText = "David Jose Fernandez"
      }
    })
  }
  ngAfterViewInit(): void {
    this.isMobile = this.burger.nativeElement.offsetHeight !== 0
  }


  toggleDropDownMenu() {
    this.showMenu = !this.showMenu;
  }
}

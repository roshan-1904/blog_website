import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  isDestinationOpen = false;
  isCategoryOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open', this.isMenuOpen);
  }

  toggleDestination(event: Event) {
    event.stopPropagation();
    this.isDestinationOpen = !this.isDestinationOpen;
  }

  toggleCategory(event: Event) {
    event.stopPropagation();
    this.isCategoryOpen = !this.isCategoryOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isDestinationOpen = false;
    this.isCategoryOpen = false;
    document.body.classList.remove('menu-open');
  }
}

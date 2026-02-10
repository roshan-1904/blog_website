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
  constructor( private router:Router) { }

  

  ngOnInit(): void {
  }

    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDestination() {
    this.isDestinationOpen = !this.isDestinationOpen;
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

  goToHome() {
    this.router.navigate(['/main']);
  }
  
  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  gopToBlog() {
    this.router.navigate(['/blog']);
  }
  goToGallery() {
    this.router.navigate(['/gallery']);
  }


  goToGames() {
    this.router.navigate(['/games']);
  }
  goToIndia() {
    this.router.navigate(['/india']);
  }
   goToUSA() {
    this.router.navigate(['/usa']);
  }
goToCanada() {
    this.router.navigate(['/canada']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
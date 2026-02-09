import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   isOpen: boolean = false; 

  constructor( private router:Router) { }

  ngOnInit(): void {
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
}
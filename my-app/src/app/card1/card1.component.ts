import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   goToAbout() {
    this.router.navigate(['/about']);
  }
}

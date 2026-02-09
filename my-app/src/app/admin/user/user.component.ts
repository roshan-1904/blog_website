import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
// export class UserComponent implements OnInit {

//   constructor(private router:Router) { }

//   ngOnInit(): void {
//   }

// goTofeedback() {
//     this.router.navigate(['/feedback']);
//   }
//   goToadmingallery() {
//     this.router.navigate(['/admingallery']);
//   }
//   goToadminindia() {
//     this.router.navigate(['/adminindia']);
//   }
//   goToadminusa() {
//     this.router.navigate(['/adminusa']);
//   }
//   goToadmincanada() {
//     this.router.navigate(['/admincanada']);
//   }
// }



export class UserComponent implements OnInit {

  activePage: string = '';   // 👈 this will control which component shows

  constructor(private router:Router) {}

  ngOnInit(): void {}

  goToadminindia() {
    this.activePage = 'india';
  }

  goToadminusa() {
    this.activePage = 'usa';
  }

  goToadmincanada() {
    this.activePage = 'canada';
  }

  goTofeedback() {
    this.activePage = 'feedback';
  }

  goToadmingallery() {
    this.activePage = 'gallery';
  }
}

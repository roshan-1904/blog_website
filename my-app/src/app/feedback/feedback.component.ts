// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-feedback',
//   templateUrl: './feedback.component.html',
//   styleUrls: ['./feedback.component.scss']
// })
// export class FeedbackComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {

  feedbacks: any[] = [];

  constructor(private http: HttpClient) {}

 ngOnInit() {
  this.http.get<any[]>('https://blog-website-ebwg.onrender.com/api/feedback')
    .subscribe({
      next: data => this.feedbacks = data,
      error: err => console.log(err)
    });
}

}

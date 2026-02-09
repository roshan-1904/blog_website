// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { from } from 'rxjs';
// import { title } from 'process';

// @Component({
//   selector: 'app-admingallery',
//   templateUrl: './admingallery.component.html',
//   styleUrls: ['./admingallery.component.scss']
// })
// export class AdmingalleryComponent implements OnInit {
//   form={
//     title:"",
//     imageUrl:"",
//     location:"",
//     country:""
//   }
//   constructor(private http:HttpClient) { }

//   ngOnInit(): void {
//   }

//   submitGallery(){
//     this.http.post('http://localhost:5000/api/gallery',this.form)
//     .subscribe(() => {
//         alert("Gallery saved!");
//         this.form = { title:'', imageUrl:'', location:'', country:'' };
//       }
//     );
//   }
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admingallery',
  templateUrl: './admingallery.component.html',
styleUrls: ['./admingallery.component.scss']


})
export class AdmingalleryComponent {

  form = {
    title: '',
    imageUrl: '',
    location: '',
    country: ''
  };

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post('https://blog-website-ebwg.onrender.com/api/gallery', this.form)
      .subscribe({
        next: () => {
          alert('Gallery image saved');
          this.form = { title:'', imageUrl:'', location:'', country:'' };
        },
        error: err => console.error(err)
      });
  }
}


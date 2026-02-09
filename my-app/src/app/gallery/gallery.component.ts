// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.scss']
// })
// export class GalleryComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  galleries:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("http://localhost:5000/api/gallery")
      .subscribe(data => this.galleries = data);
  }
}

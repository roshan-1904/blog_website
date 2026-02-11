import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']

})
export class GalleryComponent implements OnInit {

  galleries:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("https://blog-website-ebwg.onrender.com/api/gallery")
      .subscribe(data => this.galleries = data);
  }
}

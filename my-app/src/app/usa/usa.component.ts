import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
   styleUrls: ['./usa.component.scss']
})
export class UsaComponent implements OnInit {

  videos:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("https://blog-website-ebwg.onrender.com/api/adminusa")
      .subscribe(data => this.videos = data);
  }
}

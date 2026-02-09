import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.component.html',
   styleUrls: ['./canada.component.scss']
})
export class CanadaComponent implements OnInit {

  videos:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("http://localhost:5000/api/admincanada")
      .subscribe(data => this.videos = data);
  }
}


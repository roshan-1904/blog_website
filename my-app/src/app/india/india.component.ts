import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
   styleUrls: ['./india.component.scss']
})
export class IndiaComponent implements OnInit {

  indiaList:any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get<any[]>("https://blog-website-ebwg.onrender.com/api/adminindia")

      .subscribe(res => this.indiaList = res);
  }
}


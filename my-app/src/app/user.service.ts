import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  api = "http://localhost:5000/api/users";

  constructor(private http: HttpClient) {}

  addUser(data:any){
    return this.http.post(this.api, data);
  }

  getUsers(){
    return this.http.get(this.api);
  }
}


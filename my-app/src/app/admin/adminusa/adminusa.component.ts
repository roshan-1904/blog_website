import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminusa',
  templateUrl: './adminusa.component.html',
  styleUrls: ['./adminusa.component.scss']
})
export class AdminusaComponent {

  usa = {
    videoLink: '',
    name: '',
    description: '',
    location: '',
    country: 'USA'
  };

  constructor(private http: HttpClient) {}

  saveData(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.http.post("http://localhost:5000/api/adminusa", this.usa)
      .subscribe({
        next: () => {
          alert("USA Data Saved");
          this.usa = { videoLink:'', name:'', description:'', location:'', country:'USA' };
          form.resetForm({ country: 'USA' }); 
        },
        error: err => console.log(err)
      });
  }
}

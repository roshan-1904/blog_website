import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}
submit(form: NgForm) {
  if (form.invalid) return;

  this.http.post('https://blog-website-ebwg.onrender.com/api/feedback', this.formData)
    .subscribe({
      next: () => {
        alert("Message Sent!");
        this.formData = { name:'', email:'', subject:'', message:'' };
        form.resetForm();
      },
      error: err => console.log(err)
    });
}

}

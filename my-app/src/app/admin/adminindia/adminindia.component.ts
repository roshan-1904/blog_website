// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-adminindia',
//   templateUrl: './adminindia.component.html',
//   styleUrls: ['./adminindia.component.scss']
// })
// export class AdminindiaComponent {

  
//   india = {
//     videoLink: '',
//     name: '',
//     description: '',
//     location: '',
//     country: ''
//   };

//   constructor(private http: HttpClient) {}

//   saveData() {
//   this.http.post("http://localhost:5000/api/adminindia", this.india)
//     .subscribe({
//       next: () => {
//         alert("Saved Successfully");
//         this.india = { videoLink:'', name:'', description:'', location:'', country:'' };
//       },
//       error: err => console.log(err)
//     });
// }

// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminindia',
  templateUrl: './adminindia.component.html',
  styleUrls: ['./adminindia.component.scss']
})
export class AdminindiaComponent {

  india = {
    videoLink: '',
    name: '',
    description: '',
    location: '',
    country: ''
  };

  constructor(private http: HttpClient) {}

  saveData(form: NgForm) {
    if (form.invalid) {
      // Mark all fields as touched to show errors
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.http.post("http://localhost:5000/api/adminindia", this.india)
      .subscribe({
        next: () => {
          alert("Saved Successfully");
          this.india = { videoLink:'', name:'', description:'', location:'', country:'' };
          form.resetForm();
        },
        error: err => console.log(err)
      });
  }
}

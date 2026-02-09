// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-admincanada',
//   templateUrl: './admincanada.component.html',
//    styleUrls: ['./admincanada.component.scss']
// })
// export class AdmincanadaComponent {

//   canada = {
//     videoLink: '',
//     name: '',
//     description: '',
//     location: '',
//     country: 'Canada'
//   };

//   constructor(private http: HttpClient) {}

//   saveData() {
//     this.http.post("http://localhost:5000/api/admincanada", this.canada)
//       .subscribe({
//         next: () => {
//           alert("Canada Data Saved");
//           this.canada = { videoLink:'', name:'', description:'', location:'', country:'Canada' };
//         },
//         error: err => console.log(err)
//       });
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admincanada',
  templateUrl: './admincanada.component.html',
  styleUrls: ['./admincanada.component.scss']
})
export class AdmincanadaComponent {

  canada = {
    videoLink: '',
    name: '',
    description: '',
    location: '',
    country: 'Canada'
  };

  constructor(private http: HttpClient) {}

  saveData(form: NgForm) {
    if (form.invalid) {
      // Touch all fields to show errors
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.http.post("https://blog-website-ebwg.onrender.com/api/admincanada", this.canada)
      .subscribe({
        next: () => {
          alert("Canada Data Saved");
          this.canada = { videoLink:'', name:'', description:'', location:'', country:'Canada' };
          form.resetForm({ country: 'Canada' });
        },
        error: err => console.log(err)
      });
  }
}

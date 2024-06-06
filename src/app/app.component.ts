import { Component } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-validation';

  // markAllAsTouched() {
  //   Object.keys(this.profileForm.controls).forEach(field => {
  //     const control = this.profileForm.get(field);
  //     control?.markAsTouched({ onlySelf: true });
  //   });
  // }
  
}


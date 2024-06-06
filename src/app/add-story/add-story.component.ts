import { Component } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent {

  constructor(private formBuilder: FormBuilder , private addStoryService:ServiceService) {}

  profileForm = this.formBuilder.group({
    storyname: ['', Validators.required],
    storypoint: ['',Validators.required],
  });

  onSubmit() {
   if(!this.profileForm.valid){
      console.log('form is invalid');
   }else{
    console.warn(this.profileForm.value);
    this.addStoryService.submitProfileForm(this.profileForm.value);
   }
  }

}

import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent {
  stories!: any[];

  constructor(private formBuilder: FormBuilder , private dataService: ServiceService) {}

  sprintform = this.formBuilder.group({
    sprintpoint: ['', Validators.required],
  });

  ngOnInit(): void {
    this.dataService.getStories().subscribe(
      (data: any) => {
        console.log(data);
        this.stories = data
      },
      (error: any) => {
        console.error('Error fetching stories:', error);
      }
    );
  }

  onSubmit() {
    if (!this.sprintform.valid) {
      console.log('Form is invalid');
    } else {
      const sprintPoints = this.sprintform.value.sprintpoint;
      
      const selectedStories = this.stories.filter(story => story.storyPoint === sprintPoints);
      
      console.log('Selected Stories:', selectedStories);
  
     
    }
  }
  
  
  
}

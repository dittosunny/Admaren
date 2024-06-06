import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css'],
})
export class SprintCalculatorComponent {
  stories!: any[];
  id!: number;
  selectedStories!:any[]
  showSelectedStories: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: ServiceService
  ) {}

  sprintform = this.formBuilder.group({
    sprintpoint: ['', Validators.required],
  });

  ngOnInit(): void {
    this.dataService.getStories().subscribe(
      (data: any) => {
        console.log(data);
        this.stories = data;
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
      console.log(sprintPoints);
      
      this.selectedStories = this.stories.filter(
        (story) => story.storyPoint === sprintPoints
      );

      console.log('Selected Stories:', this.selectedStories);
      this.showSelectedStories = true
    }
  }

  clearStory(storyPointToDelete: number) {
    if (!this.stories || this.stories.length === 0) {
      console.log('No stories available');
      return;
    }

    const indexToDelete = this.stories.findIndex(
      (story) => story.storyPoint === storyPointToDelete
    );

    if (indexToDelete !== -1) {
      this.stories.splice(indexToDelete, 1);
      console.log(
        `Story with story point ${storyPointToDelete} deleted successfully.`
      );
    } else {
      console.log(`No story found with story point ${storyPointToDelete}.`);
    }
  }
}

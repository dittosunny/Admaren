import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent {
  stories!: any[] 

  constructor(private dataService: ServiceService) { }

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
}

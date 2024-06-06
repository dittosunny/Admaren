import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStoryComponent } from './view-story/view-story.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: ViewStoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-story',
    component: AddStoryComponent,
  },
  {
    path: 'sprint-calculator',
    component: SprintCalculatorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

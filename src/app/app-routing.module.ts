import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', redirectTo: '/survey', pathMatch: 'full'},
  { path: 'survey', component: SurveyComponent, data: { text: 'Survey' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

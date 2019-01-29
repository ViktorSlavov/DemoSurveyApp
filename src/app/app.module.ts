import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyComponent } from './survey/survey.component';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { QuestionService } from './survey/questions.service';
import { IgxIconModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuestionnaireModule,
    IgxIconModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

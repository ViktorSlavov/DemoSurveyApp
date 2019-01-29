import { Component, OnInit } from '@angular/core';
import { QuestionService } from './questions.service';

@Component({
    selector: `app-survey`,
    templateUrl: `./survey.component.html`,
    styleUrls: [`./survey.component.scss`]
})
export class SurveyComponent implements OnInit {
    public data: any;

    public errorMsgs: { multi: string, single: string } = {
        multi: 'Please select at least one (1) answer!',
        single: 'Please select an answer!'
    };
    constructor(private questionService: QuestionService) {
        this.data = this.questionService.questions;
    }

    ngOnInit() {
        this.questionService.get_data();
    }

    public handleEmit(event) {
        console.log(event);
    }
}

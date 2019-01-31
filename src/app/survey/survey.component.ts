import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { QuestionService } from './questions.service';

@Component({
    selector: `app-survey`,
    templateUrl: `./survey.component.html`,
    styleUrls: [`./survey.component.scss`]
})
export class SurveyComponent implements OnInit {
    public data: any;

    @ViewChild('errorIcon', { read: TemplateRef })
    public errorIcon: TemplateRef<any>;

    public errorMsgs: { multi: string, single: string } = {
        multi: 'Bitte wählen Sie wenigstens eine (1) Antwort',
        single: 'Bitte wählen Sie eine (1) Antwort'
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

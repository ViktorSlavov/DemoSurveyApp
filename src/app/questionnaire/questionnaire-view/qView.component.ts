import { Component, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Question } from '../../service/interfaces';
import { QBase } from '../qBase/qBase';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-questionnaire`,
    templateUrl: `./qView.component.html`,
    styleUrls: [`./qView.component.scss`]
})
export class QViewComponent {
    @Output()
    public submit = new EventEmitter<any>();

    @Input()
    public questions: Question[];

    @Input()
    public error: { multi: string, single: string } = {
        multi: 'Please select at least 1 answer!',
        single: 'Please select an answer!'
    };

    @ViewChildren(QBase, { read: QBase })
    public qControls: QueryList<QBase>;

    public get valid() {
        return !this.qControls.some(e => e.value === null );
    }

    public submitResults() {
        const args = this.qControls.map((e) => {
            return {
                question: e.question.text,
                answer: e.value
            };
        });
        this.submit.emit(args);
    }
}

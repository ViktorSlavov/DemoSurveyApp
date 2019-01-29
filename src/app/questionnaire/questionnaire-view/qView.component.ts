import { Component, Input, ViewChildren, QueryList, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Question } from '../../service/interfaces';
import { QBase } from '../qBase/qBase';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-questionnaire`,
    templateUrl: `./qView.component.html`,
    styleUrls: [`./qView.component.scss`]
})
export class QViewComponent {
    /**
     * Emitted when the questionnaire is submitted
     */
    @Output()
    public submit = new EventEmitter<any>();

    /**
     * The list of all of the questions that are to be rendered in the questionnaire
     */
    @Input()
    public questions: Question[];

    @Input()
    public error: { multi: string, single: string } = {
        multi: 'Please select at least 1 answer!',
        single: 'Please select an answer!'
    };

    /**
     * An icon template that should be used along with error messages
     * If passed, overwrites the default error icon
     */
    @Input()
    public errorIcon: TemplateRef<any> = null;

    @ViewChildren(QBase, { read: QBase })
    private qControls: QueryList<QBase>;

    /**
     * Gets the validity of the questionnaire. If no questions have errors, then the questionnaire is valid
     */
    public get valid() {
        return this.qControls ? !this.qControls.some(e => !e.valid) : false;
    }

    /**
     * Submits the questionnaire
     */
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

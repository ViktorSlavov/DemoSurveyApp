import { Component, Input, ViewChild } from '@angular/core';
import { QBase } from '../q-base/qBase';
import { ISelectionEventArgs, IgxDropDownComponent } from 'igniteui-angular';
import { QQuestionnaireComponent } from '../q-questionnaire/q-questionnaire.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-single`,
    templateUrl: `./q-single.component.html`,
    styleUrls: [`./q-single.component.scss`],
    providers: [{ provide: QBase, useExisting: QSingleComponent }]
})
export class QSingleComponent extends QBase {
    constructor(public questionnaire: QQuestionnaireComponent) {
        super();
    }
    @ViewChild(IgxDropDownComponent, { read: IgxDropDownComponent })
    public dropDown: IgxDropDownComponent;

    public handleSelection(event: ISelectionEventArgs) {
        this.value = event.newSelection.value;
    }
}

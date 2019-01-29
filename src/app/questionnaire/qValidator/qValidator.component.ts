import { Component, ContentChild } from '@angular/core';
import { QBase } from '../qBase/qBase';
import { QErrorIconDirective } from '../directives/qErrorIcon.directive';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-validator`,
    templateUrl: `./qValidator.component.html`,
    styleUrls: [`./qValidator.component.scss`]
})
export class QValidatorComponent {
    constructor(public control: QBase) {}

    @ContentChild(QErrorIconDirective, { read: QErrorIconDirective })
    public errorIcon: QErrorIconDirective;
}

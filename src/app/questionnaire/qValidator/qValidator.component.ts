import { Component, ContentChild, HostListener, ElementRef, TemplateRef } from '@angular/core';
import { QBase } from '../qBase/qBase';
import { QErrorIconDirective } from '../directives/qErrorIcon.directive';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-validator`,
    templateUrl: `./qValidator.component.html`,
    styleUrls: [`./qValidator.component.scss`]
})
export class QValidatorComponent {
    private _errorIcon = null;
    constructor(public control: QBase, public elementRef: ElementRef) {}

    @ContentChild(TemplateRef, { read: TemplateRef })
    public get errorIcon(): TemplateRef<any> {
        return this._errorIcon;
    }

    public set errorIcon(val: TemplateRef<any>) {
        this._errorIcon = val;
    }

    @HostListener('click')
    handleClick() {
        // tslint:disable-next-line:no-debugger
        debugger;
    }
}

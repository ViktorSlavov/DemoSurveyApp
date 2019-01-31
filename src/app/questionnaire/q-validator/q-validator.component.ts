import { Component, ContentChild, HostListener, ElementRef, TemplateRef, forwardRef } from '@angular/core';
import { QBase } from '../q-base/qBase';
import { QErrorIconDirective } from '../directives/qErrorIcon.directive';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-validator`,
    templateUrl: `./q-validator.component.html`,
    styleUrls: [`./q-validator.component.scss`]
})
export class QValidatorComponent {
    private _errorIcon = null;
    constructor(public control: QBase, public elementRef: ElementRef) {}

    public get errorIcon(): TemplateRef<any> {
        return this._errorIcon;
    }

    @ContentChild(forwardRef(() => QErrorIconDirective), { read: TemplateRef })
    public set errorIcon(val: TemplateRef<any>) {
        this._errorIcon = val;
    }

    @HostListener('click')
    handleClick() {
        // tslint:disable-next-line:no-debugger
        debugger;
    }
}

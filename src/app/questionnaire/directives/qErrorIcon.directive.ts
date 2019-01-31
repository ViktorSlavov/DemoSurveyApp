import { Directive, HostBinding, TemplateRef, ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: `[qErrorIcon]`
})
export class QErrorIconDirective {
    @HostBinding('class.error__icon')
    public errorClass = 'error__icon';
}

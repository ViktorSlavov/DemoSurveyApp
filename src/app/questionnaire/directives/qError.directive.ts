import { Directive, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: `[qError]`
})
export class QErrorDirective {
    @HostBinding('class.error__text')
    public errorClass = 'error__text';
}

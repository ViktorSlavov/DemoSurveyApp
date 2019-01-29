import { Directive, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: `[qText]`
})
export class QTextDirective {
    @HostBinding('class.question__text')
    public textClass = 'question__text';
}

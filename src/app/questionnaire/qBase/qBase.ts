import { Input } from '@angular/core';
import { Question } from 'src/app/service/interfaces';

export abstract class QBase {
    @Input()
    public question: Question;

    public value: any = null;
}

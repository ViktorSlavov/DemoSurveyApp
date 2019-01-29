import { Component, Input, ViewChild } from '@angular/core';
import { QBase } from '../qBase/qBase';
import { IgxComboComponent } from 'igniteui-angular';
import { QViewComponent } from '../questionnaire-view/qView.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'q-multi',
    templateUrl: './qMulti.component.html',
    styleUrls: [`./qMulti.component.scss`],
    providers: [{ provide: QBase, useExisting: QMultiComponent }]
})
export class QMultiComponent extends QBase {
    private _value = null;

    constructor(public questionnaire: QViewComponent) {
        super();
    }

    @ViewChild(IgxComboComponent, { read: IgxComboComponent })
    public combo: IgxComboComponent;

    public get value(): any {
        return this._value ? this._value.length ? this._value : null : null;
    }
    public set value(newVal: any) {
        this._value = newVal;
    }
}

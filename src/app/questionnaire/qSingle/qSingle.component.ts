import { Component, Input, ViewChild } from '@angular/core';
import { QBase } from '../qBase/qBase';
import { ISelectionEventArgs, IgxDropDownComponent } from 'igniteui-angular';

@Component({
    // tslint:disable-next-line:component-selector
    selector: `q-single`,
    templateUrl: `./qSingle.component.html`,
    styleUrls: [`./qSingle.component.scss`],
    providers: [{ provide: QBase, useExisting: QSingleComponent }]
})
export class QSingleComponent extends QBase {
    @ViewChild(IgxDropDownComponent, { read: IgxDropDownComponent })
    public dropDown: IgxDropDownComponent;

    public handleSelection(event: ISelectionEventArgs) {
        this.value = event.newSelection.value;
    }
}

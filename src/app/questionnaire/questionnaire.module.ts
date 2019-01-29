import { NgModule } from '@angular/core';
import { QMultiComponent } from './qMulti/qMulti.component';
import { QSingleComponent } from './qSingle/qSingle.component';
import { QValidatorComponent } from './qValidator/qValidator.component';
import { QViewComponent } from './questionnaire-view/qView.component';
import { QErrorDirective } from './directives/qError.directive';
import { QTextDirective } from './directives/qText.directive';
import { FormsModule } from '@angular/forms';
import { IgxDropDownModule, IgxComboModule, IgxInputGroupModule, IgxToggleModule, IgxIconModule, IgxButtonModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { QErrorIconDirective } from './directives/qErrorIcon.directive';

@NgModule({
    declarations: [QMultiComponent, QSingleComponent, QValidatorComponent, QViewComponent,
        QErrorDirective, QErrorIconDirective, QTextDirective],
    exports: [QMultiComponent, QSingleComponent, QValidatorComponent, QViewComponent, QErrorDirective, QErrorIconDirective, QTextDirective],
    imports: [CommonModule, FormsModule, IgxDropDownModule, IgxComboModule,
        IgxInputGroupModule, IgxToggleModule, IgxIconModule, IgxButtonModule]
})
export class QuestionnaireModule {
}

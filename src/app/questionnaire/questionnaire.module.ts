import { NgModule } from '@angular/core';
import { QMultiComponent } from './q-multi/q-multi.component';
import { QSingleComponent } from './q-single/q-single.component';
import { QValidatorComponent } from './q-validator/q-validator.component';
import { QQuestionnaireComponent } from './q-questionnaire/q-questionnaire.component';
import { QErrorDirective } from './directives/qError.directive';
import { QTextDirective } from './directives/qText.directive';
import { FormsModule } from '@angular/forms';
import { IgxDropDownModule, IgxComboModule, IgxInputGroupModule, IgxToggleModule, IgxIconModule, IgxButtonModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { QErrorIconDirective } from './directives/qErrorIcon.directive';

@NgModule({
    declarations: [QMultiComponent, QSingleComponent, QValidatorComponent, QQuestionnaireComponent,
        QErrorDirective, QErrorIconDirective, QTextDirective],
    exports: [QMultiComponent, QSingleComponent, QValidatorComponent, QQuestionnaireComponent,
        QErrorDirective, QErrorIconDirective, QTextDirective],
    imports: [CommonModule, FormsModule, IgxDropDownModule, IgxComboModule,
        IgxInputGroupModule, IgxToggleModule, IgxIconModule, IgxButtonModule]
})
export class QuestionnaireModule {
}

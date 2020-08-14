import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClarityModule } from '@clr/angular';

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    imports: [
        CommonModule,
        ClarityModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [
        DynamicFormComponent,
        DynamicFormQuestionComponent,
    ]
  })
  export class DynamicFormModule { }
  
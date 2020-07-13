import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveInputComponent } from './components/reactive-input/reactive-input.component';
import { ReactiveElementInfoComponent } from './components/reactive-element-info/reactive-element-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveInputComponent,
    ReactiveElementInfoComponent,
  ],
  exports: [
    ReactiveInputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class FormElementsModule { }

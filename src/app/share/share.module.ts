import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/third-party/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [

  ],
  entryComponents: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
],
})
export class SharedModule { }

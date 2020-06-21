import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule, MatButtonModule, MatIconModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule, MatIconModule
  ]
})
export class MaterialModule { }

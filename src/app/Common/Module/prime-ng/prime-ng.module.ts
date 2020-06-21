import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';

// Module sẽ chứa tất cả module control của primeNG và share tất cả module đó cho module nào import module này vào
@NgModule({
  imports: [BrowserAnimationsModule, CalendarModule, ButtonModule, EditorModule],
  exports: [BrowserAnimationsModule, CalendarModule, ButtonModule, EditorModule],
})
export class PrimeNGModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';



@NgModule({
  declarations: [DirectiveComponent, NgIfComponent],
  exports:[DirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }

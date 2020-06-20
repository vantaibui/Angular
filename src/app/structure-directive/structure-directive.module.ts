import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureDirectiveComponent } from './structure-directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';



@NgModule({
  declarations: [StructureDirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent],
  exports:[
    StructureDirectiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StructureDirectiveModule { }

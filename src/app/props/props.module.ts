import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { PrimeNGModule } from '../Common/Module/prime-ng/prime-ng.module';
import { FormsModule, FormControl } from '@angular/forms';
import { MaterialModule } from '../Common/Module/material/material.module';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    DemoInputComponent,
  ],
  
  imports: [CommonModule, PrimeNGModule, FormsModule, MaterialModule],
  exports: [DemoInputComponent],
})
export class PropsModule {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MaterialModule } from '@shared/material.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }

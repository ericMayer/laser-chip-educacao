import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { SnackBarAlertComponent } from './snack-bar-alert.component';

@NgModule({
  declarations: [
    SnackBarAlertComponent
  ],
  exports: [
    SnackBarAlertComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class SnackBarAlertModule { }

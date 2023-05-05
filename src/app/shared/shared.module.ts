import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarAlertModule } from '@shared/components/snack-bar-alert/snack-bar-alert.module';
import { MaterialModule } from '@shared/material.module';
import { RequestStateModule } from '@shared/components/request-state/request-state.module';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';

@NgModule({
  exports: [
    CommonModule,
    SnackBarAlertModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RequestStateModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }

import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { SnackBarAlert } from '@shared/interfaces/snack-bar-alert.interface';

@Component({
  selector: 'app-snack-bar-alert',
  templateUrl: './snack-bar-alert.component.html',
  styleUrls: ['./snack-bar-alert.component.scss']
})
export class SnackBarAlertComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public alertResponse: SnackBarAlert,
    public snackBarRef: MatSnackBarRef<SnackBarAlertComponent>
  ) { }

  public getBackgroundAlert = (): 'var(--error-color)' | 'var(--success-color)' =>
    this.alertResponse?.isSuccess ? 'var(--success-color)' : 'var(--error-color)';
}

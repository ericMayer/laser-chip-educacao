import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarAlert } from '@shared/interfaces/snack-bar-alert.interface';
import { SnackBarAlertComponent } from '@shared/components/snack-bar-alert/snack-bar-alert.component';

/**
 * Abre uma  snack bar customizada de alerta para mensagens de erro ou de sucesso
 *
 * @param snackBar referência do MatSnackBar
 * @param snackBarAlert configuração do que será exibido na snack bar
 */
export function openSnackBarAlert(snackBar: MatSnackBar, snackBarAlert: SnackBarAlert): void {
  snackBar.openFromComponent(SnackBarAlertComponent, {
    data: {
      ...snackBarAlert
    },
    panelClass: 'alert-response-snackbar',
    duration: 3000
  });
}

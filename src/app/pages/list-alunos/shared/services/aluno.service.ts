import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, Subject } from 'rxjs';

import { HttpService } from '@shared/services/http.service';
import { environment } from '@environments/environment.development';
import { Aluno } from '../interfaces/aluno.interface';
import { openSnackBarAlert } from '@shared/utils/alert.utils';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class AlunoService {

  public updateListAlunos$: Subject<void> = new Subject();
  private apiAlunos: string = `${environment.alunos}alunos`;

  constructor(
    private http: HttpService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  public getAlunos = (): Observable<Aluno[]> =>
    this.http.get(this.apiAlunos);


  public createAluno = (aluno: Aluno): Observable<boolean> =>
    this.http.post(this.apiAlunos, aluno);


  public getAlunoById = (idAluno: number): Observable<Aluno> =>
    this.http.get(`${this.apiAlunos}/${idAluno}`);


  public updateAluno = (aluno: Aluno): Observable<boolean> =>
    this.http.put(`${this.apiAlunos}/${aluno?.id}`, aluno);

  public deleteAlunoById = (idAluno: number): Observable<boolean> =>
    this.http.delete(`${this.apiAlunos}/${idAluno}`);

  private executeDeleteAluno(willDeleteUser: boolean, idAluno: number): void {
    if (willDeleteUser && idAluno)
      this.deleteAlunoById(idAluno)
        .subscribe({
          next: () => {
            openSnackBarAlert(this.snackBar, {
              message: 'Aluno excluído com sucesso 🚀!',
              isSuccess: true
            });
            this.updateListAlunos$.next();
          },
          error: () =>
            openSnackBarAlert(this.snackBar, {
              message: 'Não foi possível excluir o aluno 😢, por favor tente novamente.'
            })
        })
  }

  public deleteAluno(idAluno: number): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmação de exclusão',
        subtitle: 'Deseja realmente excluir o aluno? Após exclusão não é possível recuperar o registro.'
      },
      width: '400px'
    })
      .afterClosed()
      .subscribe((willDeleteUser: boolean) =>
        this.executeDeleteAluno(willDeleteUser, idAluno)
      );
  }
}

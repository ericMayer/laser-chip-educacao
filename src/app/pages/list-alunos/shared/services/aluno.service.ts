import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from '@shared/services/http.service';
import { environment } from '@environments/environment.development';
import { Aluno } from '../interfaces/aluno.interface';

@Injectable()
export class AlunoService {


  private apiAlunos: string = `${environment.alunos}alunos`;

  constructor(private http: HttpService) { }

  public getAlunos = (): Observable<Aluno[]> =>
    this.http.get(this.apiAlunos);


  public createAluno = (aluno: Aluno): Observable<boolean> =>
    this.http.post(this.apiAlunos, aluno);


  public getAlunoById = (idAluno: number): Observable<Aluno> =>
    this.http.get(`${this.apiAlunos}/${idAluno}`);


  public updateAluno = (aluno: Aluno): Observable<boolean> =>
    this.http.put(`${this.apiAlunos}/${aluno?.id}`, aluno);
}

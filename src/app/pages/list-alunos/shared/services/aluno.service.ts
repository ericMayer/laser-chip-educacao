import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from '@shared/services/http.service';
import { environment } from '@environments/environment.development';
import { Aluno } from '../interfaces/aluno.interface';

@Injectable()
export class AlunoService {


  private apiAlunos: string = `${environment.alunos}alunos`;

  constructor(private http: HttpService) { }

  public getAlunos(): Observable<Aluno[]> {
    return this.http.get(this.apiAlunos);
  }
}

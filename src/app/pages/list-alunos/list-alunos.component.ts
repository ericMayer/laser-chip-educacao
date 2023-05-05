import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, map } from 'rxjs';

import { AlunoService } from './shared/services/aluno.service';
import { Aluno } from './shared/interfaces/aluno.interface';
import { RequestState } from '@shared/enums/request-state.enum';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent implements OnInit {

  public alunos: Aluno[] = [];
  public filteredAlunos: Aluno[] = [];
  public search: FormControl = new FormControl('');
  public isLoading: boolean = true;
  public requestState: RequestState = RequestState.Loading;
  public isMobile$: Observable<boolean>;

  constructor(
    private alunoService: AlunoService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.setIsMobile();
    this.getAlunos();
    this.searchAlunoByName();
  }

  private setIsMobile(): void {
    this.isMobile$ = this.breakpointObserver.observe('(max-width: 768px)')
      .pipe(map((state: BreakpointState) => state.matches));
  }

  private setRequestStateEmpty(): void {
    this.requestState = this.filteredAlunos?.length ? RequestState.Success : RequestState.Empty;
  }

  public getAlunos(): void {
    this.alunoService.getAlunos()
      .subscribe({
        next: (alunos: Aluno[]) => {
          this.alunos = alunos;
          this.filteredAlunos = alunos;
          this.setRequestStateEmpty();
        },
        error: () => this.requestState = RequestState.Error
      });
  }

  private searchAlunoByName(): void {
    this.search.valueChanges
      .subscribe((text: string) => {
        this.filteredAlunos = this.alunos.filter((aluno: Aluno) =>
          (`${aluno?.nome} ${aluno?.sobrenome}`)?.toLowerCase()?.includes(text?.toLowerCase())
        );
        this.setRequestStateEmpty();
      });
  }

  public showRequestState(): boolean {
    return this.requestState === RequestState.Error || this.requestState === RequestState.Empty;
  }

  public goToPath(path: string): void {
    this.router.navigateByUrl(path);
  }
}

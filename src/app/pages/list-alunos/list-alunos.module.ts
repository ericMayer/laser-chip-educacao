import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlunosRoutingModule } from './list-alunos-routing.module';
import { ListAlunosComponent } from './list-alunos.component';
import { AlunoService } from './shared/services/aluno.service';
import { ListTableComponent } from './list-table/list-table.component';
import { SharedModule } from '@shared/shared.module';
import { ListCardComponent } from './list-card/list-card.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';

@NgModule({
  declarations: [
    ListAlunosComponent,
    ListTableComponent,
    ListCardComponent,
    CreateAlunoComponent
  ],
  imports: [
    CommonModule,
    ListAlunosRoutingModule,
    SharedModule
  ],
  providers: [
    AlunoService
  ]
})
export class ListAlunosModule { }

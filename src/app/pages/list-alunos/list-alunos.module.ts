import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlunosRoutingModule } from './list-alunos-routing.module';
import { ListAlunosComponent } from './list-alunos.component';
import { AlunoService } from './shared/services/aluno.service';
import { ListTableComponent } from './shared/components/list-table/list-table.component';
import { SharedModule } from '@shared/shared.module';
import { ListCardComponent } from './shared/components/list-card/list-card.component';

@NgModule({
  declarations: [
    ListAlunosComponent,
    ListTableComponent,
    ListCardComponent
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

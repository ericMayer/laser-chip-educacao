import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAlunosComponent } from './list-alunos.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: ListAlunosComponent
  },
  {
    path: 'criar-aluno',
    component: CreateAlunoComponent,
    data: { pageTitle: 'Criar aluno' }
  },
  {
    path: 'editar-aluno/:idAluno',
    component: CreateAlunoComponent,
    data: { pageTitle: 'Editar aluno' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAlunosRoutingModule { }

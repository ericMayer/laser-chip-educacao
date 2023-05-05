import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Aluno } from '@pages/list-alunos/shared/interfaces/aluno.interface';
import { Columns } from '@pages/list-alunos/shared/interfaces/columns.interface';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {

  @Input({ required: true }) public alunos: Aluno[];
  @Output() public edit: EventEmitter<number> = new EventEmitter();

  public displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'idade', 'sexo', 'actions'];
  public columns: Columns[] = [
    {
      title: 'ID',
      property: 'id'
    },
    {
      title: 'Nome',
      property: 'nome'
    }, {
      title: 'Sobrenome',
      property: 'sobrenome'
    },
    {
      title: 'Idade',
      property: 'idade'
    },
    {
      title: 'Sexo',
      property: 'sexo'
    }
  ];
}

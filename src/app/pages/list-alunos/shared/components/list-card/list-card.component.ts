import { Component, Input } from '@angular/core';

import { Aluno } from '@pages/list-alunos/shared/interfaces/aluno.interface';
import { Columns } from '@pages/list-alunos/shared/interfaces/columns.interface';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {
  @Input({ required: true }) public alunos: Aluno[];

  public columns: Columns[] = [
    {
      title: 'ID',
      property: 'id'
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

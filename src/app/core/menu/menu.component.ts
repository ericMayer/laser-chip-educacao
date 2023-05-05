import { Component, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs';
import { Menu } from '@shared/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public pageTitle: string;
  public menuIsOpen: boolean;
  public menu: Menu[] = [
    {
      text: 'Alunos',
      route: ''
    },
    {
      text: 'Criar Aluno',
      route: ''
    }
  ]

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router) {
    this.getPageTitle();
  }

  public getPageTitle(): void {
    this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data?.['pageTitle']),
        takeUntilDestroyed()
      )
      .subscribe((pageTitle: string) => this.pageTitle = pageTitle);
  }

  public openMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.sidenav.toggle();
  }
}

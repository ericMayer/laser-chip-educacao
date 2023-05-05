import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlunoComponent } from './create-aluno.component';

describe('CreateAlunoComponent', () => {
  let component: CreateAlunoComponent;
  let fixture: ComponentFixture<CreateAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAlunoComponent]
    });
    fixture = TestBed.createComponent(CreateAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

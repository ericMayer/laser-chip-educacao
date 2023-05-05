import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import Inputmask from 'inputmask';

import { AlunoService } from '../shared/services/aluno.service';
import { openSnackBarAlert } from '@shared/utils/alert.utils';
import { Aluno } from '../shared/interfaces/aluno.interface';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss']
})
export class CreateAlunoComponent implements OnInit, AfterViewInit {

  @Input() public idAluno: number;

  @ViewChild('inputIdade') public inputIdade: ElementRef<HTMLInputElement>;
  @ViewChild('inputNome') public inputNome: ElementRef<HTMLInputElement>;
  @ViewChild('inputSobrenome') public inputSobrenome: ElementRef<HTMLInputElement>;

  public alunoForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.idAluno = this.activatedRoute?.snapshot?.params?.['idAluno'];
  }

  public ngOnInit(): void {
    this.createAlunoForm();
    this.getAlunoById();
  }

  public ngAfterViewInit(): void {
    this.setMasks();
  }

  public createAlunoForm(): void {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("[A-Za-zÀ-ú ]+")]
      )],
      sobrenome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern("[A-Za-zÀ-ú ]+")]
      )],
      idade: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
      sexo: ['', Validators.required],
      id: ['']
    });
  }

  private getAlunoById(): void {
    if (this.idAluno)
      this.alunoService.getAlunoById(this.idAluno)
        .subscribe({
          next: (aluno: Aluno) => this.alunoForm.setValue(aluno)
        });
  }

  private setMasks(): void {
    Inputmask({
      'mask': '9{ 1, 3}'
    }).mask(this.inputIdade?.nativeElement);
    Inputmask({ 'regex': '^[a-zA-Z ]*$', clearMaskOnLostFocus: false }).mask(this.inputNome?.nativeElement);
    Inputmask({ 'regex': '^[a-zA-Z ]*$', clearMaskOnLostFocus: false }).mask(this.inputSobrenome?.nativeElement);
  }

  public get getValidForm(): boolean {
    return this.alunoForm?.valid && !this.isLoading;
  }

  public create(): void {
    if (this.getValidForm && !this.idAluno)
      this.createAluno();
    else if (this.getValidForm && this.idAluno)
      this.updateAluno();
  }

  public createAluno(): void {
    this.isLoading = true;
    this.alunoService.createAluno(this.alunoForm?.value)
      .subscribe({
        next: () =>
          this.showMessage('Aluno cadastrado com sucesso 🚀!', true),
        error: () =>
          this.showMessage('Não foi possível cadastrar o aluno 😢, por favor tente novamente.')
      });
  }

  private showMessage(message: string, isSuccess?: boolean): void {
    this.isLoading = false;

    openSnackBarAlert(this.snackBar, {
      message,
      isSuccess
    });

    if (isSuccess) this.router.navigateByUrl('');
  }

  public updateAluno(): void {
    this.isLoading = true;

    this.alunoService.updateAluno(this.alunoForm?.value)
      .subscribe({
        next: () =>
          this.showMessage('Aluno atualizado com sucesso 🚀!', true),
        error: () =>
          this.showMessage('Não foi possível atualizar o aluno 😢, por favor tente novamente.')
      });
  }

  public showErrorByField = (field: string, error: string): boolean =>
    this.alunoForm.get(field)?.hasError?.(error);

  public getTextButton = (): string =>
    this.idAluno ? 'Atualizar' : 'Cadastrar'
}

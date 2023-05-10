import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import PGConstant from 'src/app/modules/shared/constants';
import { AuthService } from 'src/app/modules/_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-do-not-sell',
  templateUrl: './do-not-sell.component.html',
})
export class DoNotSellComponent implements OnInit {
  public dontSellForm!: FormGroup;
  public states = PGConstant.STATES;
  readonly PGConstant: any = PGConstant;
  constructor(public fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.initDoNotSellForm();
  }

  private initDoNotSellForm() {
    this.dontSellForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.pattern(this.PGConstant.EMAIL_PATTERN),
          Validators.required,
        ]),
      ],
      address: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
    });
  }

  public async onSubmit() {
    if (this.dontSellForm.invalid) {
      return this.dontSellForm.markAllAsTouched();
    }
    try {
      const result = await this.auth.saveDoNotSell(this.dontSellForm.value);
      if (result.statusCode === 100) {
        Swal.fire({
          icon: 'success',
          text: result.statusMessage,
        });
        this.dontSellForm.reset();
      } else {
        this.errorAlert(result.statusMessage);
      }
    } catch (e) {
      this.errorAlert(this.getErrorMessage(e));
    }
  }

  private errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  get f() {
    return this.dontSellForm.controls;
  }
}

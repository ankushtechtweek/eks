import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import PGConstant from '../../shared/constants';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  readonly PGConstant = PGConstant;
  forgotForm!: FormGroup;
  submitted = false;
  emailNotFound = false;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.initForgotForm();
  }

  initForgotForm() {
    this.forgotForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.pattern(this.PGConstant.EMAIL_PATTERN),
          Validators.required,
        ]),
      ],
    });
  }

  public async onSubmit(form: FormGroup) {
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    try {
      const result = await this.auth.forgotPassword(form.value.email);
      if (result.result === 'Accepted') {
        this.submitted = true;
      } else {
        this.emailNotFound = true;
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  get f() {
    return this.forgotForm.controls;
  }
}

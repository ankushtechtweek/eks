import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import Swal from 'sweetalert2';
import { ConfirmValidator } from './confirm-validators';
import PGConstant from '../../shared/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  readonly PGConstant = PGConstant;
  resetForm!: FormGroup;
  returnUrl: string = '/';
  publicId!: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
    // redirect to home if already logged in
    if (this.auth.currentTokenValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initResetForm();
  }

  private initResetForm() {
    this.resetForm = this.fb.group(
      {
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(this.PGConstant.PASSWORD_PATTERN),
          ]),
        ],
        confirmPassword: ['', Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmValidator('password', 'confirmPassword'),
      } as AbstractControlOptions
    );
  }

  public async onSubmit(form: FormGroup) {
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    try {
      const payload = {
        publicid: this.route.snapshot.paramMap.get('id'),
        password: form.value.password,
      };
      const result = await this.auth.resetPassword(payload);
      if (result.statusCode === 100) {
        this.router.navigate(['/auth/login']);
        Swal.fire({
          icon: 'success',
          text: result.statusMessage,
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: result.statusMessage,
        });
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
    return this.resetForm.controls;
  }
}

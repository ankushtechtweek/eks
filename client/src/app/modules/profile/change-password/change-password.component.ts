import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ConfirmValidator } from '../../auth/reset-password/confirm-validators';
import PGConstant from '../../shared/constants';
import { ApplicationService } from '../../shared/services/application/application.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {
  readonly PGConstant = PGConstant;
  passwordForm!: FormGroup;
  constructor(
    private currentUser: CurrentUserService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private appService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.initPasswordForm();
  }

  private async initPasswordForm() {
    const user = await this.currentUser.currentUserValue;
    this.passwordForm = this.fb.group(
      {
        userId: [user.userId],
        oldPassword: ['', Validators.compose([Validators.required])],
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

  public async updatePassword() {
    if (this.passwordForm.invalid) {
      return this.passwordForm.markAllAsTouched();
    }
    if (this.f['oldPassword'].value === this.f['password'].value) {
      return this.errorMessage(
        'New password cannot be the same as the old password'
      );
    }
    try {
      const result = await this.appService.changePassword(
        this.f['oldPassword'].value,
        this.f['password'].value
      );
      if (result.statusCode === 100) {
        this.currentUser.currentUserValue['password'] =
          result.result.newPassword;
        this.currentUser.currentUserSubject.next(
          this.currentUser.currentUserValue
        );
        Swal.fire({
          icon: 'success',
          text: result.statusMessage,
        });
        this.activeModal.close('Close click');
      } else {
        this.errorMessage(result.statusMessage);
      }
    } catch (e) {
      this.errorMessage(this.getErrorMessage(e));
    }
  }

  private errorMessage(error: string) {
    Swal.fire({
      icon: 'error',
      text: error,
    });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  get f() {
    return this.passwordForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../shared/services/application/application.service';
import { AuthService } from '../../_services/auth.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  public CountryISO = CountryISO;
  public SearchCountryField = SearchCountryField;
  constructor(
    public activeModal: NgbActiveModal,
    public currentUser: CurrentUserService,
    public auth: AuthService,
    private appService: ApplicationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initUserForm();
  }

  private async initUserForm() {
    const user = await this.currentUser.currentUserValue;
    this.userForm = this.fb.group({
      userId: [user.userId],
      firstName: [user.firstName, Validators.compose([Validators.required])],
      lastName: [user.lastName, Validators.compose([Validators.required])],
      email: [user.email],
      userName: [user.email],
      password: [user.password],
      phone: [user.phone, Validators.compose([Validators.required])],
      isdemo: [0, Validators.compose([Validators.required])],
      clientID: [1, Validators.compose([Validators.required])],
      roleID: [3, Validators.compose([Validators.required])],
    });
  }

  public async updateUser() {
    if (this.userForm.invalid) {
      return this.userForm.markAllAsTouched();
    }
    try {
      this.activeModal.close('Close click');
      this.userForm.patchValue({
        phone: this.userForm.value.phone.nationalNumber,
      });
      const result = await this.appService.updateUserProfile(
        this.userForm.value
      );
      const appUserSubscriptions =
        this.currentUser.currentUserValue.appUserSubscriptions;
      result.result['appUserSubscriptions'] = appUserSubscriptions;
      this.currentUser.currentUserSubject.next(result.result);
      Swal.fire({
        icon: 'success',
        text: result.statusMessage,
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  public focusOut() {
    if (this.f['phone'].invalid) return;
    this.userForm.patchValue({
      phone: this.f['phone'].value.nationalNumber,
    });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  get f() {
    return this.userForm.controls;
  }
}

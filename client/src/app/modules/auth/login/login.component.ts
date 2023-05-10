import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { AuthService } from '../../_services/auth.service';
import { LoginResponseModel } from './_models/login.response';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../shared/services/application/application.service';
import { CurrentUserService } from '../../_services/current-user.service';
import PGConstant from '../../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  readonly PGConstant = PGConstant;
  loginForm!: FormGroup;
  returnUrl: string = '/';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private ls: LocalStorageService,
    private appService: ApplicationService,
    private currentUser: CurrentUserService
  ) {
    // redirect to home if already logged in
    if (this.auth.currentTokenValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.pattern(this.PGConstant.EMAIL_PATTERN),
          Validators.required,
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
      grant_type: ['password', Validators.compose([Validators.required])],
      client_id: ['propertyscoutapiclient', Validators.compose([Validators.required])],
      client_secret: ['secret', Validators.compose([Validators.required])],
      scope: ['propertyscoutapi', Validators.compose([Validators.required])],
    });
  }

  public async onSubmit(form: FormGroup) {
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    try {
      const token: LoginResponseModel = await this.auth.login(form.value);
      this.auth.tokenSubject.next(token);
      const user = await this.appService.getUserDetails();
      if (user.data.result.role.roleId === 3) {
        this.currentUser.currentUserSubject.next(user.data.result);
        this.ls.set('token', token);
        this.router.navigate([this.returnUrl]);
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Invalid Credentials',
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
    return this.loginForm.controls;
  }
}

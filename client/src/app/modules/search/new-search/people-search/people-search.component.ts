import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import PGConstant from 'src/app/modules/shared/constants';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
})
export class PeopleSearchComponent implements OnInit {
  public peopleForm!: FormGroup;
  public states = PGConstant.STATES;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private currentUser: CurrentUserService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initPeopleForm();
  }

  private initPeopleForm() {
    this.peopleForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
    });
  }

  public async onSubmit(form: FormGroup) {
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    const propertySearchCount = this.currentUser.searchCount;
    if (!propertySearchCount)
      return this.commonService.searchConfirmation(
        this.currentUser.subscriptionType
      );
    this.router.navigate(['/search/view-people'], { queryParams: form.value });
  }

  get f() {
    return this.peopleForm.controls;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as _ from 'underscore';
import { ApplicationService } from '../../shared/services/application/application.service';
import { SharedService } from '../../shared/services/shared/shared.service';

@Component({
  selector: 'app-view-people',
  templateUrl: './view-people.component.html',
})
export class ViewPeopleComponent {
  public persons: any = [];
  public model = {
    name: '',
    city: '',
    state: '',
  };
  public noResultFound = false;
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router,
    private ss: SharedService
  ) {
    const params: any = this.route.snapshot.queryParamMap;
    this.model.name = params.get('name');
    this.model.city = params.get('city');
    this.model.state = params.get('state');
    this.getPeopleSearches(
      params.get('name'),
      params.get('city'),
      params.get('state')
    );
  }

  private async getPeopleSearches(name: string, city: string, state: string) {
    try {
      const result = await this.appService.peopleSearch(name, city, state);
      if (result.statusCode === 100) {
        //bind records
        this.persons = result.result.person;
        this.noResultFound =
          result.result.person && result.result.person.length ? true : false;
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

  public uniqArray(sourceArray: any) {
    return _.uniq(sourceArray, (x) => x.city);
  }

  public viewProfile(person: any) {
    this.ss.currentOwner.next(person);
    this.router.navigate(['/search/view-owner'], { queryParams: this.model });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}

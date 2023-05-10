import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-property-ownership',
  templateUrl: './property-ownership.component.html',
})
export class PropertyOwnershipComponent {
  constructor(public ss: SharedService, private router: Router) {}

  public getGoogleImage(address: any) {
    const url = `https://maps.googleapis.com/maps/api/streetview?size=350x250&location=${address?.street},${address?.city},${address?.state?.abbreviation},${address?.zipCode}&key=${environment.GOOGLE_MAP_API_KEY}`;
    return url;
  }

  public onSubmit(name: string) {
    const model = {
      name,
      city: this.ss.propertRecord.PropertyAddress.City,
      state: this.ss.propertRecord.PropertyAddress.State,
    };
    this.router.navigate(['/search/view-people'], { queryParams: model });
  }
}

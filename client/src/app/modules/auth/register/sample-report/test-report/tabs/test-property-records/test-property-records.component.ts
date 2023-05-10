import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-property-records',
  templateUrl: './test-property-records.component.html',
  styleUrls: ['./test-property-records.component.scss'],
})
export class TestPropertyRecordsComponent {
  @Input() address!: any;
  @Input() positions: any = {
    lng: 0,
    lat: 0,
  };
  public googleMapType: any = {
    roadMap: 'roadmap',
    hybrid: 'hybrid',
    satellite: 'satellite',
    terrain: 'terrain',
  };
  public fields = {
    'PROPERTY DETAILS': [
      'FIPS CODE',
      'APN',
      'LOT SIZE (ACRES)',
      'LOT SIZE (SQ. FT.)',
      'YEAR BUILT',
      'LIVING AREA (SQ. FT.)',
      'BEDROOMS',
      'BATHROOMS',
      'LEGAL DESCRIPTION',
    ],
    'LAST SALE': ['DATE', 'SALE PRICE', 'RECORDED MORTGAGE'],
    'TAX INFORMATION': [
      'YEAR ASSESSED',
      'ASSESSED VALUE',
      'TAX AMOUNT',
      'LOCAL ZONING CODE',
    ],
    'ESTIMATED PROPERTY VALUE': [
      'ESTIMATED VALUE',
      'ESTIMATED MIN VALUE',
      'ESTIMATED MAX VALUE',
      'VALUATION DATE',
      'CONFIDENCE SCORE',
    ],
  };

  public getGoogleImage(address: any) {
    const url = `https://maps.googleapis.com/maps/api/streetview?size=350x250&location=${address?.address},${address?.city},${address?.state},${address?.zip}&key=${environment.GOOGLE_MAP_API_KEY}`;
    return url;
  }
}

import { MapsAPILoader } from '@agm/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-test-maps-photos',
  templateUrl: './test-maps-photos.component.html',
  styleUrls: ['./test-maps-photos.component.scss'],
})
export class TestMapsPhotosComponent implements OnInit {
  private mapView!: google.maps.Map<HTMLElement>;
  public googleMapType: any = {
    roadMap: 'roadmap',
    hybrid: 'hybrid',
    satellite: 'satellite',
    terrain: 'terrain',
  };
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.streetView(0, 0);
    this.initMapView(0, 0);
  }

  private streetView(lat: number, lng: number) {
    this.mapsAPILoader.load().then(() => {
      let streetPano = document.getElementById(
        'streetview-pano'
      ) as HTMLFormElement;
      let options = {
        position: { lat, lng },
        pov: {
          heading: 34,
          pitch: 10,
        },
      };
      let g = new google.maps.StreetViewPanorama(streetPano, options);
      return g;
    });
  }

  private initMapView(lat: number, lng: number) {
    this.mapsAPILoader.load().then(() => {
      const mapProps = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 19,
        draggable: false,
        clickable: false,
      };
      const map = document.getElementById('roadMap') as HTMLFormElement;
      this.mapView = new google.maps.Map(map, mapProps);
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
      });
      marker.setMap(this.mapView);
      this.cd.detectChanges();
    });
  }
}

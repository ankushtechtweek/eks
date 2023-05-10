import { MapsAPILoader } from '@agm/core';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { UpgradeComponent } from 'src/app/modules/upgrade/upgrade.component';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
import { PorpertyRecord } from '../../_models/property-record.model';
declare let google: any;

@Component({
  selector: 'app-maps-photos',
  templateUrl: './maps-photos.component.html',
  styleUrls: ['./maps-photos.component.scss'],
})
export class MapsPhotosComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  public googleMapType: any = {
    roadMap: 'roadmap',
    hybrid: 'hybrid',
    satellite: 'satellite',
    terrain: 'terrain',
  };
  private colorMap: any = {
    hybrid: '#F9F605',
    roadmap: '#000000',
  };
  private coordinates!: Array<any>;
  private mapView!: google.maps.Map<HTMLElement>;
  private subscription!: Subscription;
  public parcelMapSwitch!: boolean;
  private imageMapType: any;
  constructor(
    public ss: SharedService,
    private mapsAPILoader: MapsAPILoader,
    private cd: ChangeDetectorRef,
    private appService: ApplicationService,
    private currenUser: CurrentUserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.subscription = this.ss.propertyRecord.subscribe(
      (data: PorpertyRecord) => {
        if (Object.keys(data).length > 1) {
          const lat = Number(data.PropertyAddress.Latitude);
          const lng = Number(data.PropertyAddress.Longitude);
          this.streetView(lat, lng);
          this.initMapView(lat, lng);
        }
      }
    );
  }

  private streetView(lat: number, lng: number) {
    this.mapsAPILoader.load().then(() => {
      let pano = document.getElementById('streetview-pano') as HTMLFormElement;
      let options = {
        position: { lat, lng },
        pov: {
          heading: 34,
          pitch: 10,
        },
      };
      let g = new google.maps.StreetViewPanorama(pano, options);
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
      this.mapTypeIdChange();
      this.cd.detectChanges();
    });
  }

  private mapTypeIdChange() {
    this.mapView.addListener('maptypeid_changed', () => {
      if (!this.parcelMapSwitch) {
        return;
      }
      this.imageMapType.setMap(null);
      this.setupParcels(this.colorMap[this.mapView.getMapTypeId()]);
    });
  }

  private setupParcels(strokeColor: string) {
    if (!this.coordinates.length) {
      return;
    }
    const paths = this.ss.coordinates
      .getValue()
      .map((c: any) => ({ lat: c[1], lng: c[0] }));
    this.mapsAPILoader.load().then(() => {
      this.imageMapType = new google.maps.Polygon({
        paths: paths,
        strokeColor: strokeColor,
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillOpacity: 0,
      });
      this.imageMapType.setMap(this.mapView);
    });
  }

  async drawPolygon(isSwitch: boolean) {
    const lat = Number(this.ss.propertRecord.PropertyAddress.Latitude);
    const lng = Number(this.ss.propertRecord.PropertyAddress.Longitude);
    if (!isSwitch) {
      return this.initMapView(lat, lng);
    }
    if (this.ss.coordinates.getValue().length) {
      this.coordinates = this.ss.coordinates.getValue();
      this.setupParcels(this.colorMap.roadMap);
    } else {
      try {
        const result = await this.appService.getCoordinates(lat, lng);
        const data = result.result ? JSON.parse(result.result)[0] : [];
        this.ss.coordinates.next(data);
        this.coordinates = data;
        this.setupParcels(this.colorMap.roadMap);
      } catch (e) {
        Swal.fire({
          icon: 'error',
          text: this.getErrorMessage(e),
        });
      }
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  public onBeforeChange: Observable<boolean> = new Observable((observer) => {
    if (this.isPermitted) {
      observer.next(true);
    } else {
      const modalRef = this.modalService.open(UpgradeComponent, { size: 'xl' });
      modalRef.componentInstance.modal = true;
    }
  });

  private get isPermitted() {
    return PGConstant.PERMITTED_PLANS.includes(
      this.currenUser.subscriptionType
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.ss.coordinates.next([]);
  }
}

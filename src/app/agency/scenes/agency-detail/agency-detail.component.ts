import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { IAgency } from '../../interfaces/agency.interface';
import { AgencyService } from '../../agency.service';
import swal from 'sweetalert2';
declare var google;
interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
  public agencyForm: FormGroup;
  public agencyEntity: IAgency;
  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328
      },
      title: 'Parque Simón Bolivar'
    }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _service: AgencyService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      const listAgency: IAgency[] = JSON.parse(localStorage.getItem('agency'));
      this.agencyEntity = _.find(listAgency, ['id', id]);
      const markerAgency = {
        position: {
          lat: +this.agencyEntity.lat,
          lng: +this.agencyEntity.lon
        },
        title: this.agencyEntity.agencia
      };
      this.markers.push(markerAgency);
      this._loadForm();
      this.loadMap();
    });
  }

  public loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: this.agencyEntity.lat, lng: this.agencyEntity.lon };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  // prettier-ignore
  public _loadForm(): void {
    this.agencyForm = new FormGroup({
      agency_name: new FormControl(this.agencyEntity.agencia, Validators.required),
      district: new FormControl(this.agencyEntity.distrito, Validators.required),
      province: new FormControl(this.agencyEntity.provincia, Validators.required),
      dep: new FormControl(this.agencyEntity.departamento, Validators.required),
      address: new FormControl(this.agencyEntity.direccion, Validators.required)
    });
  }

  public back(): void {
    this.router.navigate(['']);
  }
  // prettier-ignore
  public updateAgency(): void {
    const response = this._service.updateAgency(this._getBody(), +this.agencyEntity.id);
    if (response) {
      swal('Actualización exitosa', 'Agencia actualizada correctamente!', 'success');
    }
  }

  public _getBody(): IAgency {
    return {
      agencia: this.agencyForm.get('agency_name').value,
      distrito: this.agencyForm.get('district').value,
      provincia: this.agencyForm.get('province').value,
      departamento: this.agencyForm.get('dep').value,
      direccion: this.agencyForm.get('address').value
    };
  }

  get agencyName() {
    return this.agencyForm.get('agency_name');
  }

  get agencyDistrict() {
    return this.agencyForm.get('district');
  }

  get agencyProvince() {
    return this.agencyForm.get('province');
  }

  get agencyDep() {
    return this.agencyForm.get('dep');
  }

  get agencyAddress() {
    return this.agencyForm.get('address');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
/**
 * Const
 */
import { environment } from './const/const';
import { IAgency } from './interfaces/agency.interface';

@Injectable()
export class AgencyService {
  private urlEndPoint = environment.api;

  constructor(private http: HttpClient) {}

  getAllServicesType(): Observable<any> {
    return this.http.get(this.urlEndPoint + '/api/agency');
  }

  updateAgency(agency: IAgency, id: number): boolean {
    const listAgency: IAgency[] = JSON.parse(localStorage.getItem('agency'));
    _.map(listAgency, item => {
      if (item.id === id) {
        item.agencia = agency.agencia;
        item.distrito = agency.distrito;
        item.provincia = agency.provincia;
        item.departamento = agency.departamento;
        item.direccion = agency.direccion;
      }
      return item;
    });
    localStorage.setItem('agency', JSON.stringify(listAgency));
    return true;
  }
}

import { Component, OnInit } from '@angular/core';
/**
 * Services
 */
import { AgencyService } from '../../agency.service';
/**
 * Interfaces
 */
import { IAgency } from '../../interfaces/agency.interface';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {
  public data: IAgency[];
  constructor(private _service: AgencyService) {}

  ngOnInit() {
    if (localStorage.getItem('agency') === null) {
      this._service.getAllServicesType().subscribe((data: IAgency[]) => {
        this.data = data;
        localStorage.setItem('agency', JSON.stringify(this.data));
      });
    } else {
      this.data = JSON.parse(localStorage.getItem('agency'));
    }
  }
}

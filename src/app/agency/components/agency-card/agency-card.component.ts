import { Component, OnInit, Input } from '@angular/core';
/**
 * Interfaces
 */
import { IAgency } from '../../interfaces/agency.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent implements OnInit {
  @Input() item: IAgency;
  constructor(private router: Router) {}

  ngOnInit() {}

  openDetailView(id: number): void {
    this.router.navigate(['agency', id]);
  }
}

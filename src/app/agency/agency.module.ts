import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgencyRoutingModule } from './agency-routing.module';
/**
 * Components
 */
import { BaseComponent } from './scenes/base/base.component';
import { AgencyListComponent } from './scenes/agency-list/agency-list.component';
import { AgencyDetailComponent } from './scenes/agency-detail/agency-detail.component';
import { AgencyCardComponent } from './components/agency-card/agency-card.component';
/**
 * Services
 */
import { AgencyService } from './agency.service';

@NgModule({
  declarations: [
    BaseComponent,
    AgencyListComponent,
    AgencyDetailComponent,
    AgencyCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgencyRoutingModule
  ],
  exports: [],
  providers: [AgencyService]
})
export class AgencyModule {}

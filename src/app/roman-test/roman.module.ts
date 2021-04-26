import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RomanRoutingModule } from './roman-routing.module';
/**
 * Components
 */
import { BaseComponent } from './scenes/base/base.component';
import { RomanTestComponent } from './scenes/roman-test/roman-test.component';
/**
 * Services
 */
// import { AgencyService } from './agency.service';

@NgModule({
  declarations: [
    BaseComponent,
    RomanTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RomanRoutingModule
  ],
  exports: [],
  providers: []
})
export class RomanModule {}

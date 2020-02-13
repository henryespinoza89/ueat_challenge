import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * Componentes
 */
import { BaseComponent } from './scenes/base/base.component';
import { AgencyListComponent } from './scenes/agency-list/agency-list.component';
import { AgencyDetailComponent } from './scenes/agency-detail/agency-detail.component';

const routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: AgencyListComponent
      },
      {
        path: 'agency/:id',
        component: AgencyDetailComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule {}

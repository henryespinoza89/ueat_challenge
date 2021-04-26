import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * Componentes
 */
import { BaseComponent } from './scenes/base/base.component';
import { RomanTestComponent } from './scenes/roman-test/roman-test.component';

const routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: RomanTestComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomanRoutingModule {}

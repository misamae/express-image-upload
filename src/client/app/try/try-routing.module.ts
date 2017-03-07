import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TryComponent} from './try.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'try', component: TryComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TryRoutingModule { }

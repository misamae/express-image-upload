import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FileSelectDirective } from 'ng2-file-upload';
import {TryComponent} from './try.component';
import {TryRoutingModule} from './try-routing.module';

@NgModule({
  imports: [CommonModule, TryRoutingModule, SharedModule],
  declarations: [TryComponent, FileSelectDirective],
  exports: [TryComponent],
})
export class TryModule { }

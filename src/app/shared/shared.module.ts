import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FixedModalComponent } from './components/fixed-modal/fixed-modal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavBarComponent,
    FixedModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent,
    FixedModalComponent
  ]
})
export class SharedModule { }

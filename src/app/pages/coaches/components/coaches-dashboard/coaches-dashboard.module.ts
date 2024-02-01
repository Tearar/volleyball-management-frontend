import {NgModule} from '@angular/core';
import {CoachesDashboardComponent} from "./coaches-dashboard.component";
import {MaterialModule} from "../../../../shared/material.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CoachesDashboardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [CoachesDashboardComponent]
})
export class CoachesDashboardModule {
}

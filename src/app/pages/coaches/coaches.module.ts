import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CoachesRoutingModule} from "./coaches-routing.module";
import {CoachesDashboardModule} from "./components/coaches-dashboard/coaches-dashboard.module";
import {MaterialModule} from "../../shared/material.module";
import {CoachesComponent} from "./coaches.component";

@NgModule({
  declarations: [
    CoachesComponent
    ],
  imports: [
    CommonModule,
    CoachesRoutingModule,
    CoachesDashboardModule,
    MaterialModule
  ],
  exports: [CoachesComponent]
})
export class CoachesModule {
}

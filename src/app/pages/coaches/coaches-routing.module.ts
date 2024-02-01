import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoachesDashboardComponent} from "./components/coaches-dashboard/coaches-dashboard.component";

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: CoachesDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealsComponent } from './deals/deals.component';
import { DetailsComponent } from './details/details.component';
import { RelationshipincomeComponent } from './relationshipincome/relationshipincome.component';

const routes: Routes = [
  {path: '', redirectTo: 'relationship-income', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'relationship-income', component: RelationshipincomeComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'access', component: AccessComponent},
  {path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

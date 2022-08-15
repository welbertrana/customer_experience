import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RelationshipincomeComponent } from './relationshipincome/relationshipincome.component';
import { DealsComponent } from './deals/deals.component';
import { AccessComponent } from './access/access.component';
import { DetailsComponent } from './details/details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EntityFilterComponent } from './entity-filter/entity-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RelationshipincomeComponent,
    DealsComponent,
    AccessComponent,
    DetailsComponent,
    NavigationComponent,
    EntityFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

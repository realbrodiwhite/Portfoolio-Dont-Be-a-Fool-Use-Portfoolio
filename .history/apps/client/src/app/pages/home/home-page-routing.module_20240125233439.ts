import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHoldingsComponent } from '@portfoolio/client/components/home-holdings/home-holdings.component';
import { HomeMarketComponent } from '@portfoolio/client/components/home-market/home-market.component';
import { HomeOverviewComponent } from '@portfoolio/client/components/home-overview/home-overview.component';
import { HomeSummaryComponent } from '@portfoolio/client/components/home-summary/home-summary.component';
import { AuthGuard } from '@portfoolio/client/core/auth.guard';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeOverviewComponent
      },
      {
        path: 'holdings',
        component: HomeHoldingsComponent,
        title: $localize`Holdings`
      },
      {
        path: 'summary',
        component: HomeSummaryComponent,
        title: $localize`Summary`
      },
      {
        path: 'market',
        component: HomeMarketComponent,
        title: $localize`Markets`
      }
    ],
    component: HomePageComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJobsComponent } from '@portfoolio/client/components/admin-jobs/admin-jobs.component';
import { AdminMarketDataComponent } from '@portfoolio/client/components/admin-market-data/admin-market-data.component';
import { AdminOverviewComponent } from '@portfoolio/client/components/admin-overview/admin-overview.component';
import { AdminSettingsComponent } from '@portfoolio/client/components/admin-settings/admin-settings.component';
import { AdminUsersComponent } from '@portfoolio/client/components/admin-users/admin-users.component';
import { AuthGuard } from '@portfoolio/client/core/auth.guard';

import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminOverviewComponent,
        title: $localize`Admin Control`
      },
      {
        path: 'jobs',
        component: AdminJobsComponent,
        title: $localize`Job Queue`
      },
      {
        path: 'market-data',
        component: AdminMarketDataComponent,
        title: $localize`Market Data`
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
        title: $localize`Settings`
      },
      {
        path: 'users',
        component: AdminUsersComponent,
        title: $localize`Users`
      }
    ],
    component: AdminPageComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}

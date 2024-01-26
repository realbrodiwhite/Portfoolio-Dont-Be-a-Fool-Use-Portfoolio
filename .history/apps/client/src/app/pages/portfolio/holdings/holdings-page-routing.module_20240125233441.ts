import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@portfoolio/client/core/auth.guard';

import { HoldingsPageComponent } from './holdings-page.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    component: HoldingsPageComponent,
    path: '',
    title: $localize`Holdings`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoldingsPageRoutingModule {}

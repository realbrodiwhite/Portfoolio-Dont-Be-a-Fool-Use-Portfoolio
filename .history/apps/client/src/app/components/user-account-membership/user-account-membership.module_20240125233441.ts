import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GfMembershipCardModule } from '@portfoolio/ui/membership-card';
import { GfPremiumIndicatorModule } from '@portfoolio/ui/premium-indicator';
import { GfValueModule } from '@portfoolio/ui/value';

import { UserAccountMembershipComponent } from './user-account-membership.component';

@NgModule({
  declarations: [UserAccountMembershipComponent],
  exports: [UserAccountMembershipComponent],
  imports: [
    CommonModule,
    GfMembershipCardModule,
    GfPremiumIndicatorModule,
    GfValueModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class GfUserAccountMembershipModule {}

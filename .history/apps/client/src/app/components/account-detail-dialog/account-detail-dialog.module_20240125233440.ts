import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { GfDialogFooterModule } from '@portfoolio/client/components/dialog-footer/dialog-footer.module';
import { GfDialogHeaderModule } from '@portfoolio/client/components/dialog-header/dialog-header.module';
import { GfHoldingsTableModule } from '@portfoolio/ui/holdings-table/holdings-table.module';
import { GfInvestmentChartModule } from '@portfoolio/client/components/investment-chart/investment-chart.module';
import { GfAccountBalancesModule } from '@portfoolio/ui/account-balances/account-balances.module';
import { GfActivitiesTableLazyModule } from '@portfoolio/ui/activities-table-lazy/activities-table-lazy.module';
import { GfActivitiesTableModule } from '@portfoolio/ui/activities-table/activities-table.module';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AccountDetailDialog } from './account-detail-dialog.component';

@NgModule({
  declarations: [AccountDetailDialog],
  imports: [
    CommonModule,
    GfAccountBalancesModule,
    GfActivitiesTableModule,
    GfActivitiesTableLazyModule,
    GfDialogFooterModule,
    GfDialogHeaderModule,
    GfHoldingsTableModule,
    GfInvestmentChartModule,
    GfValueModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfAccountDetailDialogModule {}

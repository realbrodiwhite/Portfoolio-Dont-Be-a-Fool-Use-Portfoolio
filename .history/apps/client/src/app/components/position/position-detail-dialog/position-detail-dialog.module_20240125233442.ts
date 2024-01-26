import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { GfDialogFooterModule } from '@portfoolio/client/components/dialog-footer/dialog-footer.module';
import { GfDialogHeaderModule } from '@portfoolio/client/components/dialog-header/dialog-header.module';
import { GfActivitiesTableLazyModule } from '@portfoolio/ui/activities-table-lazy/activities-table-lazy.module';
import { GfActivitiesTableModule } from '@portfoolio/ui/activities-table/activities-table.module';
import { GfDataProviderCreditsModule } from '@portfoolio/ui/data-provider-credits/data-provider-credits.module';
import { GfLineChartModule } from '@portfoolio/ui/line-chart/line-chart.module';
import { GfPortfolioProportionChartModule } from '@portfoolio/ui/portfolio-proportion-chart/portfolio-proportion-chart.module';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { PositionDetailDialog } from './position-detail-dialog.component';

@NgModule({
  declarations: [PositionDetailDialog],
  imports: [
    CommonModule,
    GfActivitiesTableModule,
    GfActivitiesTableLazyModule,
    GfDataProviderCreditsModule,
    GfDialogFooterModule,
    GfDialogHeaderModule,
    GfLineChartModule,
    GfPortfolioProportionChartModule,
    GfValueModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfPositionDetailDialogModule {}

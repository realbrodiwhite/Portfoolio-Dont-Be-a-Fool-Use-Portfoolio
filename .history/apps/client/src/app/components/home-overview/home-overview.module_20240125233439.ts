import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GfPortfolioPerformanceModule } from '@portfoolio/client/components/portfolio-performance/portfolio-performance.module';
import { GfToggleModule } from '@portfoolio/client/components/toggle/toggle.module';
import { GfLineChartModule } from '@portfoolio/ui/line-chart/line-chart.module';
import { GfNoTransactionsInfoModule } from '@portfoolio/ui/no-transactions-info';

import { HomeOverviewComponent } from './home-overview.component';

@NgModule({
  declarations: [HomeOverviewComponent],
  imports: [
    CommonModule,
    GfLineChartModule,
    GfNoTransactionsInfoModule,
    GfPortfolioPerformanceModule,
    GfToggleModule,
    MatButtonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfHomeOverviewModule {}

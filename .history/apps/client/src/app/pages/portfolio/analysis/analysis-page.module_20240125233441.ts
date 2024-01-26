import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GfBenchmarkComparatorModule } from '@portfoolio/client/components/benchmark-comparator/benchmark-comparator.module';
import { GfInvestmentChartModule } from '@portfoolio/client/components/investment-chart/investment-chart.module';
import { GfToggleModule } from '@portfoolio/client/components/toggle/toggle.module';
import { GfActivitiesFilterModule } from '@portfoolio/ui/activities-filter/activities-filter.module';
import { GfPremiumIndicatorModule } from '@portfoolio/ui/premium-indicator';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AnalysisPageRoutingModule } from './analysis-page-routing.module';
import { AnalysisPageComponent } from './analysis-page.component';

@NgModule({
  declarations: [AnalysisPageComponent],
  imports: [
    AnalysisPageRoutingModule,
    CommonModule,
    GfActivitiesFilterModule,
    GfBenchmarkComparatorModule,
    GfInvestmentChartModule,
    GfPremiumIndicatorModule,
    GfToggleModule,
    GfValueModule,
    MatCardModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalysisPageModule {}

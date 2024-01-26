import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GfWorldMapChartModule } from '@portfoolio/client/components/world-map-chart/world-map-chart.module';
import { GfActivitiesFilterModule } from '@portfoolio/ui/activities-filter/activities-filter.module';
import { GfPortfolioProportionChartModule } from '@portfoolio/ui/portfolio-proportion-chart/portfolio-proportion-chart.module';
import { GfPremiumIndicatorModule } from '@portfoolio/ui/premium-indicator';
import { GfValueModule } from '@portfoolio/ui/value';

import { AllocationsPageRoutingModule } from './allocations-page-routing.module';
import { AllocationsPageComponent } from './allocations-page.component';

@NgModule({
  declarations: [AllocationsPageComponent],
  imports: [
    AllocationsPageRoutingModule,
    CommonModule,
    GfActivitiesFilterModule,
    GfPortfolioProportionChartModule,
    GfPremiumIndicatorModule,
    GfWorldMapChartModule,
    GfValueModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AllocationsPageModule {}

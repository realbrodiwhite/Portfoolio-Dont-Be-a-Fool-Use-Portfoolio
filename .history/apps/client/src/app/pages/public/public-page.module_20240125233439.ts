import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GfWorldMapChartModule } from '@portfoolio/client/components/world-map-chart/world-map-chart.module';
import { GfHoldingsTableModule } from '@portfoolio/ui/holdings-table/holdings-table.module';
import { GfPortfolioProportionChartModule } from '@portfoolio/ui/portfolio-proportion-chart/portfolio-proportion-chart.module';
import { GfValueModule } from '@portfoolio/ui/value';

import { PublicPageRoutingModule } from './public-page-routing.module';
import { PublicPageComponent } from './public-page.component';

@NgModule({
  declarations: [PublicPageComponent],
  imports: [
    CommonModule,
    GfHoldingsTableModule,
    GfPortfolioProportionChartModule,
    GfValueModule,
    GfWorldMapChartModule,
    MatButtonModule,
    MatCardModule,
    PublicPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicPageModule {}

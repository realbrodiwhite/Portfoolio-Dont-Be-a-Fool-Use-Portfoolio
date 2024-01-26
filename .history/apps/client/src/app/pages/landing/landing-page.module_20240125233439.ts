import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GfWorldMapChartModule } from '@portfoolio/client/components/world-map-chart/world-map-chart.module';
import { GfCarouselModule } from '@portfoolio/ui/carousel';
import { GfLogoModule } from '@portfoolio/ui/logo';
import { GfValueModule } from '@portfoolio/ui/value';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    GfCarouselModule,
    GfLogoModule,
    GfValueModule,
    GfWorldMapChartModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule {}

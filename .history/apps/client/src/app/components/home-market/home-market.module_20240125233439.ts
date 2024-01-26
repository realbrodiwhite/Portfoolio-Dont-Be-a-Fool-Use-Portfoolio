import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GfFearAndGreedIndexModule } from '@portfoolio/client/components/fear-and-greed-index/fear-and-greed-index.module';
import { GfBenchmarkModule } from '@portfoolio/ui/benchmark/benchmark.module';
import { GfLineChartModule } from '@portfoolio/ui/line-chart/line-chart.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HomeMarketComponent } from './home-market.component';

@NgModule({
  declarations: [HomeMarketComponent],
  exports: [HomeMarketComponent],
  imports: [
    CommonModule,
    GfBenchmarkModule,
    GfFearAndGreedIndexModule,
    GfLineChartModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfHomeMarketModule {}

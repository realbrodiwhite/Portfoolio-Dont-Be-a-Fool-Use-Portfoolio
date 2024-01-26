import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GfRulesModule } from '@portfoolio/client/components/rules/rules.module';
import { GfFireCalculatorModule } from '@portfoolio/ui/fire-calculator';
import { GfPremiumIndicatorModule } from '@portfoolio/ui/premium-indicator';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { FirePageRoutingModule } from './fire-page-routing.module';
import { FirePageComponent } from './fire-page.component';

@NgModule({
  declarations: [FirePageComponent],
  imports: [
    CommonModule,
    FirePageRoutingModule,
    GfFireCalculatorModule,
    GfPremiumIndicatorModule,
    GfRulesModule,
    GfValueModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirePageModule {}

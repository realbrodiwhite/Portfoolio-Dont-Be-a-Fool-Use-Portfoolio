import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { GfSymbolIconModule } from '@portfoolio/client/components/symbol-icon/symbol-icon.module';
import { GfSymbolModule } from '@portfoolio/client/pipes/symbol/symbol.module';
import { GfActivityTypeModule } from '@portfoolio/ui/activity-type';
import { GfNoTransactionsInfoModule } from '@portfoolio/ui/no-transactions-info';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ActivitiesTableLazyComponent } from './activities-table-lazy.component';

@NgModule({
  declarations: [ActivitiesTableLazyComponent],
  exports: [ActivitiesTableLazyComponent],
  imports: [
    CommonModule,
    GfActivityTypeModule,
    GfNoTransactionsInfoModule,
    GfSymbolIconModule,
    GfSymbolModule,
    GfValueModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    NgxSkeletonLoaderModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfActivitiesTableLazyModule {}

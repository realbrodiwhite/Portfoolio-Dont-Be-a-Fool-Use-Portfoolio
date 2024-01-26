import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GfPositionDetailDialogModule } from '@portfoolio/client/components/position/position-detail-dialog/position-detail-dialog.module';
import { GfSymbolIconModule } from '@portfoolio/client/components/symbol-icon/symbol-icon.module';
import { GfSymbolModule } from '@portfoolio/client/pipes/symbol/symbol.module';
import { GfNoTransactionsInfoModule } from '@portfoolio/ui/no-transactions-info';
import { GfValueModule } from '@portfoolio/ui/value';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HoldingsTableComponent } from './holdings-table.component';

@NgModule({
  declarations: [HoldingsTableComponent],
  exports: [HoldingsTableComponent],
  imports: [
    CommonModule,
    GfNoTransactionsInfoModule,
    GfPositionDetailDialogModule,
    GfSymbolIconModule,
    GfSymbolModule,
    GfValueModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxSkeletonLoaderModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfHoldingsTableModule {}

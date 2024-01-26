import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { GfDialogFooterModule } from '@portfoolio/client/components/dialog-footer/dialog-footer.module';
import { GfDialogHeaderModule } from '@portfoolio/client/components/dialog-header/dialog-header.module';
import { GfFileDropModule } from '@portfoolio/client/directives/file-drop/file-drop.module';
import { GfSymbolModule } from '@portfoolio/client/pipes/symbol/symbol.module';
import { GfActivitiesTableModule } from '@portfoolio/ui/activities-table/activities-table.module';
import { GfActivitiesTableLazyModule } from '@portfoolio/ui/activities-table-lazy/activities-table-lazy.module';

import { ImportActivitiesDialog } from './import-activities-dialog.component';

@NgModule({
  declarations: [ImportActivitiesDialog],
  imports: [
    CommonModule,
    FormsModule,
    GfActivitiesTableModule,
    GfActivitiesTableLazyModule,
    GfDialogFooterModule,
    GfDialogHeaderModule,
    GfFileDropModule,
    GfSymbolModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfImportActivitiesDialogModule {}

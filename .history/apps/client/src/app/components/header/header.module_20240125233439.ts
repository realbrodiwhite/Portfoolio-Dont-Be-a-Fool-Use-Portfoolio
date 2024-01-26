import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginWithAccessTokenDialogModule } from '@portfoolio/client/components/login-with-access-token-dialog/login-with-access-token-dialog.module';
import { GfAssistantModule } from '@portfoolio/ui/assistant';
import { GfLogoModule } from '@portfoolio/ui/logo';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    GfAssistantModule,
    GfLogoModule,
    LoginWithAccessTokenDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfHeaderModule {}

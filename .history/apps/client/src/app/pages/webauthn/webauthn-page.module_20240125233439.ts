import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WebauthnPageComponent } from '@portfoolio/client/pages/webauthn/webauthn-page.component';
import { GfLogoModule } from '@portfoolio/ui/logo';

import { WebauthnPageRoutingModule } from './webauthn-page-routing.module';

@NgModule({
  declarations: [WebauthnPageComponent],
  imports: [
    CommonModule,
    GfLogoModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    WebauthnPageRoutingModule
  ]
})
export class WebauthnPageModule {}

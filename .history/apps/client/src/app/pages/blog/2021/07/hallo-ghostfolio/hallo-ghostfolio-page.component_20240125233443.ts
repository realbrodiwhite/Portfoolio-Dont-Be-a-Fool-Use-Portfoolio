import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-hallo-portfoolio-page',
  standalone: true,
  templateUrl: './hallo-portfoolio-page.html'
})
export class HalloPortfoolioPageComponent {
  public routerLinkPricing = ['/' + $localize`pricing`];
  public routerLinkResources = ['/' + $localize`resources`];
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-hello-portfoolio-page',
  standalone: true,
  templateUrl: './hello-portfoolio-page.html'
})
export class HelloPortfoolioPageComponent {
  public routerLinkPricing = ['/' + $localize`pricing`];
  public routerLinkResources = ['/' + $localize`resources`];
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-portfoolio-meets-umbrel-page',
  standalone: true,
  templateUrl: './portfoolio-meets-umbrel-page.html'
})
export class PortfoolioMeetsUmbrelPageComponent {}

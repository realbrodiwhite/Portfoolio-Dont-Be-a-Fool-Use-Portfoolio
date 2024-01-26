import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-portfoolio-auf-sackgeld-vorgestellt-page',
  standalone: true,
  templateUrl: './portfoolio-auf-sackgeld-vorgestellt-page.html'
})
export class PortfoolioAufSackgeldVorgestelltPageComponent {}

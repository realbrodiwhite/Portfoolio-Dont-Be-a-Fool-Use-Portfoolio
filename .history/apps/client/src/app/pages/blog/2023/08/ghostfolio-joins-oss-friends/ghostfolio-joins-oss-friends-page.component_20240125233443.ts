import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [MatButtonModule, RouterModule],
  selector: 'gf-portfoolio-joins-oss-friends-page',
  standalone: true,
  templateUrl: './portfoolio-joins-oss-friends-page.html'
})
export class PortfoolioJoinsOssFriendsPageComponent {
  public routerLinkAboutOssFriends = ['/' + $localize`about`, 'oss-friends'];
}

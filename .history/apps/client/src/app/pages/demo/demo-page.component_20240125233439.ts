import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@portfoolio/client/services/data.service';
import { TokenStorageService } from '@portfoolio/client/services/token-storage.service';
import { InfoItem } from '@portfoolio/common/interfaces';
import { Subject } from 'rxjs';

@Component({
  host: { class: 'page' },
  selector: 'gf-demo-page',
  templateUrl: './demo-page.html'
})
export class DemoPageComponent implements OnDestroy {
  public info: InfoItem;

  private unsubscribeSubject = new Subject<void>();

  public constructor(
    private dataService: DataService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
    this.info = this.dataService.fetchInfo();
  }

  public ngOnInit() {
    const hasToken = this.tokenStorageService.getToken()?.length > 0;

    if (hasToken) {
      alert(
        $localize`As you are already logged in, you cannot access the demo account.`
      );
    } else {
      this.tokenStorageService.saveToken(this.info.demoAuthToken, true);
    }

    this.router.navigate(['/']);
  }

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}

import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { DataService } from '@portfoolio/client/services/data.service';
import { UserService } from '@portfoolio/client/services/user/user.service';
import { InfoItem, User } from '@portfoolio/common/interfaces';
import { hasPermission, permissions } from '@portfoolio/common/permissions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  host: { class: 'page' },
  selector: 'gf-features-page',
  styleUrls: ['./features-page.scss'],
  templateUrl: './features-page.html'
})
export class FeaturesPageComponent implements OnDestroy {
  public hasPermissionForSubscription: boolean;
  public info: InfoItem;
  public routerLinkRegister = ['/' + $localize`register`];
  public routerLinkResources = ['/' + $localize`resources`];
  public user: User;

  private unsubscribeSubject = new Subject<void>();

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService,
    private userService: UserService
  ) {
    this.info = this.dataService.fetchInfo();
  }

  public ngOnInit() {
    this.userService.stateChanged
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((state) => {
        if (state?.user) {
          this.user = state.user;

          this.changeDetectorRef.markForCheck();
        }
      });

    this.hasPermissionForSubscription = hasPermission(
      this.info?.globalPermissions,
      permissions.enableSubscription
    );
  }

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}

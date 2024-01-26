import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '@portfoolio/client/services/data.service';
import { UserService } from '@portfoolio/client/services/user/user.service';
import { portfoolioFearAndGreedIndexSymbol } from '@portfoolio/common/config';
import { resetHours } from '@portfoolio/common/helper';
import {
  Benchmark,
  HistoricalDataItem,
  InfoItem,
  User
} from '@portfoolio/common/interfaces';
import { hasPermission, permissions } from '@portfoolio/common/permissions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'gf-home-market',
  styleUrls: ['./home-market.scss'],
  templateUrl: './home-market.html'
})
export class HomeMarketComponent implements OnDestroy, OnInit {
  public benchmarks: Benchmark[];
  public fearAndGreedIndex: number;
  public fearLabel = $localize`Fear`;
  public greedLabel = $localize`Greed`;
  public hasPermissionToAccessFearAndGreedIndex: boolean;
  public historicalDataItems: HistoricalDataItem[];
  public info: InfoItem;
  public isLoading = true;
  public readonly numberOfDays = 365;
  public user: User;

  private unsubscribeSubject = new Subject<void>();

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService,
    private userService: UserService
  ) {
    this.info = this.dataService.fetchInfo();
    this.isLoading = true;

    this.userService.stateChanged
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((state) => {
        if (state?.user) {
          this.user = state.user;

          this.changeDetectorRef.markForCheck();
        }
      });
  }

  public ngOnInit() {
    this.hasPermissionToAccessFearAndGreedIndex = hasPermission(
      this.info?.globalPermissions,
      permissions.enableFearAndGreedIndex
    );

    if (this.hasPermissionToAccessFearAndGreedIndex) {
      this.dataService
        .fetchSymbolItem({
          dataSource: this.info.fearAndGreedDataSource,
          includeHistoricalData: this.numberOfDays,
          symbol: portfoolioFearAndGreedIndexSymbol
        })
        .pipe(takeUntil(this.unsubscribeSubject))
        .subscribe(({ historicalData, marketPrice }) => {
          this.fearAndGreedIndex = marketPrice;
          this.historicalDataItems = [
            ...historicalData,
            {
              date: resetHours(new Date()).toISOString(),
              value: marketPrice
            }
          ];

          this.changeDetectorRef.markForCheck();
        });
    }

    this.dataService
      .fetchBenchmarks()
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(({ benchmarks }) => {
        this.benchmarks = benchmarks;
        this.isLoading = false;

        this.changeDetectorRef.markForCheck();
      });
  }

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}

import { PortfolioPosition } from '@portfoolio/common/interfaces';

export interface PortfolioPublicDetails {
  alias?: string;
  hasDetails: boolean;
  holdings: {
    [symbol: string]: Pick<
      PortfolioPosition,
      | 'allocationInPercentage'
      | 'countries'
      | 'currency'
      | 'dataSource'
      | 'dateOfFirstActivity'
      | 'markets'
      | 'name'
      | 'netPerformancePercent'
      | 'sectors'
      | 'symbol'
      | 'url'
      | 'valueInBaseCurrency'
      | 'valueInPercentage'
    >;
  };
}

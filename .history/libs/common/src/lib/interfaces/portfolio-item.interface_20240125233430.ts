import { Position } from '@portfoolio/common/interfaces';

export interface PortfolioItem {
  date: string;
  grossPerformancePercent: number;
  investment: number;
  positions: { [symbol: string]: Position };
  value: number;
}

import {
  DataProviderInfo,
  EnhancedSymbolProfile,
  HistoricalDataItem
} from '@portfoolio/common/interfaces';
import { OrderWithAccount } from '@portfoolio/common/types';
import { Tag } from '@prisma/client';

export interface PortfolioPositionDetail {
  averagePrice: number;
  dataProviderInfo: DataProviderInfo;
  dividendInBaseCurrency: number;
  feeInBaseCurrency: number;
  firstBuyDate: string;
  grossPerformance: number;
  grossPerformancePercent: number;
  grossPerformancePercentWithCurrencyEffect: number;
  grossPerformanceWithCurrencyEffect: number;
  historicalData: HistoricalDataItem[];
  investment: number;
  marketPrice: number;
  maxPrice: number;
  minPrice: number;
  netPerformance: number;
  netPerformancePercent: number;
  netPerformancePercentWithCurrencyEffect: number;
  netPerformanceWithCurrencyEffect: number;
  orders: OrderWithAccount[];
  quantity: number;
  SymbolProfile: EnhancedSymbolProfile;
  tags: Tag[];
  transactionCount: number;
  value: number;
}

export interface HistoricalDataContainer {
  isAllTimeHigh: boolean;
  isAllTimeLow: boolean;
  items: HistoricalDataItem[];
}

import { HistoricalDataItem, UniqueAsset } from '@portfoolio/common/interfaces';

export interface SymbolItem extends UniqueAsset {
  currency: string;
  historicalData: HistoricalDataItem[];
  marketPrice: number;
}

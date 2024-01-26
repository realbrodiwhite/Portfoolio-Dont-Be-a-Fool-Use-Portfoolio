import { AccountWithValue } from '@portfoolio/common/types';

export interface Accounts {
  accounts: AccountWithValue[];
  totalBalanceInBaseCurrency: number;
  totalValueInBaseCurrency: number;
  transactionCount: number;
}

import { UniqueAsset } from '@portfoolio/common/interfaces';

export interface GetValueObject extends UniqueAsset {
  date: Date;
  marketPrice: number;
}

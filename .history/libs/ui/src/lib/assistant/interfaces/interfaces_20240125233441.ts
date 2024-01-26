import { UniqueAsset } from '@portfoolio/common/interfaces';

export interface ISearchResultItem extends UniqueAsset {
  assetSubClassString: string;
  currency: string;
  name: string;
}

export interface ISearchResults {
  assetProfiles: ISearchResultItem[];
  holdings: ISearchResultItem[];
}

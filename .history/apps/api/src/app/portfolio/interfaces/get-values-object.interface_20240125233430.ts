import { DataProviderInfo, ResponseError } from '@portfoolio/common/interfaces';

import { GetValueObject } from './get-value-object.interface';

export interface GetValuesObject {
  dataProviderInfos: DataProviderInfo[];
  errors: ResponseError['errors'];
  values: GetValueObject[];
}

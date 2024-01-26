import { SubscriptionType } from '@portfoolio/common/types/subscription-type.type';

export interface SystemMessage {
  message: string;
  routerLink?: string[];
  targetGroups: SubscriptionType[];
}

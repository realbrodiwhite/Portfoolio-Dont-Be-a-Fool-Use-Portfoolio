import { Activity } from '@portfoolio/api/app/order/interfaces/activities.interface';
import { User } from '@portfoolio/common/interfaces';
import { Account } from '@prisma/client';

export interface CreateOrUpdateActivityDialogParams {
  accountId: string;
  accounts: Account[];
  activity: Activity;
  user: User;
}

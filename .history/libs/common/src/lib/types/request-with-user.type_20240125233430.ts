import { UserWithSettings } from '@portfoolio/common/types';

export type RequestWithUser = Request & { user: UserWithSettings };

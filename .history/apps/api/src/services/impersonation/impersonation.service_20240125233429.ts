import { PrismaService } from '@portfoolio/api/services/prisma/prisma.service';
import { hasPermission, permissions } from '@portfoolio/common/permissions';
import type { RequestWithUser } from '@portfoolio/common/types';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class ImpersonationService {
  public constructor(
    private readonly prismaService: PrismaService,
    @Inject(REQUEST) private readonly request: RequestWithUser
  ) {}

  public async validateImpersonationId(aId = '') {
    if (this.request.user) {
      const accessObject = await this.prismaService.access.findFirst({
        where: {
          GranteeUser: { id: this.request.user.id },
          id: aId
        }
      });

      if (accessObject?.userId) {
        return accessObject.userId;
      } else if (
        hasPermission(
          this.request.user.permissions,
          permissions.impersonateAllUsers
        )
      ) {
        return aId;
      }
    } else {
      // Public access
      const accessObject = await this.prismaService.access.findFirst({
        where: {
          GranteeUser: null,
          User: { id: aId }
        }
      });

      if (accessObject?.userId) {
        return accessObject.userId;
      }
    }

    return null;
  }
}

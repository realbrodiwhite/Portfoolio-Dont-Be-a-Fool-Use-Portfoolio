import { RedisCacheService } from '@portfoolio/api/app/redis-cache/redis-cache.service';
import { HasPermission } from '@portfoolio/api/decorators/has-permission.decorator';
import { HasPermissionGuard } from '@portfoolio/api/guards/has-permission.guard';
import { permissions } from '@portfoolio/common/permissions';
import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('cache')
export class CacheController {
  public constructor(private readonly redisCacheService: RedisCacheService) {}

  @HasPermission(permissions.accessAdminControl)
  @Post('flush')
  @UseGuards(AuthGuard('jwt'), HasPermissionGuard)
  public async flushCache(): Promise<void> {
    return this.redisCacheService.reset();
  }
}

import { AccountModule } from '@portfoolio/api/app/account/account.module';
import { OrderModule } from '@portfoolio/api/app/order/order.module';
import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { Module } from '@nestjs/common';

import { ExportController } from './export.controller';
import { ExportService } from './export.service';

@Module({
  imports: [
    AccountModule,
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    OrderModule,
    RedisCacheModule
  ],
  controllers: [ExportController],
  providers: [ExportService]
})
export class ExportModule {}

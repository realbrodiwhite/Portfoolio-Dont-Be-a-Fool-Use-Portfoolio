import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { CacheController } from './cache.controller';

@Module({
  controllers: [CacheController],
  imports: [
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    ExchangeRateDataModule,
    PrismaModule,
    RedisCacheModule,
    SymbolProfileModule
  ]
})
export class CacheModule {}

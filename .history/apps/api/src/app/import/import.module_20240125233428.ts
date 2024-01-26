import { AccountModule } from '@portfoolio/api/app/account/account.module';
import { CacheModule } from '@portfoolio/api/app/cache/cache.module';
import { OrderModule } from '@portfoolio/api/app/order/order.module';
import { PlatformModule } from '@portfoolio/api/app/platform/platform.module';
import { PortfolioModule } from '@portfoolio/api/app/portfolio/portfolio.module';
import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { ImportController } from './import.controller';
import { ImportService } from './import.service';

@Module({
  controllers: [ImportController],
  imports: [
    AccountModule,
    CacheModule,
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    ExchangeRateDataModule,
    OrderModule,
    PlatformModule,
    PortfolioModule,
    PrismaModule,
    RedisCacheModule,
    SymbolProfileModule
  ],
  providers: [ImportService]
})
export class ImportModule {}

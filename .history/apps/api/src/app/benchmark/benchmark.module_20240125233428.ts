import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { SymbolModule } from '@portfoolio/api/app/symbol/symbol.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { BenchmarkController } from './benchmark.controller';
import { BenchmarkService } from './benchmark.service';

@Module({
  controllers: [BenchmarkController],
  exports: [BenchmarkService],
  imports: [
    ConfigurationModule,
    DataProviderModule,
    ExchangeRateDataModule,
    MarketDataModule,
    PrismaModule,
    PropertyModule,
    RedisCacheModule,
    SymbolModule,
    SymbolProfileModule
  ],
  providers: [BenchmarkService]
})
export class BenchmarkModule {}

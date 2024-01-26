import { SubscriptionModule } from '@portfoolio/api/app/subscription/subscription.module';
import { ApiModule } from '@portfoolio/api/services/api/api.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ApiModule,
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    ExchangeRateDataModule,
    MarketDataModule,
    PrismaModule,
    PropertyModule,
    QueueModule,
    SubscriptionModule,
    SymbolProfileModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}

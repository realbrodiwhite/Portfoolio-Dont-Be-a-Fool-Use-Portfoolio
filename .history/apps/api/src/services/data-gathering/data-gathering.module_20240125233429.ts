import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringService } from '@portfoolio/api/services/data-gathering/data-gathering.service';
import { DataEnhancerModule } from '@portfoolio/api/services/data-provider/data-enhancer/data-enhancer.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { DATA_GATHERING_QUEUE } from '@portfoolio/common/config';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import ms from 'ms';

import { DataGatheringProcessor } from './data-gathering.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      limiter: {
        duration: ms('4 seconds'),
        max: 1
      },
      name: DATA_GATHERING_QUEUE
    }),
    ConfigurationModule,
    DataEnhancerModule,
    DataProviderModule,
    ExchangeRateDataModule,
    MarketDataModule,
    PrismaModule,
    PropertyModule,
    SymbolProfileModule
  ],
  providers: [DataGatheringProcessor, DataGatheringService],
  exports: [BullModule, DataEnhancerModule, DataGatheringService]
})
export class DataGatheringModule {}

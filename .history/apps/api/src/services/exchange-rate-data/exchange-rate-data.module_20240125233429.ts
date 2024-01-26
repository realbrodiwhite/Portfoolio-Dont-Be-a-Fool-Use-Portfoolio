import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataService } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.service';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { Module } from '@nestjs/common';

@Module({
  exports: [ExchangeRateDataService],
  imports: [
    ConfigurationModule,
    DataProviderModule,
    MarketDataModule,
    PrismaModule,
    PropertyModule
  ],
  providers: [ExchangeRateDataService]
})
export class ExchangeRateDataModule {}

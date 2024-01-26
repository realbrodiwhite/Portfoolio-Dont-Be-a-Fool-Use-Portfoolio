import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { Module } from '@nestjs/common';

import { SymbolController } from './symbol.controller';
import { SymbolService } from './symbol.service';

@Module({
  controllers: [SymbolController],
  exports: [SymbolService],
  imports: [
    ConfigurationModule,
    DataProviderModule,
    MarketDataModule,
    PrismaModule
  ],
  providers: [SymbolService]
})
export class SymbolModule {}

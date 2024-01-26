import { AccessModule } from '@portfoolio/api/app/access/access.module';
import { AccountBalanceService } from '@portfoolio/api/app/account-balance/account-balance.service';
import { AccountService } from '@portfoolio/api/app/account/account.service';
import { OrderModule } from '@portfoolio/api/app/order/order.module';
import { UserModule } from '@portfoolio/api/app/user/user.module';
import { ApiModule } from '@portfoolio/api/services/api/api.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { ImpersonationModule } from '@portfoolio/api/services/impersonation/impersonation.module';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { CurrentRateService } from './current-rate.service';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { RulesService } from './rules.service';

@Module({
  controllers: [PortfolioController],
  exports: [PortfolioService],
  imports: [
    AccessModule,
    ApiModule,
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    ExchangeRateDataModule,
    ImpersonationModule,
    MarketDataModule,
    OrderModule,
    PrismaModule,
    SymbolProfileModule,
    UserModule
  ],
  providers: [
    AccountBalanceService,
    AccountService,
    CurrentRateService,
    PortfolioService,
    RulesService
  ]
})
export class PortfolioModule {}

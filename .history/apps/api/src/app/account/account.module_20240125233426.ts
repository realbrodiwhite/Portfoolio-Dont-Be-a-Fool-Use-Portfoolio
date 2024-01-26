import { AccountBalanceModule } from '@portfoolio/api/app/account-balance/account-balance.module';
import { PortfolioModule } from '@portfoolio/api/app/portfolio/portfolio.module';
import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { UserModule } from '@portfoolio/api/app/user/user.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { ImpersonationModule } from '@portfoolio/api/services/impersonation/impersonation.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  exports: [AccountService],
  imports: [
    AccountBalanceModule,
    ConfigurationModule,
    DataProviderModule,
    ExchangeRateDataModule,
    ImpersonationModule,
    PortfolioModule,
    PrismaModule,
    RedisCacheModule,
    UserModule
  ],
  providers: [AccountService]
})
export class AccountModule {}

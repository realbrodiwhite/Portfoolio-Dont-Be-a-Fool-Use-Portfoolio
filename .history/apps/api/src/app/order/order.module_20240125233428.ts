import { AccountBalanceService } from '@portfoolio/api/app/account-balance/account-balance.service';
import { AccountService } from '@portfoolio/api/app/account/account.service';
import { CacheModule } from '@portfoolio/api/app/cache/cache.module';
import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { UserModule } from '@portfoolio/api/app/user/user.module';
import { ApiModule } from '@portfoolio/api/services/api/api.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataGatheringModule } from '@portfoolio/api/services/data-gathering/data-gathering.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { ExchangeRateDataModule } from '@portfoolio/api/services/exchange-rate-data/exchange-rate-data.module';
import { ImpersonationModule } from '@portfoolio/api/services/impersonation/impersonation.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  exports: [OrderService],
  imports: [
    ApiModule,
    CacheModule,
    ConfigurationModule,
    DataGatheringModule,
    DataProviderModule,
    ExchangeRateDataModule,
    ImpersonationModule,
    PrismaModule,
    RedisCacheModule,
    SymbolProfileModule,
    UserModule
  ],
  providers: [AccountBalanceService, AccountService, OrderService]
})
export class OrderModule {}

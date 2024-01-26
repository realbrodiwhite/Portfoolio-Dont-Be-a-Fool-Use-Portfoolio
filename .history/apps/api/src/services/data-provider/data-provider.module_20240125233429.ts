import { RedisCacheModule } from '@portfoolio/api/app/redis-cache/redis-cache.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { CryptocurrencyModule } from '@portfoolio/api/services/cryptocurrency/cryptocurrency.module';
import { AlphaVantageService } from '@portfoolio/api/services/data-provider/alpha-vantage/alpha-vantage.service';
import { CoinGeckoService } from '@portfoolio/api/services/data-provider/coingecko/coingecko.service';
import { EodHistoricalDataService } from '@portfoolio/api/services/data-provider/eod-historical-data/eod-historical-data.service';
import { FinancialModelingPrepService } from '@portfoolio/api/services/data-provider/financial-modeling-prep/financial-modeling-prep.service';
import { GoogleSheetsService } from '@portfoolio/api/services/data-provider/google-sheets/google-sheets.service';
import { ManualService } from '@portfoolio/api/services/data-provider/manual/manual.service';
import { RapidApiService } from '@portfoolio/api/services/data-provider/rapid-api/rapid-api.service';
import { YahooFinanceService } from '@portfoolio/api/services/data-provider/yahoo-finance/yahoo-finance.service';
import { MarketDataModule } from '@portfoolio/api/services/market-data/market-data.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { SymbolProfileModule } from '@portfoolio/api/services/symbol-profile/symbol-profile.module';
import { Module } from '@nestjs/common';

import { DataEnhancerModule } from './data-enhancer/data-enhancer.module';
import { YahooFinanceDataEnhancerService } from './data-enhancer/yahoo-finance/yahoo-finance.service';
import { DataProviderService } from './data-provider.service';

@Module({
  imports: [
    ConfigurationModule,
    CryptocurrencyModule,
    DataEnhancerModule,
    MarketDataModule,
    PrismaModule,
    PropertyModule,
    RedisCacheModule,
    SymbolProfileModule
  ],
  providers: [
    AlphaVantageService,
    CoinGeckoService,
    DataProviderService,
    EodHistoricalDataService,
    FinancialModelingPrepService,
    GoogleSheetsService,
    ManualService,
    RapidApiService,
    YahooFinanceService,
    {
      inject: [
        AlphaVantageService,
        CoinGeckoService,
        EodHistoricalDataService,
        FinancialModelingPrepService,
        GoogleSheetsService,
        ManualService,
        RapidApiService,
        YahooFinanceService
      ],
      provide: 'DataProviderInterfaces',
      useFactory: (
        alphaVantageService,
        coinGeckoService,
        eodHistoricalDataService,
        financialModelingPrepService,
        googleSheetsService,
        manualService,
        rapidApiService,
        yahooFinanceService
      ) => [
        alphaVantageService,
        coinGeckoService,
        eodHistoricalDataService,
        financialModelingPrepService,
        googleSheetsService,
        manualService,
        rapidApiService,
        yahooFinanceService
      ]
    },
    YahooFinanceDataEnhancerService
  ],
  exports: [DataProviderService, ManualService, YahooFinanceService]
})
export class DataProviderModule {}

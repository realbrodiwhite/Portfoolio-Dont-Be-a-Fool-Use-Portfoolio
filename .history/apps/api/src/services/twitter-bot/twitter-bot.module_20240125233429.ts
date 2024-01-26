import { BenchmarkModule } from '@portfoolio/api/app/benchmark/benchmark.module';
import { SymbolModule } from '@portfoolio/api/app/symbol/symbol.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { TwitterBotService } from '@portfoolio/api/services/twitter-bot/twitter-bot.service';
import { Module } from '@nestjs/common';

@Module({
  exports: [TwitterBotService],
  imports: [BenchmarkModule, ConfigurationModule, SymbolModule],
  providers: [TwitterBotService]
})
export class TwitterBotModule {}

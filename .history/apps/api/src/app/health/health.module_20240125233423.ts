import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { DataEnhancerModule } from '@portfoolio/api/services/data-provider/data-enhancer/data-enhancer.module';
import { DataProviderModule } from '@portfoolio/api/services/data-provider/data-provider.module';
import { Module } from '@nestjs/common';

import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  imports: [ConfigurationModule, DataEnhancerModule, DataProviderModule],
  providers: [HealthService]
})
export class HealthModule {}

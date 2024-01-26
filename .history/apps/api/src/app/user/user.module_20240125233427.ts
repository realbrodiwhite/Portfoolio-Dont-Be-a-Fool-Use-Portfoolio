import { SubscriptionModule } from '@portfoolio/api/app/subscription/subscription.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { TagModule } from '@portfoolio/api/services/tag/tag.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [
    ConfigurationModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '30 days' }
    }),
    PrismaModule,
    PropertyModule,
    SubscriptionModule,
    TagModule
  ],
  providers: [UserService]
})
export class UserModule {}

import { AuthDeviceService } from '@portfoolio/api/app/auth-device/auth-device.service';
import { WebAuthService } from '@portfoolio/api/app/auth/web-auth.service';
import { SubscriptionModule } from '@portfoolio/api/app/subscription/subscription.module';
import { UserModule } from '@portfoolio/api/app/user/user.module';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { PropertyModule } from '@portfoolio/api/services/property/property.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    ConfigurationModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '180 days' }
    }),
    PrismaModule,
    PropertyModule,
    SubscriptionModule,
    UserModule
  ],
  providers: [
    AuthDeviceService,
    AuthService,
    GoogleStrategy,
    JwtStrategy,
    WebAuthService
  ]
})
export class AuthModule {}

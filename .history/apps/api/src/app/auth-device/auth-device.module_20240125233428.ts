import { AuthDeviceController } from '@portfoolio/api/app/auth-device/auth-device.controller';
import { AuthDeviceService } from '@portfoolio/api/app/auth-device/auth-device.service';
import { ConfigurationModule } from '@portfoolio/api/services/configuration/configuration.module';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthDeviceController],
  imports: [
    ConfigurationModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '180 days' }
    }),
    PrismaModule
  ],
  providers: [AuthDeviceService]
})
export class AuthDeviceModule {}

import { ImpersonationService } from '@portfoolio/api/services/impersonation/impersonation.service';
import { PrismaModule } from '@portfoolio/api/services/prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ImpersonationService],
  exports: [ImpersonationService]
})
export class ImpersonationModule {}

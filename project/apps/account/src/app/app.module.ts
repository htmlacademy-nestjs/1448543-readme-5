import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { ConfigAccountModule } from '@project/config/account';

@Module({
  imports: [AuthenticationModule, UserModule, ConfigAccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

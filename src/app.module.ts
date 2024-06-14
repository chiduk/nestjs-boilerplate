import { Module } from '@nestjs/common';
import { configValidator } from './config/config.validator';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [ConfigModule.forRoot(configValidator), AuthModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

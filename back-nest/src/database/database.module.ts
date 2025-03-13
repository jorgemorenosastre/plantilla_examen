import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as crypto from 'crypto';

if (typeof globalThis.crypto === 'undefined') {
    (globalThis as unknown as { crypto: typeof crypto }).crypto = crypto;
}
@Module({
  imports: [
    ConfigModule, // Acceso a variables .env
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [],
        ssl: { rejectUnauthorized: false }, // Acepta certificados autofirmados
        autoLoadEntities: true,
        synchronize: false, // Solo para desarrollo
      }),
    }),
  ],
})
export class DatabaseModule {}

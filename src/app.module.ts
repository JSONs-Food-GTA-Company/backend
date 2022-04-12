import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { OlaController } from './restaurant/restaurant.controller';
import { OlaService } from './restaurant/restaurant.service';

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    controllers: [OlaController],
    providers: [OlaService],
})
export class AppModule {}

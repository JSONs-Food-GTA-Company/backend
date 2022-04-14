import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AddsItemModule } from './addsItem/adds.item.module';
import { DatabaseModule } from './config/database.module';
import { ProductModule } from './product/product.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DatabaseModule,
        ProductModule,
        RestaurantModule,
        AddsItemModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

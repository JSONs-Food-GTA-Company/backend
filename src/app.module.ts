import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { OlaController } from './restaurant/restaurant.controller';
import { OlaService } from './restaurant/restaurant.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DatabaseModule,
        ProductModule,
    ],
    controllers: [
        OlaController,
        ProductController,
    ],
    providers: [OlaService, ProductService],
})
export class AppModule {}

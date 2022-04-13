import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { ProductController } from './product.controller';
import { productsProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [ProductService, ...productsProviders],
    exports: [ProductService],
})
export class ProductModule {}

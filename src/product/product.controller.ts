import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
    ) {}

    @Post()
    create(@Body() product: ProductDto) {
        return this.productService.create(
            product,
        );
    }

    @Get()
    list_products() {
        return this.productService.list();
    }
}

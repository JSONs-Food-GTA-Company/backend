import {
    Body,
    Controller,
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
    create(@Body() dto: ProductDto) {
        console.log({
            dto,
        });
        return 'Created with success';
    }
}

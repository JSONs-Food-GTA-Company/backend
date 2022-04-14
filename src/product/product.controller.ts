import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    @ApiTags('Product')
    @HttpCode(201)
    @ApiResponse({
        status: 201,
        description: 'OK',
    })
    create(@Body() product: ProductDto) {
        return this.productService.create(product);
    }

    @Get()
    @ApiTags('Product')
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    list_products() {
        return this.productService.list();
    }
}

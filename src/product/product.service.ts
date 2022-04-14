import { Inject, Injectable } from '@nestjs/common';
import { Additional } from 'src/additional/additional.entity';
import { ProductDto } from './dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productsRepository: typeof Product,
    ) {}

    async create(product: ProductDto) {
        return await this.productsRepository.create({
            name: product.name,
            description: product.description,
            image_url: product.image_url,
            price: product.price,
            restaurant_id: product.restaurant_id,
        });
    }

    async list() {
        const products = await this.productsRepository.findAll({
            include: [Additional],
        });

        return products;
    }
}

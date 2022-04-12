import {
    Inject,
    Injectable,
} from '@nestjs/common';
import { ProductDto } from './dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productsRepository: typeof Product,
    ) {}

    create(dto: ProductDto) {
        return this.productsRepository.create();
    }
}

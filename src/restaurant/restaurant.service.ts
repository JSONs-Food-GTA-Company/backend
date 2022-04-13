import {
    Inject,
    Injectable,
} from '@nestjs/common';
import { Product } from 'src/product/product.entity';
import { RestaurantDto } from './dto';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantService {
    constructor(
        @Inject('RESTAURANTS_REPOSITORY')
        private restaurantsRepository: typeof Restaurant,
    ) {}

    async create(restaurant: RestaurantDto) {
        return await this.restaurantsRepository.create(
            {
                name: restaurant.name,
                description:
                    restaurant.description,
                address: restaurant.address,
                owner: restaurant.owner,
                logo_url: restaurant.logo_url,
                products: restaurant.products,
            },
        );
    }

    async list() {
        const restaurant =
            this.restaurantsRepository.findOne({
                where: { id: 2 },
                include: Product,
            });

        return restaurant;
    }
}

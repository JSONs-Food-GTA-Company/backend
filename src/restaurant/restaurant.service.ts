import {
    BadRequestException,
    HttpStatus,
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
        try {
            const restaurant_created = await this.restaurantsRepository.create({
                name: restaurant.name,
                description: restaurant.description,
                address: restaurant.address,
                owner: restaurant.owner,
                logo_url: restaurant.logo_url,
            });

            return restaurant_created;
        } catch (error) {
            throw new BadRequestException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Já existe um restaurante com esse nome',
                error: 'Bad request',
            });
        }
    }

    async listAllRestaurants() {
        const restaurant = await this.restaurantsRepository.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            order: [['name', 'ASC']],
        });

        return restaurant;
    }

    async listCardapio(restaurant_id: number) {
        const restaurant = this.restaurantsRepository.findOne({
            where: { id: restaurant_id },
            include: Product,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });

        return restaurant;
    }
}

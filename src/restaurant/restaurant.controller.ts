import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';

import { RestaurantDto } from './dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
    constructor(private restaurantService: RestaurantService) {}

    @Post()
    create(@Body() restaurant: RestaurantDto) {
        const created = this.restaurantService.create(restaurant);

        return created;
    }

    @Get()
    async listAll() {
        return this.restaurantService.listAllRestaurants();
    }

    @Get(':id')
    async listCardapio(@Param('id') id: string) {
        const restaurant = await this.restaurantService.listCardapio(+id);

        return restaurant;
    }
}

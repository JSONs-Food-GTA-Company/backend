import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';

import { RestaurantDto } from './dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
    constructor(
        private restaurantService: RestaurantService,
    ) {}

    @Post()
    create(@Body() restaurant: RestaurantDto) {
        return this.restaurantService.create(
            restaurant,
        );
    }

    @Get()
    async list() {
        return this.restaurantService.list();
    }
}

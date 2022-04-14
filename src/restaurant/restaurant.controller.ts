import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Post,
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { RestaurantDto } from './dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
    constructor(private restaurantService: RestaurantService) {}

    @Post()
    @ApiTags('Restaurant')
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
    })
    @ApiBadRequestResponse({
        status: 400,
        description: 'Já existe um restaurante com esse nome!',
    })
    create(@Body() restaurant: RestaurantDto) {
        return this.restaurantService.create(restaurant);
    }

    @Get()
    @ApiTags('Restaurant')
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    async listAll() {
        return this.restaurantService.listAllRestaurants();
    }

    @Get(':id')
    @ApiTags('Restaurant')
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    async listCardapio(@Param('id') id: string) {
        return await this.restaurantService.listCardapio(+id);
    }
}

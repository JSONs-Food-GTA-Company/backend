import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { RestaurantController } from './restaurant.controller';
import { restaurantsProviders } from './restaurant.providers';
import { RestaurantService } from './restaurant.service';

@Module({
    imports: [DatabaseModule],
    controllers: [RestaurantController],
    providers: [
        RestaurantService,
        ...restaurantsProviders,
    ],
})
export class RestaurantModule {}

import { Restaurant } from './restaurant.entity';

export const restaurantsProviders = [
    {
        provide: 'RESTAURANTS_REPOSITORY',
        useValue: Restaurant,
    },
];

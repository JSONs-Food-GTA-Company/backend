import { Additional } from './additional.entity';

export const additionalProviders = [
    {
        provide: 'ADDS_ITEM_REPOSITORY',
        useValue: Additional,
    },
];

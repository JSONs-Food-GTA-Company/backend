import { AddsItem } from './adds.item.entity';

export const addsItemProviders = [
    {
        provide: 'ADDS_ITEM_REPOSITORY',
        useValue: AddsItem,
    },
];

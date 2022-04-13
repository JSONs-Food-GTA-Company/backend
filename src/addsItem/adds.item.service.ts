import { Inject, Injectable } from '@nestjs/common';
import { AddsItem } from './adds.item.entity';
import { AddsItemDto } from './dto/adds.item.dto';

@Injectable()
export class AddsItemService {
    constructor(
        @Inject('ADDS_ITEM_REPOSITORY')
        private addsItemRepository: typeof AddsItem,
    ) {}

    async create(item: AddsItemDto) {
        return await this.addsItemRepository.create({
            item: item.item,
            quantity: item.quantity,
            price: item.price,
            restaurant_id: item.product_id,
        });
    }

    async list() {
        const products = await this.addsItemRepository.findAll({
            where: { restaurant_id: 2 },
        });

        return products;
    }
}

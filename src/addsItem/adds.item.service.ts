import { Product } from './../product/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { AddsItem } from './adds.item.entity';
import { AddsItemDto } from './dto/adds.item.dto';

@Injectable()
export class AddsItemService {
    constructor(
        @Inject('ADDS_ITEM_REPOSITORY')
        private addsItemRepository: typeof AddsItem,
    ) {}

    async createAdds(item: AddsItemDto) {
        return await this.addsItemRepository.create({
            item: item.item,
            quantity: item.quantity,
            price: item.price,
            product_id: item.product_id,
        });
    }

    async listAdds() {
        return await this.addsItemRepository.findAll();
    }
}

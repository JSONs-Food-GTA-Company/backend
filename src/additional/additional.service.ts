import { Product } from '../product/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Additional } from './additional.entity';
import { AdditionalDto } from './dto/additional.dto';

@Injectable()
export class AdditionalService {
    constructor(
        @Inject('ADDS_ITEM_REPOSITORY')
        private additionalRepository: typeof Additional,
    ) {}

    async createAdds(item: AdditionalDto) {
        return await this.additionalRepository.create({
            item: item.item,
            price: item.price,
            product_id: item.product_id,
        });
    }

    async listAdds() {
        return await this.additionalRepository.findAll();
    }
}

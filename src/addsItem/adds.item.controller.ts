import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddsItemService } from './adds.item.service';
import { AddsItemDto } from './dto';

@Controller('adds-item')
export class AddsItemController {
    constructor(private addsItemService: AddsItemService) {}

    @Post()
    create(@Body() item: AddsItemDto) {
        return this.addsItemService.createAdds(item);
    }

    @Get()
    list_products() {
        return this.addsItemService.listAdds();
    }
}

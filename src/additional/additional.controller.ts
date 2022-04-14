import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdditionalService } from './additional.service';
import { AdditionalDto } from './dto';

@Controller('adds-item')
export class AdditionalController {
    constructor(private additionalService: AdditionalService) {}

    @Post()
    @ApiTags('Additional')
    @HttpCode(201)
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
    })
    create(@Body() item: AdditionalDto) {
        return this.additionalService.createAdds(item);
    }

    @Get()
    @HttpCode(200)
    @ApiTags('Additional')
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    list_products() {
        return this.additionalService.listAdds();
    }
}

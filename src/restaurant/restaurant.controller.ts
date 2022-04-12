import { Controller, Get } from '@nestjs/common';
import { OlaService } from './restaurant.service';

@Controller('status')
export class OlaController {
    constructor(private olaService: OlaService) {}

    @Get()
    async details() {
        return await this.olaService.message();
    }
}

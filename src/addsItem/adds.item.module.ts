import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { AddsItemController } from './adds.item.controller';
import { addsItemProviders } from './adds.item.providers';
import { AddsItemService } from './adds.item.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AddsItemController],
    providers: [AddsItemService, ...addsItemProviders],
    exports: [AddsItemService],
})
export class AddsItemModule {}

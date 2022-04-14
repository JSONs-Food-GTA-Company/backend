import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { AdditionalController } from './additional.controller';
import { additionalProviders } from './additional.providers';
import { AdditionalService } from './additional.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AdditionalController],
    providers: [AdditionalService, ...additionalProviders],
    exports: [AdditionalService],
})
export class AdditionalModule {}

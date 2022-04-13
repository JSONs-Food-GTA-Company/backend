import {
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    image_url: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    restaurant_id: number;
}

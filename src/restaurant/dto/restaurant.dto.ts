import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/product/product.entity';

export class RestaurantDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    logo_url: string;

    @IsString()
    @IsNotEmpty()
    owner: string;

    products: Product[];
}

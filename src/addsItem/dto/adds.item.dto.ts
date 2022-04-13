import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddsItemDto {
    @IsString()
    @IsNotEmpty()
    item: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    product_id: number;
}

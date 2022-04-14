import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddsItemDto {
    @IsString()
    @IsNotEmpty({ message: 'Descrição do item é obrigatório' })
    item: string;

    @IsNumber()
    @IsNotEmpty({ message: 'quantidade para adicionais é obrigatório' })
    quantity: number;

    @IsNumber()
    @IsNotEmpty({ message: 'preço dos adicionais é obrigatório' })
    price: number;

    @IsNumber()
    @IsNotEmpty({ message: 'ID do produto é obrigatório' })
    product_id: number;
}

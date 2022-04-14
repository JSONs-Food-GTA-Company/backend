import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdditionalDto {
    @ApiProperty({
        example: 'Coca-Cola',
    })
    @IsString()
    @IsNotEmpty({ message: 'Descrição do item é obrigatório' })
    item: string;

    @ApiProperty({
        example: 10.9,
    })
    @IsNumber()
    @IsNotEmpty({ message: 'preço dos adicionais é obrigatório' })
    price: number;

    @ApiProperty({
        example: 3,
    })
    @IsNumber()
    @IsNotEmpty({ message: 'ID do produto é obrigatório' })
    product_id: number;
}

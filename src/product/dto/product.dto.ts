import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
    @ApiProperty({
        example: 'Camarão Internacional',
    })
    @IsString()
    @IsNotEmpty({ message: 'Nome do produto obrigatório' })
    name: string;

    @ApiProperty({
        example: 'Delicioso camarão',
    })
    @IsString()
    @IsNotEmpty({ message: 'Descrição não pode ficar em branco' })
    description: string;

    @ApiProperty({
        example: 'www.google.com.br',
    })
    @IsString()
    image_url: string;

    @ApiProperty({
        example: 80,
    })
    @IsNumber()
    @IsNotEmpty({ message: 'Produto deve ter um preço' })
    price: number;

    @ApiProperty({
        example: 1,
    })
    @IsNumber()
    @IsNotEmpty({ message: 'Restaurante é obrigatório' })
    restaurant_id: number;
}

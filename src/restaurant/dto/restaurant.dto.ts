import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/product/product.entity';

export class RestaurantDto {
    @ApiProperty({
        example: 'Ricardos Bar',
    })
    @IsString()
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string;

    @ApiProperty({
        example: 'Ricardos Bar',
    })
    @IsString()
    @IsNotEmpty({ message: 'Pernambuco' })
    address: string;

    @ApiProperty({
        example: 'Restaurante melhor de todos',
    })
    @IsString()
    @IsNotEmpty({ message: 'Descrição é obrigatorio' })
    description: string;

    @ApiProperty({
        example: 'www.google.com.br/logo_url',
    })
    @IsString()
    logo_url: string;

    @ApiProperty({
        example: 'Ricardo',
    })
    @IsString()
    @IsNotEmpty({ message: 'Restaurante precisar do nome do dono' })
    owner: string;

    products: Product[];
}

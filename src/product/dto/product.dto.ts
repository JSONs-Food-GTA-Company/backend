import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
    @IsString()
    @IsNotEmpty({ message: 'Nome do produto obrigatório' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição não pode ficar em branco' })
    description: string;

    @IsString()
    image_url: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Produto deve ter um preço' })
    price: number;

    @IsNumber()
    @IsNotEmpty({ message: 'Restaurante é obrigatório' })
    restaurant_id: number;
}
